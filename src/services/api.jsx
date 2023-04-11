import { GraphQLClient, gql } from 'graphql-request';

const endpoint =
  'https://3nhzv3yib5aqfherckwq5z6i3i.appsync-api.eu-west-1.amazonaws.com/graphql';
const apiKey = 'da2-zqdvhftytfhujagxtlesedrmkq';

const client = new GraphQLClient(endpoint, {
  headers: {
    'x-api-key': apiKey,
  },
});

export const createTeam = ({ name, score }) => {
  return client.request(`
    mutation {
      createTeam(name: "${name}", score: "${score}") {
        name
        score
      }
    }
  `);
};

export const createName = ({ name, score }) => {
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

export const deleteTeam = (name) => {
  return client.request(`
    mutation {
      deleteTeam(name: "${name}")
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

export const updateTeam = ({ name, newScore }) => {
  return client.request(`
    mutation {
      updateTeam(name: "${name}", newScore: "${newScore}") {
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

export const getAllNames = () => {
  return client.request(`
    query getAllNames {
      getAllNames {
        name
        score
      }
    }
  `);
};

export const getAllTeams = () => {
  return client.request(`
    query getAllTeams {
      getAllTeams {
        name
        score
      }
    }
  `);
};
