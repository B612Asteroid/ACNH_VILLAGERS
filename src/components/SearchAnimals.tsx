import React from 'react';
import Animals from './Animals';

class SearchAnimals extends React.Component {

    kind = React.createRef<HTMLSelectElement>();
    no = React.createRef<HTMLSelectElement>();
    name = React.createRef<HTMLInputElement>();
  
    state = {
        kind : "",
        no : "",
        name : ""
    };
    
    setAnimalProps(e : React.MouseEvent<HTMLButtonElement>) {
        this.setState((prevState, prop) => ({
            kind : this.kind.current!.value,
            no : this.no.current!.value,
            name : this.name.current!.value
        }));
    }

    render () {
      return (
        <div>
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
        </div>
      );
    }
  }
  
  export default SearchAnimals;