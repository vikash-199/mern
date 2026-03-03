import UserContext from './context/UserContext';

import UserForm from './form/UserForm';

const users = [
  { name: 'Vikash', age: 29 },
  { name: 'Anup', age: 28 },
];

function App() {
  return (
    <UserContext.Provider value={users}>
      <UserForm />
    </UserContext.Provider>
  );
}

export default App;
