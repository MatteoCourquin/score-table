import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://kshjgzmtbrho3dzgi5egeizj2q.appsync-api.eu-west-1.amazonaws.com/graphql';
const apiKey = 'da2-dxgapaqjjze3rdhbvjlhm4vppy'

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
