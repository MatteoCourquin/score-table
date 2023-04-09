import Line from '../components/Line';
import Table from '../components/Table';

const Dashboard = ({teams}) => {
  return (
    <div className='min-h-screen'>
      <h1 className='text-center text-6xl py-10'>
        <span className='text-primary shadow-text-primary font-eulogy'>
          TABLEAUX DES
        </span>
        <span className='text-secondary shadow-text-secondary font-eulogy'>
          {' '}
          SCORES
        </span>
      </h1>
      <div className='px-4 grid grid-cols-template'>
        <div className='flex shadow-text-primary'>
          <Line dark={false} />
          <div className='pl-4'>
            <p className='text-primary text-4xl font-eulogy'>RANG</p>
            {teams.map((team, index) => {
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
          <Table isAsso={false} dark={false} teams={teams} />
          <Line dark={false} />
        </div>
        <div className='flex w-full shadow-text-secondary pl-[7vw]'>
          <Line dark={true} />
          <Table isAsso={true} dark={true} teams={teams} />
          <Line dark={true} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
