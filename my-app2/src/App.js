import logo from './logo.svg';
import { useEffect } from 'react';
import { listenerCreator, broadcaster } from './lib/messaging'
import './App.css';

function App() {
  useEffect(() => {
    console.log(window)
    listenerCreator(window, (...ev) => console.log(`framelog`, ...ev))
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App2 -- 3001
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
