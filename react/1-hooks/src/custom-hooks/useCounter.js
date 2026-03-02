import { useState } from 'react';
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { inc, dec, reset, count };
}

export default useCounter;
