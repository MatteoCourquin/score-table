import { useState } from 'react';
import Button from './Button';

function AddTeam({ isAsso, addMutation }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className='fixed bottom-4 text-center right-4 font-sans font-medium bg-blue-500 hover:bg-blue-700 !text-white rounded-full w-12 h-12 flex items-center justify-center'
        onClick={() => setIsOpen(true)}
      >
        +
      </button>
      {isOpen && (
        <div className='fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white rounded-lg p-6 w-96'>
            <div className='mb-4'>
              <label
                className='font-sans block text-gray-700 font-bold mb-2'
                htmlFor='name'
              >
                {isAsso ? "Nom de l'asso" : 'Nom du joueur'}
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
                className='font-sans block text-gray-700 font-bold mb-2'
                htmlFor='score'
              >
                {isAsso ? "Score de l'asso" : 'Score du joueur'}
              </label>
              <input
                className='font-sans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='score'
                type='number'
                value={score}
                onChange={(event) => setScore(event.target.value)}
              />
            </div>
            <div className='flex justify-end gap-2'>
              <Button
                type='cancel'
                value='Annuler'
                onClick={() => setIsOpen(false)}
              />
              <Button
                type='validate'
                value={addMutation.isLoading ? 'load' : 'Ajouter'}
                onClick={() => {
                  addMutation.mutate({ name, score });
                  setName('');
                  setScore('');
                  setIsOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTeam;
