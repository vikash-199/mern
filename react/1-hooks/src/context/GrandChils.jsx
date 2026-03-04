import { useContext } from 'react';
import UserContext from './UserContext';
function GrandChils() {
  const data = useContext(UserContext);
  return (
    <div>
      {data.map((u) => (
        <p key={u.age}>
          {u.name} - {u.age}
        </p>
      ))}
    </div>
  );
}

export default GrandChils;
