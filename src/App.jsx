import React, { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import Row from './components/Row';

const App = () => {
  const teamsFromLocalStorage = JSON.parse(localStorage.getItem('teams'));
  const [teams, setTeams] = useState([...teamsFromLocalStorage]);
  const [rows, setRows] = useState(teams);
  const height = 120;
  const transitions = useTransition(
    rows
      .sort((a, b) => b.score - a.score)
      .map((team, i) => ({ ...team, y: i * height })),
    {
      from: { position: 'absolute', opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
      key: (item) => item?.name,
    }
  );

  const saveTeamsOnLocalStorage = () => {
    localStorage.setItem('teams', JSON.stringify(teams));
  };

  const handleDecrement = (index) => {
    setTeams((prevState) => {
      const newTeams = [...prevState];
      newTeams[index].score--;
      return newTeams;
    });
    saveTeamsOnLocalStorage();
  };

  const handleIncrement = (index) => {
    setTeams((prevState) => {
      const newTeams = [...prevState];
      newTeams[index].score++;
      return newTeams;
    });
    saveTeamsOnLocalStorage();
  };

  return (
    <div className='flex justify-center'>
      {transitions(({ y, ...rest }, item, { key }, index) => (
        <animated.div
          key={key}
          className='w-full px-3 max-w-5xl'
          style={{
            transform: y.to((y) => `translate3d(0,${y}px,0)`),
            ...rest,
          }}
        >
          <Row
            key={item.name}
            teamName={item.name}
            teamScore={item.score}
            decrementScore={() =>
              handleDecrement(
                teams.findIndex((team) => team.name === item.name)
              )
            }
            incrementScore={() =>
              handleIncrement(
                teams.findIndex((team) => team.name === item.name)
              )
            }
          />
        </animated.div>
      ))}
    </div>
  );
};

export default App;
