import withAuth from './hoc/WithAuth';
import Dashboard from './hoc/Dashboard';

const ProtectedDashboard = withAuth(Dashboard);
function App() {
  return (
    <div>
      <ProtectedDashboard name="Vikash" role="frontent developer" />
    </div>
  );
}

export default App;
