import React from 'react';
import logo from './logo.svg';
import './App.css';
import Animals from './components/Animals';


function App() {
  Animals();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <nav>
        <p>Anial Crossing App</p>
      </nav>
    </div>
  );
}

export default App;
