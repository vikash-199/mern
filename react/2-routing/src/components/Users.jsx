import useFetch from '../useFetch';

function Users() {
  const { data, error, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  );

  if (loading) return <p>Loading</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>User data</h1>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
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

export default Users;
