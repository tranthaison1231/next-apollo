import { ApolloClient, ApolloLink, from } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { setContext } from '@apollo/client/link/context';
import get from 'lodash-es/get';
import { ErrorResponse, onError } from 'apollo-link-error';
import { Auth } from 'aws-amplify';
import { i18n } from 'next-i18next';
import { cache } from './cache';
import { getAccessToken } from '@/shared/utils/auth';
import { BUSINESS_ID, PUBLIC_COUNTRY_API_URL } from '@/shared/utils/constant';
import { getDeviceToken } from '@/shared/utils/tools';

export enum ClientName {
  Public = 'public',
  Default = 'default',
  Country = 'Country',
}

const apiLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_BASE_URL });

const countryLink = new HttpLink({ uri: PUBLIC_COUNTRY_API_URL });

const publicLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_BASE_PUBLIC_URL,
});

const withToken = setContext(async _operation => {
  const token = getAccessToken();
  if (token) return { token };
  return {
    token: null,
  };
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const { headers, token, clientName } = operation.getContext();
  const deviceToken = getDeviceToken();
  operation.setContext({
    headers: {
      ...headers,
      ...(token &&
        clientName !== ClientName.Public && {
          ['accept-language']: i18n?.language,
          authorization: `Bearer ${token}`,
          platform: 'WHITELABEL_WEB',
        }),
      businessid: BUSINESS_ID,
      deviceToken,
    },
  });
  return forward(operation);
});

const errorHandler = onError(({ networkError }: ErrorResponse) => {
  if (networkError) {
    if (get(networkError, 'statusCode') === 401) {
      Auth.signOut();
      window.location.href = '/login';
    }
  }
}) as unknown as ApolloLink;

export const client = new ApolloClient({
  cache,
  connectToDevTools: !process.env.NEXT_PUBLIC_NODE_ENV,
  defaultOptions: {
    watchQuery: {
      notifyOnNetworkStatusChange: true,
    },
  },
  link: from([
    withToken,
    authMiddleware,
    errorHandler,
    ApolloLink.split(
      operation => operation.getContext().clientName === ClientName.Country,
      countryLink,
    ),
    ApolloLink.split(
      operation => operation.getContext().clientName === ClientName.Public,
      publicLink,
      apiLink,
    ),
  ]),
});
