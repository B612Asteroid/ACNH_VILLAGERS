import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import React from "react";
import { Link } from "react-router-dom";


class Animals extends React.Component {

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
    const url = 'http://acnhapi.com/v1/villagers/';
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
  
  render() {
    const { animals } = this.state;
    return (
      <div>
        {
          animals.map((animal) => {
            return <section key={ animal['id'] }>
              <Link to="/">
                <div style={{ background : animal["bubble-color"] }}>
                  <img alt={ animal['id'] } src={ animal["image_uri"] }/>
                  <p style={{ color : animal["text-color"] }}>
                    No. { animal['id'] } { animal['name']['name-KRko'] }
                  </p>
                </div> 
              </Link>
            </section>
          })
        }

      </div>
    );
  }

}
  

export default Animals;
