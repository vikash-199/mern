import React from 'react';

const Child = React.memo(function Child({ name }) {
  console.log('Children renderes.');
  return (
    <div>
      <p>{name}</p>
    </div>
  );
});

export default Child;
