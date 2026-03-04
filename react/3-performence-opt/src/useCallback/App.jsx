import { useCallback, useState } from 'react';
import Child from './useCallback/Child';
function App() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log('child clicked.');
  }, []);
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
