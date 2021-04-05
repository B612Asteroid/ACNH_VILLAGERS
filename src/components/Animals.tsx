import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import React from "react";



interface AnimalDTO {
  
}

class Animals extends React.Component<AnimalDTO> {
  state = {
    animals : []
  };

  mapAnimals (response : AxiosResponse) {
    let animals = Object.values(response.data);
    this.setState({
      animals : animals
    });
    console.log(this.state.animals);
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
      <div></div>
    );
  }

}
  

export default Animals;
