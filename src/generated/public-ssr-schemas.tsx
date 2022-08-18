/* eslint-disable  */
import * as Types from './schemas-public';

import * as Operations from './schemas-public';
import { NextRouter, useRouter } from 'next/router';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import type { NormalizedCacheObject } from '@apollo/client';

export async function getServerPageGetAmenities(
  options: Omit<Apollo.QueryOptions<Types.GetAmenitiesQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.GetAmenitiesQuery>({
    ...options,
    query: Operations.GetAmenitiesDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetAmenities = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetAmenitiesQuery,
    Types.GetAmenitiesQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetAmenitiesDocument, options);
};
export type PageGetAmenitiesComp = React.FC<{
  data?: Types.GetAmenitiesQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetAmenities = {
  getServerPage: getServerPageGetAmenities,

  usePage: useGetAmenities,
};
export async function getServerPageGetEventDetail(
  options: Omit<
    Apollo.QueryOptions<Types.GetEventDetailQueryVariables>,
    'query'
  >,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.GetEventDetailQuery>({
    ...options,
    query: Operations.GetEventDetailDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetEventDetail = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetEventDetailQuery,
    Types.GetEventDetailQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetEventDetailDocument, options);
};
export type PageGetEventDetailComp = React.FC<{
  data?: Types.GetEventDetailQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetEventDetail = {
  getServerPage: getServerPageGetEventDetail,

  usePage: useGetEventDetail,
};
export async function getServerPageGetExtraServiceCategories(
  options: Omit<
    Apollo.QueryOptions<Types.GetExtraServiceCategoriesQueryVariables>,
    'query'
  >,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.GetExtraServiceCategoriesQuery>({
    ...options,
    query: Operations.GetExtraServiceCategoriesDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetExtraServiceCategories = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetExtraServiceCategoriesQuery,
    Types.GetExtraServiceCategoriesQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetExtraServiceCategoriesDocument, options);
};
export type PageGetExtraServiceCategoriesComp = React.FC<{
  data?: Types.GetExtraServiceCategoriesQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetExtraServiceCategories = {
  getServerPage: getServerPageGetExtraServiceCategories,

  usePage: useGetExtraServiceCategories,
};
export async function getServerPageGetExtraServiceCategoriesConfig(
  options: Omit<
    Apollo.QueryOptions<Types.GetExtraServiceCategoriesConfigQueryVariables>,
    'query'
  >,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data =
    await apolloClient.query<Types.GetExtraServiceCategoriesConfigQuery>({
      ...options,
      query: Operations.GetExtraServiceCategoriesConfigDocument,
    });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetExtraServiceCategoriesConfig = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetExtraServiceCategoriesConfigQuery,
    Types.GetExtraServiceCategoriesConfigQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetExtraServiceCategoriesConfigDocument, options);
};
export type PageGetExtraServiceCategoriesConfigComp = React.FC<{
  data?: Types.GetExtraServiceCategoriesConfigQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetExtraServiceCategoriesConfig = {
  getServerPage: getServerPageGetExtraServiceCategoriesConfig,

  usePage: useGetExtraServiceCategoriesConfig,
};
export async function getServerPageGetExtraServiceTypes(
  options: Omit<
    Apollo.QueryOptions<Types.GetExtraServiceTypesQueryVariables>,
    'query'
  >,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.GetExtraServiceTypesQuery>({
    ...options,
    query: Operations.GetExtraServiceTypesDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetExtraServiceTypes = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetExtraServiceTypesQuery,
    Types.GetExtraServiceTypesQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetExtraServiceTypesDocument, options);
};
export type PageGetExtraServiceTypesComp = React.FC<{
  data?: Types.GetExtraServiceTypesQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetExtraServiceTypes = {
  getServerPage: getServerPageGetExtraServiceTypes,

  usePage: useGetExtraServiceTypes,
};
export async function getServerPageGetLocationDetail(
  options: Omit<
    Apollo.QueryOptions<Types.GetLocationDetailQueryVariables>,
    'query'
  >,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.GetLocationDetailQuery>({
    ...options,
    query: Operations.GetLocationDetailDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetLocationDetail = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetLocationDetailQuery,
    Types.GetLocationDetailQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetLocationDetailDocument, options);
};
export type PageGetLocationDetailComp = React.FC<{
  data?: Types.GetLocationDetailQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetLocationDetail = {
  getServerPage: getServerPageGetLocationDetail,

  usePage: useGetLocationDetail,
};
export async function getServerPageGetLocations(
  options: Omit<Apollo.QueryOptions<Types.GetLocationsQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.GetLocationsQuery>({
    ...options,
    query: Operations.GetLocationsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetLocations = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetLocationsQuery,
    Types.GetLocationsQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetLocationsDocument, options);
};
export type PageGetLocationsComp = React.FC<{
  data?: Types.GetLocationsQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetLocations = {
  getServerPage: getServerPageGetLocations,

  usePage: useGetLocations,
};
export async function getServerPageGetPackage(
  options: Omit<Apollo.QueryOptions<Types.GetPackageQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.GetPackageQuery>({
    ...options,
    query: Operations.GetPackageDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetPackage = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetPackageQuery, Types.GetPackageQueryVariables>,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetPackageDocument, options);
};
export type PageGetPackageComp = React.FC<{
  data?: Types.GetPackageQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetPackage = {
  getServerPage: getServerPageGetPackage,

  usePage: useGetPackage,
};
export async function getServerPageGetPackageTypes(
  options: Omit<
    Apollo.QueryOptions<Types.GetPackageTypesQueryVariables>,
    'query'
  >,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.GetPackageTypesQuery>({
    ...options,
    query: Operations.GetPackageTypesDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetPackageTypes = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetPackageTypesQuery,
    Types.GetPackageTypesQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetPackageTypesDocument, options);
};
export type PageGetPackageTypesComp = React.FC<{
  data?: Types.GetPackageTypesQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetPackageTypes = {
  getServerPage: getServerPageGetPackageTypes,

  usePage: useGetPackageTypes,
};
export async function getServerPageGetServiceGroup(
  options: Omit<
    Apollo.QueryOptions<Types.GetServiceGroupQueryVariables>,
    'query'
  >,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.GetServiceGroupQuery>({
    ...options,
    query: Operations.GetServiceGroupDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetServiceGroup = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetServiceGroupQuery,
    Types.GetServiceGroupQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetServiceGroupDocument, options);
};
export type PageGetServiceGroupComp = React.FC<{
  data?: Types.GetServiceGroupQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetServiceGroup = {
  getServerPage: getServerPageGetServiceGroup,

  usePage: useGetServiceGroup,
};
export async function getServerPageGetServiceGroups(
  options: Omit<
    Apollo.QueryOptions<Types.GetServiceGroupsQueryVariables>,
    'query'
  >,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.GetServiceGroupsQuery>({
    ...options,
    query: Operations.GetServiceGroupsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetServiceGroups = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetServiceGroupsQuery,
    Types.GetServiceGroupsQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetServiceGroupsDocument, options);
};
export type PageGetServiceGroupsComp = React.FC<{
  data?: Types.GetServiceGroupsQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetServiceGroups = {
  getServerPage: getServerPageGetServiceGroups,

  usePage: useGetServiceGroups,
};
export async function getServerPageGetServiceGroupsByLocation(
  options: Omit<
    Apollo.QueryOptions<Types.GetServiceGroupsByLocationQueryVariables>,
    'query'
  >,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.GetServiceGroupsByLocationQuery>({
    ...options,
    query: Operations.GetServiceGroupsByLocationDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetServiceGroupsByLocation = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetServiceGroupsByLocationQuery,
    Types.GetServiceGroupsByLocationQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetServiceGroupsByLocationDocument, options);
};
export type PageGetServiceGroupsByLocationComp = React.FC<{
  data?: Types.GetServiceGroupsByLocationQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetServiceGroupsByLocation = {
  getServerPage: getServerPageGetServiceGroupsByLocation,

  usePage: useGetServiceGroupsByLocation,
};
export async function getServerPageGetEvents(
  options: Omit<Apollo.QueryOptions<Types.GetEventsQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.GetEventsQuery>({
    ...options,
    query: Operations.GetEventsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetEvents = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetEventsQuery, Types.GetEventsQueryVariables>,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetEventsDocument, options);
};
export type PageGetEventsComp = React.FC<{
  data?: Types.GetEventsQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetEvents = {
  getServerPage: getServerPageGetEvents,

  usePage: useGetEvents,
};
export async function getServerPageSearchPackage(
  options: Omit<
    Apollo.QueryOptions<Types.SearchPackageQueryVariables>,
    'query'
  >,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.SearchPackageQuery>({
    ...options,
    query: Operations.SearchPackageDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useSearchPackage = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.SearchPackageQuery,
    Types.SearchPackageQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.SearchPackageDocument, options);
};
export type PageSearchPackageComp = React.FC<{
  data?: Types.SearchPackageQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrSearchPackage = {
  getServerPage: getServerPageSearchPackage,

  usePage: useSearchPackage,
};
export async function getServerPageSearchPackageUnitByService(
  options: Omit<
    Apollo.QueryOptions<Types.SearchPackageUnitByServiceQueryVariables>,
    'query'
  >,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.SearchPackageUnitByServiceQuery>({
    ...options,
    query: Operations.SearchPackageUnitByServiceDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useSearchPackageUnitByService = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.SearchPackageUnitByServiceQuery,
    Types.SearchPackageUnitByServiceQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.SearchPackageUnitByServiceDocument, options);
};
export type PageSearchPackageUnitByServiceComp = React.FC<{
  data?: Types.SearchPackageUnitByServiceQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrSearchPackageUnitByService = {
  getServerPage: getServerPageSearchPackageUnitByService,

  usePage: useSearchPackageUnitByService,
};
