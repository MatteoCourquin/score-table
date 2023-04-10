import { useMutation, useQuery } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import { addName, deleteName, getNames, updateName } from './services/apiNames';
import { addTeam, deleteTeam, getTeams, updateTeam } from './services/apiTeams';

const App = () => {
  const teamsQuery = useQuery({
    queryKey: 'teams',
    queryFn: () => getTeams(),
  });
  const namesQuery = useQuery({
    queryKey: 'names',
    queryFn: () => getNames(),
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
  const addTeamMutation = useMutation({
    mutationFn: addTeam,
    onSuccess: () => teamsQuery.refetch(),
  });
  const addNameMutation = useMutation({
    mutationFn: addName,
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
              addMutation={addNameMutation}
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
              addMutation={addTeamMutation}
              query={teamsQuery}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
