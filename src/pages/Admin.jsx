import { useAuth0 } from '@auth0/auth0-react';
import clsx from 'clsx';
import { useState } from 'react';
import AdminTable from '../components/AdminTable';
import Button from '../components/Button';
import LoginButton from '../components/Login';
import LogoutButton from '../components/Logout';

const Admin = ({
  deleteNameMutation,
  updateNameMutation,
  addNameMutation,
  namesQuery,
  deleteTeamMutation,
  updateTeamMutation,
  addTeamMutation,
  teamsQuery,
}) => {
  const [adminType, setAdminType] = useState('NAME');
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <div className='p-4 min-h-screen'>
          <div className='flex justify-center gap-4'>
            <Button
              style={clsx(adminType === 'TEAM' && 'opacity-20')}
              type='click'
              value='Joueur'
              onClick={() => setAdminType('NAME')}
            />
            <Button
              style={clsx(adminType === 'NAME' && 'opacity-20')}
              type='click'
              value='Asso'
              onClick={() => setAdminType('TEAM')}
            />
          </div>
          <LogoutButton style='fixed right-4 top-4' />
          {adminType === 'NAME' ? (
            <AdminTable
              isAsso={false}
              deleteMutation={deleteNameMutation}
              updateMutation={updateNameMutation}
              addMutation={addNameMutation}
              query={namesQuery}
            />
          ) : (
            <AdminTable
              isAsso={true}
              deleteMutation={deleteTeamMutation}
              updateMutation={updateTeamMutation}
              addMutation={addTeamMutation}
              query={teamsQuery}
            />
          )}
        </div>
      ) : (
        <div className='flex justify-center flex-col items-center h-[80vh]'>
          <p className='px-4 mb-4 text-center'>
            Merci de vous connecter pour accédez à la session admin
          </p>
          <LoginButton />
        </div>
      )}
    </>
  );
};

export default Admin;
