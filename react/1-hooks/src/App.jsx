import UserContext from './context/UserContext';
import Parent from './context/Parent';
import ApiCall from './custom-hooks/ApiCall';
import FocusOnInput from './2-hooks/FocusOnInput';
import UseMemoFilteringLargeList from './2-hooks/UseMemoFilteringLargeList';
import Cpunter from './custom-hooks/Cpunter';

const users = [
  { name: 'Vikash', age: 29 },
  { name: 'Anup', age: 28 },
];

function App() {
  return (
    <UserContext.Provider value={users}>
      <ApiCall />
    </UserContext.Provider>
  );
}

export default App;
