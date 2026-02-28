import { useCallback, useState } from 'react';
import Child from './Child';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count - {count}</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;
