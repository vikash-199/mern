import { useState, useMemo } from 'react';

function UseMemoFilteringLargeList() {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);

  const users = ['Vikash', 'Rahul', 'Amit', 'Priya', 'Ankit'];

  const filteredUsers = useMemo(() => {
    console.log('Filtering...');
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>

      {filteredUsers.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
    </div>
  );
}

export default UseMemoFilteringLargeList;
