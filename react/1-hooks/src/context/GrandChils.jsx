import { useContext } from 'react';
import UserContext from './UserContext';

function GrandChils() {
  const users = useContext(UserContext);
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <p key={user.name}>
          {user.name} - {user.age}
        </p>
      ))}
    </div>
  );
}

export default GrandChils;
