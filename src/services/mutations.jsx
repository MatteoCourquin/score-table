import { GraphQLClient, gql } from 'graphql-request';

const endpoint =
  'https://mm6sp4prrbc5rjs7vqugyhg7ti.appsync-api.eu-west-1.amazonaws.com/graphql';
const apiKey = 'da2-qydhzgk3tfb5zceto76fznlufy';

const client = new GraphQLClient(endpoint, {
  headers: {
    'x-api-key': apiKey,
  },
});

export const addTeam = (name, score) => {
  return client.request(`
    mutation {
      createTeam(name: "${name}", score: "${score}") {
        name
        score
      }
    }
  `);
};
