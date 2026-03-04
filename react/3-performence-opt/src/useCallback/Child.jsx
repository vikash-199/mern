import React from 'react';

const Child = React.memo(function Child({ onClick }) {
  console.log('Child rendered.');
  return (
    <div>
      <button onClick={onClick}>click me </button>
    </div>
  );
});
export default Child;
