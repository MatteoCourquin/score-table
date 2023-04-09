import Row from './Row';

const Table = ({ teams, dark, isAsso }) => {
  return (
    <div className='w-full px-4 justify-center relative'>
      <Row style={'text-4xl font-eulogy'} dark={dark} teamName={isAsso ? 'ASSO' : 'NOM'} teamScore='SCORE' />
      {teams
        .sort((a, b) => a.score - b.score)
        .map((team, index) => {
          return (
            <Row
              key={index}
              dark={dark}
              teamName={team.name}
              teamScore={team.score}
            />
          );
        })}
    </div>
  );
};

export default Table;
