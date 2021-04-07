import React from 'react';
import './App.css';
import Animals from './components/Animals';


class App extends React.Component {

  private kind = React.createRef<HTMLSelectElement>();
  private no = React.createRef<HTMLSelectElement>();
  private name = React.createRef<HTMLInputElement>();

  state = {
    kind : "",
    no : "",
    name : ""
  };

  setAnimalProps(e : React.MouseEvent<HTMLButtonElement>) {
    console.log(this.kind.current?.value);
    console.log(this.no.current?.nodeValue);
    console.log(this.name.current?.value);
  }

  render () {
    return (
      <div className="App">
        <nav>
          <h1>Anial Crossing App</h1>
          <select ref={ this.kind } >
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <select ref={ this.no }>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <input type="text" ref= { this.name }/>
          <button onClick={this.setAnimalProps}>Search Villagers</button>
          <br/>
          <Animals kind={this.state.kind} no={this.state.no} name={this.state.name}/>
        </nav>
      </div>
    );
  }
}

export default App;
