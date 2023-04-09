import { useState } from 'react';
import { addTeam } from '../services/mutations';
import Button from './Button';

function AddTeam({ teamsQuery }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addTeam(name, score);
      setName('');
      setScore('');
      setIsOpen(false);
      teamsQuery.refetch()
    } catch (error) {
      console.log('An error occurred while adding the team: ' + error.message);
    }
  };

  return (
    <>
      <button
        type='button'
        className='fixed bottom-4 right-4 font-sans bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center'
        onClick={() => setIsOpen(true)}
      >
        +
      </button>
      {isOpen && (
        <div className='fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white rounded-lg p-6 w-96'>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-bold mb-2'
                  htmlFor='name'
                >
                  Team Name:
                </label>
                <input
                  className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='name'
                  type='text'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-bold mb-2'
                  htmlFor='score'
                >
                  Team Score:
                </label>
                <input
                  className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='score'
                  type='number'
                  value={score}
                  onChange={(event) => setScore(event.target.value)}
                />
              </div>
              <div className='flex justify-end gap-2'>
                <Button
                  type='cancel'
                  value='Cancel'
                  onClick={() => setIsOpen(false)}
                />
                <Button
                  type='validate'
                  value='Add'
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTeam;
