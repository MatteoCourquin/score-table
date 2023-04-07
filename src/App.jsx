import request, { GraphQLClient, gql } from 'graphql-request';
import { useEffect, useState } from 'react';
import Table from './components/Table';
import Line from './components/Line';

const App = () => {
  const [teamsAsso, setTeamAsso] = useState([
    { name: 'Team 1', score: 10 },
    { name: 'Team 2', score: 20 },
    { name: 'Team 4', score: 40 },
    { name: 'Team 7', score: 70 },
    { name: 'Team 6', score: 60 },
    { name: 'Team 5', score: 50 },
    { name: 'Team 3', score: 30 },
    { name: 'Team 8', score: 80 },
    { name: 'Team 8', score: 80 },
    { name: 'Team 8', score: 80 },
    { name: 'Team 8', score: 80 },
    { name: 'Team 8', score: 80 },
    { name: 'Team 8', score: 80 },
    { name: 'Team 8', score: 80 },
    { name: 'Team 8', score: 80 },
  ]);

  const endpoint =
    'https://mm6sp4prrbc5rjs7vqugyhg7ti.appsync-api.eu-west-1.amazonaws.com/graphql';
  const apiKey = 'da2-qydhzgk3tfb5zceto76fznlufy';

  const client = new GraphQLClient(endpoint, {
    headers: {
      'x-api-key': apiKey,
    },
  });

  const mutation = gql`
    mutation {
      createTeam(name: "The Team 8", score: "20") {
        name
        score
      }
    }
  `;

  const query = `
    query getTeam {
      getTeam(name: "Awesome Team") {
        name
        score
      }
    }
  `;

  const queryAll = `
    query getAllTeams {
      getAllTeams {
        name
        score
      }
    }
  `;

  useEffect(() => {
    // client.request(mutation).then((data) => console.log(data));
    client
      .request(queryAll)
      .then((data) => {
        // setTeamAsso(data.getAllTeams);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='min-h-screen'>
      <h1 className='text-center'><span className="text-primary">Tableau Des</span><span className="text-secondary"> Scores</span></h1>
      <div className='flex gap-4 px-4'>
        <Line dark={false} />
        <div>
          <p className='text-primary'>Score</p>
          {teamsAsso.map((team, index) => {
            return (
              <div>
                <p className='whitespace-nowrap text-primary'>
                  {index + 1} <span className='text-sm'>e</span>
                </p>
              </div>
            );
          })}
        </div>
        <div className='w-full'>
          <Table dark={false} teams={teamsAsso} />
        </div>
        <Line dark={false} />
        <div className='w-32'></div>
        <Line dark={true} />
        <div className='w-full'>
          <Table dark={true} teams={teamsAsso} />
        </div>
        <Line dark={true} />
      </div>
    </div>
  );
};

export default App;
