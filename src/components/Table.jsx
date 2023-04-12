import { API, graphqlOperation } from 'aws-amplify';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { subscriptionNameQuery, subscriptionTeamQuery } from '../services/api';
import { Loader } from './Icons';
import Row from './Row';

const Table = ({ query, dark, isAsso }) => {
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
      const subscriptionTeams = API.graphql(
        graphqlOperation(subscriptionTeamQuery)
      ).subscribe({
        next: ({ provider, value }) => {
          setDataTeams([...dataTeams, value.data.onTeamUpdate]);
        },
        error: (error) => console.warn(error),
      });
    } else {
      const subscriptionNames = API.graphql(
        graphqlOperation(subscriptionNameQuery)
      ).subscribe({
        next: ({ provider, value }) => {
          setDataNames([...dataNames, value.data.onNameUpdate]);
        },
        error: (error) => console.warn(error),
      });
    }
  }, [dataTeams, dataNames]);

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
          to={isAsso ? 'admin-asso' : 'admin-name'}
        >
          {isAsso ? 'ASSO' : 'JOUEUR'}
        </Link>
        <p
          className={
            'text-3xl sm:text-4xl lg:text-5xl font-eulogy whitespace-nowrap inline-block text-right'
          }
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
