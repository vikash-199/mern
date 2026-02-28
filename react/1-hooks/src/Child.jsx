import React from 'react';

const Child = React.memo(({ onClick }) => {
  console.log('Child rendered.');
  return <button onClick={onClick}>Click me</button>;
});

export default Child;
