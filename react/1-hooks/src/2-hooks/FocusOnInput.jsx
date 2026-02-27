import { useRef } from 'react';

function FocusOnInput() {
  const inputRef = useRef(null);

  const handleClick = () => {};

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>focus on input</button>
    </div>
  );
}

export default FocusOnInput;
