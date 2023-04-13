import { API, graphqlOperation } from 'aws-amplify';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  subscriptionCreateName,
  subscriptionCreateTeam,
  subscriptionUpdateName,
  subscriptionUpdateTeam,
} from '../services/api';
import { Loader } from './Icons';
import Row from './Row';

const Table = ({ query, dark, isAsso, hasAssos }) => {
  const [dataTeams, setDataTeams] = useState([]);
  const [dataNames, setDataNames] = useState([]);

  useEffect(() => {
    if (query.isFetched) {
      if (isAsso) {
        setDataTeams([...query.data.getAllTeams]);
      } else {
        setDataNames([...query.data.getAllNames]);
      }
    }
  }, [query.data]);

  useEffect(() => {
    if (isAsso) {
      const observerCreateTeam = API.graphql(
        graphqlOperation(subscriptionCreateTeam)
      ).subscribe({
        next: ({ provider, value }) => {
          setDataTeams([...dataTeams, value.data.onCreateTeam]);
        },
        error: (error) => console.warn(error),
      });
      const observerUpdateTeam = API.graphql(
        graphqlOperation(subscriptionUpdateTeam)
      ).subscribe({
        next: ({ provider, value }) => {
          console.log(value);
          const newDataTeams = dataTeams.map((data) => {
            if (data.name === value.data.onTeamUpdate.name) {
              return value.data.onTeamUpdate;
            } else {
              return data;
            }
          });
          setDataTeams(newDataTeams);
        },
        error: (error) => console.warn(error),
      });
      return () => {
        observerCreateTeam.unsubscribe();
        observerUpdateTeam.unsubscribe();
      };
    } else {
      const observerCreateName = API.graphql(
        graphqlOperation(subscriptionCreateName)
      ).subscribe({
        next: ({ provider, value }) => {
          setDataNames([...dataNames, value.data.onCreateName]);
        },
        error: (error) => console.warn(error),
      });
      const observerUpdateName = API.graphql(
        graphqlOperation(subscriptionUpdateName)
      ).subscribe({
        next: ({ provider, value }) => {
          const newDataNames = dataNames.map((data) => {
            if (data.name === value.data.onNameUpdate.name) {
              return value.data.onNameUpdate;
            } else {
              return data;
            }
          });
          setDataNames(newDataNames);
        },
        error: (error) => console.warn(error),
      });
      return () => {
        observerCreateName.unsubscribe();
        observerUpdateName.unsubscribe();
      };
    }
  }, [dataNames, dataTeams]);

  return (
    <div className='w-full px-4 justify-center relative pb-10 sm:pb-0'>
      <div
        className={clsx(
          dark ? 'text-secondary' : 'text-primary',
          'flex justify-between items-center'
        )}
      >
        <Link
          className='text-3xl sm:text-4xl lg:text-5xl font-eulogy whitespace-nowrap text-ellipsis'
          to='admin'
        >
          {isAsso ? 'ASSO' : 'JOUEUR'}
        </Link>
        <p
          className={clsx(
            !hasAssos && 'text-secondary',
            'text-3xl sm:text-4xl lg:text-5xl font-eulogy whitespace-nowrap inline-block text-right'
          )}
        >
          SCORE
        </p>
      </div>
      {query.isLoading && <Loader />}
      {query.isFetched &&
        isAsso &&
        dataTeams
          .sort((a, b) => b.score - a.score)
          .map((data, index) => {
            return (
              <Row
                key={index}
                style={clsx(index < 3 && 'text-4xl')}
                dark={dark}
                name={data.name}
                score={data.score}
              />
            );
          })}
      {query.isFetched &&
        !isAsso &&
        dataNames
          .sort((a, b) => b.score - a.score)
          .map((data, index) => {
            return (
              <Row
                hasAssos={hasAssos}
                key={index}
                style={clsx(index < 3 && 'text-4xl')}
                dark={dark}
                name={data.name}
                score={data.score}
              />
            );
          })}
    </div>
  );
};

export default Table;
