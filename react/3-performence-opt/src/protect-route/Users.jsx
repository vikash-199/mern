import useFetch from './useFetch';
function Users() {
  const { data, error, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  );

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading data...</p>;

  return (
    <div>
      <h1>Users page</h1>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Id</th>
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
