import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function Home() {
  const { login, isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  return (
    <div>
      <h1>Home page</h1>
      {isAuthenticated ? (
        <>
          <button onClick={() => navigate('/users')}>Users data</button>
          <button onClick={() => navigate('/dashboard')}>
            go to dashboard
          </button>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default Home;
