import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://esoft.local/graphql';

export const graphQLClient = new GraphQLClient(endpoint);
