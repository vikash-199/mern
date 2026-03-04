import { useState } from 'react';
import Child from './react-memo/Child';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Child name="Vikash" />
    </div>
  );
}

export default App;
