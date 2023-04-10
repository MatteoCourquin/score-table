import AddTeam from '../components/AddTeam';
import Button from '../components/Button';
import Loader from '../components/Loader';

const Admin = ({ query, updateMutation, deleteMutation, addMutation, isAsso }) => {
  return (
    <div className='px-4 bg-white h-screen'>
      <h1 className='pl-8 text-6xl py-10 text-primary font-eulogy'>
        Admin {isAsso ? 'asso' : 'joueur'}
      </h1>
      <AddTeam isAsso={isAsso} addMutation={addMutation} />
      {query.isLoading && <Loader />}
      {query.isSuccess && (
        <div className='flex flex-col items-center'>
          {query.data.getAllData.map((team) => (
            <div
              key={team.name}
              className='flex flex-row gap-4 items-center justify-between w-full border-b py-1'
            >
              <p>{team.name}</p>
              <div className='flex flex-row gap-2 items-center'>
                <Button
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
                  type='click'
                  value='-'
                  onClick={() =>
                    updateMutation.mutate({
                      name: team.name,
                      newScore: parseInt(team.score) - 1,
                    })
                  }
                />
                <p className='w-12 text-center font-sans'>{team.score}</p>
                <Button
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
                  style='ml-6'
                  type='delete'
                  value={deleteMutation.isLoading ? 'suppression en cours' : 'delete'}
                  onClick={() => deleteMutation.mutate(team.name)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
