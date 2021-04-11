import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import React from "react";
import { Link } from "react-router-dom";

class Animals extends React.Component {

  kind = React.createRef<HTMLSelectElement>();
  no = React.createRef<HTMLSelectElement>();
  name = React.createRef<HTMLInputElement>();

  state = {
    animals : []
  };

  mapAnimals (response : AxiosResponse) {
    let animals = Object.values(response.data);
    this.setState({
      animals : animals
    });
    
  }

  async componentDidMount() {
    const url = `http://acnhapi.com/v1/villagers/`;
    const option : AxiosRequestConfig = {
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

  setAnimalProps = (e : React.MouseEvent<HTMLButtonElement>) => {
    this.kind.current!.value;
    this.no.current!.value;
    this.name.current!.value;    
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
            return <section key={ animal['id'] }>
              {/* <Link to="/"> */}
                <div style={{ background : animal["bubble-color"] }}>
                  <img alt={ animal['id'] } src={ animal["image_uri"] }/>
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
