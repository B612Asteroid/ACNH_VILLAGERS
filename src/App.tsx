import React from 'react';
import './App.css';
import Animals from './components/Animals';


class App extends React.Component {

  render () {
    return (
      <div className="App">
        <nav>
          <h1>Anial Crossing App</h1>
          <Animals/>
        </nav>
      </div>
    );
  }
}

export default App;
