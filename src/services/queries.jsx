import { GraphQLClient, gql } from 'graphql-request';

const endpoint =
  'https://mm6sp4prrbc5rjs7vqugyhg7ti.appsync-api.eu-west-1.amazonaws.com/graphql';
const apiKey = 'da2-qydhzgk3tfb5zceto76fznlufy';

const client = new GraphQLClient(endpoint, {
  headers: {
    'x-api-key': apiKey,
  },
});

export const getTeam = (id) => {
  return client.request(`
    query getTeam {
      getTeam(name: "${id}") {
        name
        score
      }
    }
  `);
};

export const getTeams = () => {
  return client.request(`
    query getAllTeams {
      getAllTeams {
        name
        score
      }
    }
  `);
};
