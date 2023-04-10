import { GraphQLClient } from 'graphql-request';

const endpoint =
  'https://avbveq2mtrfb3blk6jhqridonq.appsync-api.eu-west-1.amazonaws.com/graphql';
const apiKey = 'da2-2mzwkrpz3neqvb6hsmedundjoq';

const client = new GraphQLClient(endpoint, {
  headers: {
    'x-api-key': apiKey,
  },
});

export const addName = ({name, score}) => {
  return client.request(`
    mutation {
      createName(name: "${name}", score: "${score}") {
        name
        score
      }
    }
  `);
};

export const deleteName = (name) => {
  return client.request(`
    mutation {
      deleteName(name: "${name}")
    }
  `);
};

export const updateName = ({ name, newScore }) => {
  return client.request(`
    mutation {
      updateName(name: "${name}", newScore: "${newScore}") {
        name
        score
      }
    }
  `);
};

export const getName = (id) => {
  return client.request(`
    query getName {
      getName(name: "${id}") {
        name
        score
      }
    }
  `);
};

export const getNames = () => {
  return client.request(`
    query getAllNames {
      getAllData {
        name
        score
      }
    }
  `);
};
