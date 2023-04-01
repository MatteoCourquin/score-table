import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import Row from './components/Row';

const App = () => {
  const [teams, setTeams] = useState([
    { name: 'Boring Team', score: 1 },
    { name: 'Cool Team', score: 1 },
    { name: 'Awesome Team', score: 1 },
    { name: 'Amazing Team', score: 1 },
    { name: 'Fantastic Team', score: 1 },
    { name: 'Incredible Team', score: 1 },
    { name: 'Marvelous Team', score: 1 },
    { name: 'Spectacular Team', score: 1 },
    { name: 'Terrific Team', score: 1 },
    { name: 'Wonderful Team', score: 1 },
  ]);

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

  const handleDecrement = (index) => {
    setTeams((prevState) => {
      const newTeams = [...prevState];
      newTeams[index].score --;
      return newTeams;
    });
  };

  const handleIncrement = (index) => {
    setTeams((prevState) => {
      const newTeams = [...prevState];
      newTeams[index].score ++;
      return newTeams;
    });
  };

  return (
    <div>
      {transitions(({ y, ...rest }, item, { key }, index) => (
        <animated.div
          key={key}
          className='w-full px-3'
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
