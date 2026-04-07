import { useState } from 'react';
import InputBox from './1-lifting-up-state/InputBox';
import DisplyBox from './1-lifting-up-state/DisplyBox';

function App() {
  const [text, setText] = useState('');
  return (
    <div>
      <InputBox text={text} setText={setText} />
      <DisplyBox text={text} />
    </div>
  );
}

export default App;
