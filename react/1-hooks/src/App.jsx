import UserContext from './context/UserContext';
import ApiCall from './custom-hooks/ApiCall';

import UserForm from './form/UserForm';

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
