import { useEffect, useState } from 'react';

function ApiCall() {
  const [uesrs, setUsers] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await res.json();
      setUsers(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <table border="1" cellPadding="7" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {uesrs?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiCall;
