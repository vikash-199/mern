import useFetch from './useFetch';

function ApiCall() {
  const { data, error, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) <p>{error}</p>;

  return (
    <div>
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

export default ApiCall;
