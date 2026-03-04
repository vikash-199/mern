import { useState } from 'react';

const users = ['vikash', 'anup', 'niranjan', 'sunil'];
function App() {
  const [search, setSearch] = useState('');

  const filteredData = users.filter((u) =>
    u.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredData.map((u) => (
        <p key={u}>{u}</p>
      ))}
    </div>
  );
}

export default App;
