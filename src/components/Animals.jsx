import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

class Animals extends React.Component {

  kind = React.createRef();
  no = React.createRef();
  name = React.createRef();

  state = {
    animals : []
  };

  mapAnimals (response) {
    let animals = Object.values(response.data);
    this.setState({
      animals : animals
    });
    
  }

  async componentDidMount() {
    const url = `http://acnhapi.com/v1/villagers/`;
    const option = {
      url : url,
      method : 'get',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json;charset=UTF-8'
      }
    };

    try {
      let api = axios(option);
      await api.then(this.mapAnimals.bind(this));
    } catch (e) {
      console.error(e);
    }
  }

  setAnimalProps = (e) => {
    if (this.kind.current) {
      console.log(this.kind.current.value);
    }
    //this.no.current!.value;
    //this.name.current!.value;
    this.setState((prevState) => {
      
    });    
  }
  
  render() {
    const { animals } = this.state;
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
        <button onClick={this.setAnimalProps}>Search Villagers</button>
        <br/> 
        {
          animals.map((animal) => {
            return <section key={ animal.id }>
              {/* <Link to="/"> */}
                <div style={{ background : animal["bubble-color"] }}>
                  <img alt={ animal.image_uri } src={ animal["image_uri"] }/>
                  <p style={{ color : animal["text-color"] }}>
                    No. { animal['id'] } { animal['name']['name-KRko'] }
                  </p>
                </div> 
              {/* </Link> */}
            </section>
          })
        }

      </div>
    );
  }

}
  

export default Animals;
