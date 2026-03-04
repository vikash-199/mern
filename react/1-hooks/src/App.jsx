import { useReducer, useState } from 'react';
let initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'INC':
      return { count: state.count + 1 };
    case 'DEC':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'ADD':
      return { count: state.count + action.payload };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [add, setAdd] = useState('');
  return (
    <div>
      <h2>Counter:{state.count}</h2>
      <input
        type="text"
        name="add"
        value={add}
        onChange={(e) => setAdd(e.target.value)}
      />
      <button onClick={() => dispatch({ type: 'ADD', payload: Number(add) })}>
        add
      </button>
      <button onClick={() => dispatch({ type: 'INC' })}>+ inc</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>- dec</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
    </div>
  );
}

export default App;

// import { useReducer, useState } from 'react';

// const initialState = {
//   count: 0,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'INC':
//       return { count: state.count + 1 };

//     case 'DEC':
//       return { count: state.count - 1 };
//     case 'RESET':
//       return { count: 0 };

//     case 'ADD':
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [input, setInput] = useState('');
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: 'INC' })}>+ Inc</button>
//       <button onClick={() => dispatch({ type: 'DEC' })}>- dec</button>
//       <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
//       <input
//         type="number"
//         placeholder="Enter number"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={() => dispatch({ type: 'ADD', payload: Number(input) })}>
//         Add Value
//       </button>
//     </div>
//   );
// }

// export default App;
