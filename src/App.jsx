import React from 'react';
import './App.css';
import Animals from './components/Animals';
import Animal from './components/Animal';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <nav>
          <h1>Animal Crossing App</h1>
          <BrowserRouter>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Animals">Animals</Link></li>
                <li><Link to="/Animal">Animal</Link></li>
            </ul>
            <Switch>
              <Route path="/Animals" Component={Animals}/>
              <Route path="/Animal/:id" component={Animal}/>
              <Route exact path="/" Component={Animals} />
            </Switch>
          </BrowserRouter>
        </nav>
      </div>
    );
  }
}

export default App;
