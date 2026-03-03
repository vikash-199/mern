import { useState } from 'react';

function useCounter(initilValue = 0) {
  const [count, setCount] = useState(initilValue);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  const reset = () => setCount(initilValue);

  return { inc, dec, reset, count };
}

export default useCounter;
