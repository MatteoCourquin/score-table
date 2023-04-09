import AddTeam from '../components/AddTeam';
import Button from '../components/Button';
import { deleteTeam, updateTeam } from '../services/mutations';

const Admin = ({ teamsQuery }) => {
  return (
    <div className='px-4 bg-white h-screen'>
      <h1 className='pl-8 text-6xl py-10 text-primary shadow-text-primary font-eulogy'>
        Admin
      </h1>
      <AddTeam teamsQuery={teamsQuery} />
      <div className='flex flex-col items-center'>
        {teamsQuery.data.getAllTeams.map((team) => (
          <div
            key={team.name}
            className='flex flex-row gap-4 items-center justify-between w-full border-b py-1'
          >
            <p>{team.name}</p>
            <div className='flex flex-row gap-2 items-center'>
              <Button
                type='click'
                value='- 5'
                onClick={() => {
                  updateTeam(team.name, parseInt(team.score) - 5);
                  teamsQuery.refetch();
                }}
              />
              <Button
                type='click'
                value='-'
                onClick={() => {
                  updateTeam(team.name, parseInt(team.score) - 1);
                  teamsQuery.refetch();
                }}
              />
              <p className='w-12 text-center font-sans'>{team.score}</p>
              <Button
                type='click'
                value='+'
                onClick={() => {
                  updateTeam(team.name, parseInt(team.score) + 1);
                  teamsQuery.refetch();
                }}
              />
              <Button
                type='click'
                value='+ 5'
                onClick={() => {
                  updateTeam(team.name, parseInt(team.score) + 5);
                  teamsQuery.refetch();
                }}
              />
              <Button
                type='delete'
                value='Delete'
                onClick={() => {
                  deleteTeam(team.name);
                  teamsQuery.refetch();
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
