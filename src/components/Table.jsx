import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Loader } from './Icons';
import Row from './Row';
import { useEffect, useState } from 'react';

const Table = ({ query, dark, isAsso }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (query.isFetched) {
      setData(isAsso ? query.data.getAllTeams : query.data.getAllNames);
    }
  }, [query, isAsso]);
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
        data
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
