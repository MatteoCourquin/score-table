import Row from './Row';

const Table = ({ teams, dark }) => {

  return (
    <div className='justify-center relative'>
      <Row dark={dark} teamName='Equipe' teamScore='Score' />
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
