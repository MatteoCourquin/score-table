import { Amplify } from 'aws-amplify';
import { gql, GraphQLClient } from 'graphql-request';

const endpoint =
  'https://3nhzv3yib5aqfherckwq5z6i3i.appsync-api.eu-west-1.amazonaws.com/graphql';
const apiKey = 'da2-zqdvhftytfhujagxtlesedrmkq';

const client = new GraphQLClient(endpoint, {
  headers: {
    'x-api-key': apiKey,
  },
});

const myAppConfig = {
  aws_appsync_graphqlEndpoint:
    'https://3nhzv3yib5aqfherckwq5z6i3i.appsync-api.eu-west-1.amazonaws.com/graphql',
  aws_appsync_region: 'eu-west-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-zqdvhftytfhujagxtlesedrmkq',
};

Amplify.configure(myAppConfig);

export const subscriptionCreateName = gql`
  subscription {
    onCreateName {
      name
      score
    }
  }
`;

export const subscriptionUpdateName = gql`
  subscription {
    onNameUpdate {
      name
      score
    }
  }
`;

export const subscriptionDeleteName = gql`
  subscription {
    onDeleteName
  }
`;

export const subscriptionCreateTeam = gql`
  subscription {
    onCreateTeam {
      name
      score
    }
  }
`;

export const subscriptionUpdateTeam = gql`
  subscription {
    onTeamUpdate {
      name
      score
    }
  }
`;

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
