import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'https://esu-cms.hostweblankan.in/graphql';

export const graphQLClient = new GraphQLClient(endpoint);

