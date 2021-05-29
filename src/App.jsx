import React from 'react';
import './css/App.css';
import Animals from './components/Animals';
import Animal from './components/Animal';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="appHeader">Animal Crossing App</div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Animals} />
            <Route path="/Animals" component={Animals}/>
            <Route path="/Animal/:id" component={Animal}/>
            <Route Component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </nav>
    </div>
  );
  
}

export default App;
