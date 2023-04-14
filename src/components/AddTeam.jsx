import clsx from 'clsx';
import { useState } from 'react';
import Button from './Button';

function AddTeam({ isAsso, addMutation, query }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorScore, setIsErrorScore] = useState(false);
  const [isExist, setIsExist] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isExistData = (nameVerif) =>
    (isAsso ? query.data.getAllTeams : query.data.getAllNames)
      .map((name) => name.name.toLocaleLowerCase())
      .includes(nameVerif.toLocaleLowerCase())
      ? setIsExist(true)
      : setIsExist(false);

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
            {(isErrorName || isErrorScore) && (
              <p className='text-red-500'>
                Veuillez remplir les champs obligatoires
              </p>
            )}
            <div className='mb-4'>
              <label
                className='font-sans block text-gray-700 font-bold mb-2'
                htmlFor='name'
              >
                {isAsso ? "Nom de l'asso" : 'Nom du joueur'}
                {isErrorName && (
                  <span className='text-red-500 font-sans'> *</span>
                )}
              </label>
              {isExist && (
                <p className='text-red-500'>
                  {isAsso ? 'Cette Asso' : 'Ce joueur'} éxiste déjà
                </p>
              )}
              <input
                className={clsx(
                  isErrorName && 'border-red-500',
                  isExist && 'border-red-500',
                  'appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                )}
                id='name'
                type='text'
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  event.target.value == ''
                    ? setIsErrorName(true)
                    : setIsErrorName(false);
                  isExistData(event.target.value);
                }}
              />
            </div>
            <div className='mb-4'>
              <label
                className='font-sans block text-gray-700 font-bold mb-2'
                htmlFor='score'
              >
                {isAsso ? "Score de l'asso" : 'Score du joueur'}
                {isErrorScore && (
                  <span className='text-red-500 font-sans'> *</span>
                )}
              </label>
              <input
                className={clsx(
                  isErrorScore && 'border-red-500',
                  'font-sans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                )}
                id='score'
                type='number'
                value={score}
                onChange={(event) => {
                  event.target.value == ''
                    ? setIsErrorScore(true)
                    : setIsErrorScore(false);
                  setScore(event.target.value);
                }}
              />
            </div>
            <div className='flex justify-end gap-2'>
              <Button
                type='cancel'
                value='Annuler'
                onClick={() => {
                  setIsOpen(false)
                  setName('')
                  setIsExist(false)
                  setIsErrorName(false)
                  setIsErrorScore(false)
                }}
              />
              <Button
                type='validate'
                value={addMutation.isLoading ? 'load' : 'Ajouter'}
                onClick={() => {
                  if (isErrorName || isErrorScore || isExist) {
                    return;
                  }
                  addMutation.mutate({ name, score });
                  setIsError(false);
                  setIsExist(false);
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
