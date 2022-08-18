import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ID: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  String: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Boolean: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Int: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Float: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-explicit-any
  _Any: any;
};

export type Continent = {
  code: Scalars['ID'];
  countries: Array<Country>;
  name: Scalars['String'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  capital?: Maybe<Scalars['String']>;
  code: Scalars['ID'];
  continent: Continent;
  currency?: Maybe<Scalars['String']>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  languages: Array<Language>;
  name: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  states: Array<State>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _entities: Array<Maybe<Entity>>;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _service: Service;
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};

export type QueryEntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};

export type QueryContinentArgs = {
  code: Scalars['ID'];
};

export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};

export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};

export type QueryCountryArgs = {
  code: Scalars['ID'];
};

export type QueryLanguageArgs = {
  code: Scalars['ID'];
};

export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  code?: Maybe<Scalars['String']>;
  country: Country;
  name: Scalars['String'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type Entity = Continent | Country | Language;

export type Service = {
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};

export const CountriesDocument = gql`
  query countries {
    countries {
      name
      states {
        name
      }
    }
  }
`;

/**
 * __useCountriesQuery__
 *
 * To run a query within a React component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CountriesQuery,
    CountriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CountriesQuery, CountriesQueryVariables>(
    CountriesDocument,
    options,
  );
}
export function useCountriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CountriesQuery,
    CountriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CountriesQuery, CountriesQueryVariables>(
    CountriesDocument,
    options,
  );
}
export type CountriesQueryHookResult = ReturnType<typeof useCountriesQuery>;
export type CountriesLazyQueryHookResult = ReturnType<
  typeof useCountriesLazyQuery
>;
export type CountriesQueryResult = Apollo.QueryResult<
  CountriesQuery,
  CountriesQueryVariables
>;
export function refetchCountriesQuery(variables?: CountriesQueryVariables) {
  return { query: CountriesDocument, variables };
}
export type CountriesQueryVariables = Exact<{ [key: string]: never }>;

export type CountriesQuery = {
  countries: Array<{ name: string; states: Array<{ name: string }> }>;
};
