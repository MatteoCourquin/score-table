import { useQuery } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import { getTeams } from './services/queries';

const App = () => {
  const teamsQuery = useQuery({
    queryKey: 'Teams',
    queryFn: () => getTeams()
  });
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        {teamsQuery.isLoading && <div className='text-center'>Loading...</div>}
        {teamsQuery.isFetched && <Dashboard teams={teamsQuery.data.getAllTeams} />}
      </>,
    },
    { path: '/admin', element: <>
      {teamsQuery.isFetched && <Admin teamsQuery={teamsQuery} />}
    </> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
