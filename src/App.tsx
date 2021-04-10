import React from 'react';
import './App.css';
import Animals from './components/Animals';
import SearchAnimals from './components/SearchAnimals';


class App extends React.Component {

  render () {
    return (
      <div className="App">
        <nav>
          <h1>Anial Crossing App</h1>
          <SearchAnimals/>
        </nav>
      </div>
    );
  }
}

export default App;
