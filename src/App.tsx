import React from 'react';
import './App.css';
import Animals from './components/Animals';


class App extends React.Component {

  kind = React.createRef<HTMLSelectElement>();
  no = React.createRef<HTMLSelectElement>();
  name = React.createRef<HTMLInputElement>();

  state = {
    kind : "",
    no : "",
    name : ""
  };

  setAnimalProps(e : React.MouseEvent<HTMLButtonElement>) {
    this.setState(() => (
      {
        kind : this.kind.current!.value,
        no : this.no.current!.value,
        name : this.name.current!.value
      }
    ));
    console.log(e);
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
          <button onClick={this.setAnimalProps.bind(this)}>Search Villagers</button>
          <br/>
          <Animals kind={this.state.kind} no={this.state.no} name={this.state.name}/>
        </nav>
      </div>
    );
  }
}

export default App;
