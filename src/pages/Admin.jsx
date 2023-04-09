import { useEffect, useState } from 'react';
import AddTeam from '../components/AddTeam';
import { deleteTeam, updateTeam } from '../services/mutations';

const Admin = ({ teamsQuery }) => {
  const [editingTeam, setEditingTeam] = useState(null);
  const [newScore, setNewScore] = useState('');

  const handleScoreChange = (event) => {
    setNewScore(event.target.value);
  };

  const handleUpdateScore = () => {
    if (editingTeam && newScore) {
      updateTeam(editingTeam.name, newScore)
        .then(() => {
          setEditingTeam(null);
          setNewScore('');
          teamsQuery.refetch();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className='px-4 bg-neutral-300 h-screen'>
      <h1 className='pl-8 text-6xl py-10 text-primary shadow-text-primary font-eulogy'>
        Admin
      </h1>
      <AddTeam />
      <div className='flex flex-col items-center'>
        {teamsQuery.data.getAllTeams.map((team) => (
          <div
            key={team.name}
            className='flex flex-row gap-4 items-center justify-between w-1/2'
          >
            <div className='flex flex-row gap-2 items-center'>
              <p>{team.name}</p>
              <p>{team.score}</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              {editingTeam?.name === team.name ? (
                <>
                  <input
                    type='text'
                    className='border rounded py-2 px-3 w-1/2'
                    value={newScore}
                    onChange={handleScoreChange}
                  />
                  <button
                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                    onClick={handleUpdateScore}
                  >
                    Save
                  </button>
                  <button
                    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => {
                      setEditingTeam(null);
                      setNewScore('');
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => {
                      setEditingTeam(team);
                      setNewScore(team.score);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => {
                      deleteTeam(team.name);
                      teamsQuery.refetch();
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
