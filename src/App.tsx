import React from 'react';
import logo from './logo.svg';
import './App.css';
import Animals from './components/Animals';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header> */}
      <nav>
        <h1>Anial Crossing App</h1>
        <Animals/>
      </nav>
    </div>
  );
}

export default App;
