import { useMutation, useQuery } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import {
  createName,
  createTeam,
  deleteName,
  deleteTeam,
  getAllNames,
  getAllTeams,
  updateName,
  updateTeam,
} from './services/api';

const App = () => {
  const teamsQuery = useQuery({
    queryKey: 'teams',
    queryFn: () => getAllTeams(),
    refetchInterval: 60000 * 30,
  });
  const namesQuery = useQuery({
    queryKey: 'names',
    queryFn: () => getAllNames(),
    refetchInterval: 60000 * 30,
  });
  const updateTeamMutation = useMutation({
    mutationFn: updateTeam,
    onSuccess: () => teamsQuery.refetch(),
  });
  const updateNameMutation = useMutation({
    mutationFn: updateName,
    onSuccess: () => namesQuery.refetch(),
  });
  const deleteTeamMutation = useMutation({
    mutationFn: deleteTeam,
    onSuccess: () => teamsQuery.refetch(),
  });
  const deleteNameMutation = useMutation({
    mutationFn: deleteName,
    onSuccess: () => namesQuery.refetch(),
  });
  const createTeamMutation = useMutation({
    mutationFn: createTeam,
    onSuccess: () => teamsQuery.refetch(),
  });
  const createNameMutation = useMutation({
    mutationFn: createName,
    onSuccess: () => namesQuery.refetch(),
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Dashboard namesQuery={namesQuery} teamsQuery={teamsQuery} />
          }
        />
        <Route
          path='/admin-name'
          element={
            <Admin
              isAsso={false}
              deleteMutation={deleteNameMutation}
              updateMutation={updateNameMutation}
              addMutation={createNameMutation}
              query={namesQuery}
            />
          }
        />
        <Route
          path='/admin-asso'
          element={
            <Admin
              isAsso={true}
              deleteMutation={deleteTeamMutation}
              updateMutation={updateTeamMutation}
              addMutation={createTeamMutation}
              query={teamsQuery}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
