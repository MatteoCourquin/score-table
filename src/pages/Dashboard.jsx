import clsx from 'clsx';
import { useState } from 'react';
import Line from '../components/Line';
import Table from '../components/Table';

const Dashboard = ({ teamsQuery, namesQuery }) => {
  const [hasAssos, setHasAssos] = useState(false);
  return (
    <>
      <div className='fixed bottom-0 right-0 p-4 z-10'>
        <button
          className='text-secondary !font-arpona text-xl px-4 py-2 rounded-md bg-primary'
          onClick={() => setHasAssos(!hasAssos)}
        >
          {hasAssos ? 'Masquer' : 'Afficher'} les assos
        </button>
      </div>
      <div className='min-h-screen background-main py-10'>
        <div className='max-w-[1920px] mx-auto'>
          <h1 className='text-center text-5xl sm:text-7xl px-4'>
            <span className='text-primary shadow-text-primary font-eulogy'>
              TABLEAUX DES
            </span>
            <span className='text-secondary shadow-text-secondary font-eulogy'>
              {' '}
              SCORES
            </span>
          </h1>
          <p className='text-primary shadow-text-primary text-center text-xl pb-10 font-arpona'>
            20 points <span className='font-sans'>=</span> Conso
          </p>
          <div
            className={clsx(
              'grid-cols-1 sm:grid-cols-template px-[2vw]',
              !hasAssos ? 'flex' : 'grid'
            )}
          >
            <div className='hidden lg sm:flex'>
              <Line style='hidden sm:flex' dark={false} />
              <div className='pl-4'>
                <p className='text-primary text-3xl sm:text-4xl lg:text-5xl font-eulogy'>
                  RANG
                </p>
                {teamsQuery.isFetched &&
                  namesQuery.isFetched &&
                  (teamsQuery.data.getAllTeams.length >=
                  namesQuery.data.getAllNames.length
                    ? teamsQuery.data.getAllTeams
                    : namesQuery.data.getAllNames
                  ).map((team, index) => {
                    return (
                      <div key={index}>
                        <p
                          className={clsx(
                            'whitespace-nowrap text-primary font-sans text-xl',
                            index < 3 && 'text-4xl'
                          )}
                        >
                          {index + 1}{' '}
                          <span className='font-arpona'>
                            {index == 0 ? 'er' : 'e'}
                          </span>
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div
              className={clsx(
                'flex w-full p-0',
                hasAssos && 'shadow-text-primary sm:pr-[2vw]'
              )}
            >
              <Table
                hasAssos={hasAssos}
                isAsso={false}
                dark={false}
                query={namesQuery}
              />
              <Line style='hidden sm:flex' dark={hasAssos ? false : true} />
            </div>
            {hasAssos && (
              <div className='flex w-full shadow-text-secondary p-0 sm:pl-[7vw]'>
                <Line style='hidden sm:flex' dark={true} />
                <Table isAsso={true} dark={true} query={teamsQuery} />
                <Line style='hidden sm:flex' dark={true} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
