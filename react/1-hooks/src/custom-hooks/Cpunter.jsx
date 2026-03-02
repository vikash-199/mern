import useCounter from './useCounter';
function Cpunter() {
  const { count, inc, dec, reset } = useCounter(10);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Cpunter;
