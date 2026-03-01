// //useRef
// import { useRef } from 'react';

import { useRef } from 'react';

// function FocusOnInput() {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleClick}>focus on input</button>
//     </div>
//   );
// }

// export default FocusOnInput;

function FocusOnInput() {
  const inputTag = useRef(null);

  const handleClick = () => {
    inputTag.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputTag} />
      <button onClick={handleClick}>Focus on input</button>
    </div>
  );
}

export default FocusOnInput;
