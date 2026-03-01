import UserContext from './context/UserContext';
import Parent from './context/Parent';

const users = [
  { name: 'Vikash', age: 29 },
  { name: 'Anup', age: 28 },
];

function App() {
  return (
    <UserContext.Provider value={users}>
      <Parent />
    </UserContext.Provider>
  );
}

export default App;
