import { useMemo, useState } from 'react';

const users = ['vikash', 'anup', 'sunil', 'rahul'];

function Memo() {
  const [search, setSearch] = useState('');
  const filteredUsers = useMemo(() => {
    return users.filter((u) => u.toLowerCase().includes(search.toLowerCase()));
  }, [search]);
  return (
    <div>
      <input
        type="text"
        placeholder="search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredUsers.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
    </div>
  );
}

export default Memo;
