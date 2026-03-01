import UserContext from './context/UserContext';
import Parent from './context/Parent';
import ApiCall from './2-hooks/ApiCall';
import FocusOnInput from './2-hooks/FocusOnInput';
import UseMemoFilteringLargeList from './2-hooks/UseMemoFilteringLargeList';

const users = [
  { name: 'Vikash', age: 29 },
  { name: 'Anup', age: 28 },
];

function App() {
  return (
    <UserContext.Provider value={users}>
      <UseMemoFilteringLargeList />
    </UserContext.Provider>
  );
}

export default App;
