import clsx from 'clsx';
import Line from '../components/Line';
import Table from '../components/Table';

const Dashboard = ({ teamsQuery, namesQuery }) => {
  return (
    <div className='min-h-screen background-main py-10'>
      <h1 className='text-center text-5xl sm:text-7xl px-4'>
        <span className='text-primary shadow-text-primary font-eulogy'>
          TABLEAUX DES
        </span>
        <span className='text-secondary shadow-text-secondary font-eulogy'>
          {' '}
          SCORES
        </span>
      </h1>
      <p className='text-center text-xl pb-10 font-arpona'>20 points <span className='font-sans'>=</span> Conso</p>
      <div className='px-4 grid grid-cols-1 sm:grid-cols-template'>
        <div className='hidden lg sm:flex shadow-text-primary'>
          <Line style='hidden sm:flex' dark={false} />
          <div className='pl-4'>
            <p className='text-primary text-3xl sm:text-4xl lg:text-5xl font-eulogy'>
              RANG
            </p>
            {teamsQuery.isFetched &&
              namesQuery.isFetched &&
              (teamsQuery.data.getAllData.length >=
              namesQuery.data.getAllData.length
                ? teamsQuery.data.getAllData
                : namesQuery.data.getAllData
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
        <div className='flex w-full shadow-text-primary p-0 sm:pr-[2vw]'>
          <Table isAsso={false} dark={false} query={namesQuery} />
          <Line style='hidden sm:flex' dark={false} />
        </div>
        <div className='flex w-full shadow-text-secondary p-0 sm:pl-[7vw]'>
          <Line style='hidden sm:flex' dark={true} />
          <Table isAsso={true} dark={true} query={teamsQuery} />
          <Line style='hidden sm:flex' dark={true} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
