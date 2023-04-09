import { GraphQLClient, gql } from 'graphql-request';
import { useEffect, useState } from 'react';
import Line from './components/Line';
import Table from './components/Table';

const App = () => {
  const [teamsAsso, setTeamAsso] = useState([]);

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
        setTeamAsso(data.getAllTeams);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='min-h-screen'>
      <h1 className='text-center text-6xl py-10'>
        <span className='text-primary shadow-text-primary font-eulogy'>TABLEAUX DES</span>
        <span className='text-secondary shadow-text-secondary font-eulogy'> SCORES</span>
      </h1>
      <div className='px-4 grid grid-cols-template'>
        <div className='flex shadow-text-primary'>
          <Line dark={false} />
          <div className='pl-4'>
            <p className='text-primary text-4xl font-eulogy'>RANG</p>
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
        </div>
        <div className='flex w-full shadow-text-primary pr-[2vw]'>
          <Table isAsso={true} dark={false} teams={teamsAsso} />
          <Line dark={false} />
        </div>
        <div className='flex w-full shadow-text-secondary pl-[7vw]'>
          <Line dark={true} />
          <Table isAsso={false} dark={true} teams={teamsAsso} />
          <Line dark={true} />
        </div>
      </div>
    </div>
  );
};

export default App;
