import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <ChangeState></ChangeState>
    </div>
  );
}

function ChangeState() {
  const [count, setCount] = useState(55)
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default App;
