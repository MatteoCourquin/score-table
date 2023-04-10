import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddTeam from '../components/AddTeam';
import Button from '../components/Button';
import { IconBin, IconDashboard, Loader } from '../components/Icons';

const Admin = ({
  query,
  updateMutation,
  deleteMutation,
  addMutation,
  isAsso,
}) => {
  const [editing, setEditing] = useState(false);
  const [editedScore, setEditedScore] = useState(null);
  const handleScoreClick = (event, team) => {
    event.preventDefault();
    setEditing(team.name);
    setEditedScore(team.score);
  };
  const handleScoreChange = (event) => {
    setEditedScore(event.target.value);
  };
  const handleScoreBlur = (team) => {
    setEditing(false);
    if (editedScore !== null) {
      updateMutation.mutate({
        name: team.name,
        newScore: parseInt(editedScore),
      });
    }
  };
  return (
    <div className='px-4 bg-white h-screen'>
      <div className='pl-8 py-10 flex items-center gap-4'>
        <Link to='/'>
          <IconDashboard />
        </Link>
        <h1 className='text-6xl text-primary font-eulogy'>
          Admin {isAsso ? 'asso' : 'joueur'}
        </h1>
      </div>
      <AddTeam isAsso={isAsso} addMutation={addMutation} />
      {query.isLoading && <Loader />}
      {query.isSuccess && (
        <div className='flex flex-col items-center'>
          {query.data.getAllData
            .sort((a, b) => parseInt(b.score) - parseInt(a.score))
            .map((team) => {
              return (
                <div
                  key={team.name}
                  className='flex flex-row gap-4 items-center justify-between w-full border-b py-1'
                >
                  <p className='w-1/3 whitespace-nowrap overflow-hidden text-ellipsis'>
                    {team.name}
                  </p>
                  <div className='flex flex-row gap-2 items-center'>
                    <Button
                      style='whitespace-nowrap hidden md:block'
                      type='click'
                      value='- 10'
                      onClick={() =>
                        updateMutation.mutate({
                          name: team.name,
                          newScore: parseInt(team.score) - 10,
                        })
                      }
                    />
                    <Button
                      style='whitespace-nowrap hidden md:block'
                      type='click'
                      value='- 5'
                      onClick={() =>
                        updateMutation.mutate({
                          name: team.name,
                          newScore: parseInt(team.score) - 5,
                        })
                      }
                    />
                    <Button
                      style='whitespace-nowrap hidden sm:block'
                      type='click'
                      value='-'
                      onClick={() =>
                        updateMutation.mutate({
                          name: team.name,
                          newScore: parseInt(team.score) - 1,
                        })
                      }
                    />
                    {editing === team.name ? (
                      <input
                        className='w-24 text-center font-sans py-1 px-3 border rounded'
                        type='number'
                        value={editedScore}
                        onChange={handleScoreChange}
                        onBlur={() => handleScoreBlur(team)}
                        autoFocus
                      />
                    ) : (
                      <p
                        className='min-w-[70px] text-center py-1 px-3 font-sans border rounded'
                        onClick={(event) => handleScoreClick(event, team)}
                      >
                        {team.score}
                      </p>
                    )}
                    <Button
                      style='whitespace-nowrap hidden sm:block'
                      type='click'
                      value='+'
                      onClick={() =>
                        updateMutation.mutate({
                          name: team.name,
                          newScore: parseInt(team.score) + 1,
                        })
                      }
                    />
                    <Button
                      style='whitespace-nowrap hidden md:block'
                      type='click'
                      value='+ 5'
                      onClick={() =>
                        updateMutation.mutate({
                          name: team.name,
                          newScore: parseInt(team.score) + 5,
                        })
                      }
                    />
                    <Button
                      style='whitespace-nowrap hidden md:block'
                      type='click'
                      value='+ 10'
                      onClick={() =>
                        updateMutation.mutate({
                          name: team.name,
                          newScore: parseInt(team.score) + 10,
                        })
                      }
                    />
                  </div>
                  <Button
                    style='ml-6 whitespace-nowrap stroke-white'
                    type='delete'
                    value={<IconBin />}
                    onClick={() => deleteMutation.mutate(team.name)}
                  />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Admin;
