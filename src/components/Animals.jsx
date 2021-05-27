import axios from "axios";
import React from "react";
import AnimalNode from "./AnimalNode";
import AnimalCount from "./AnimalCounts";
import AnimalKind from "./AnimalKind";


class Animals extends React.Component {

  state = {
    animals : [],
    animalDatas : [],
    animalCounts : 0,
    animalKinds : []
  };

  search = {};

  mapAnimals (response) {
    let animals = Object.values(response.data);
    let kinds = new Set(animals.map((animal) => animal.species));
    this.setState({
      animals : animals,
      animalDatas : animals,
      animalCounts : animals.length,
      animalKinds : [...kinds]
    });
  }

  componentDidMount() {
    this.getApi();
  }

  getApi = async () => {
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
  };

  componentWillUnmount () {
    this.setState({
      animals : []
    });
  };

  setAnimalProps = (e) => {
    this.search[e.target.name] = e.target.value;
    let {no, name, kind} = this.search;
    this.setState((prevState) => {
      let prevAnimals = prevState.animalDatas;
      if (no && no !== '') {
        let noValues = no.split("-");
        prevAnimals = prevAnimals.slice(noValues[0], noValues[1]);
      }

      if(kind && kind !== '') {
        prevAnimals = prevAnimals.filter(
          (animal) => animal.species.indexOf(kind) !== -1
        );
      }

      if (name && name !== '') {
        prevAnimals = prevAnimals.filter(
          (animal) => (animal.name['name-KRko']).indexOf(name) !== -1
        );
      }
      return {
        animals : prevAnimals
      }
    });    
  };

  render() {
    const { animals, animalKinds, animalCounts } = this.state;
    return (
      <div>
        <AnimalCount 
          onSelectChange={ this.setAnimalProps } 
          animalCounts={ animalCounts }
        />
        &nbsp;
        <AnimalKind 
          onSelectChange={ this.setAnimalProps }
          animalKinds={ animalKinds }
        />
        &nbsp;
        <label >Name. </label>
        <input type="text" name="name" onChange={ this.setAnimalProps }/>
        <br/>
        <br/> 
        {
          animals.map((animal) => {
            return (
              <section key={ animal.id }>
                <AnimalNode 
                  id={animal.id} 
                  bubbleColor={animal["bubble-color"]}
                  imageUri={animal["image_uri"]}
                  textColor={animal["text-color"]}
                  nameKr={animal["name"]["name-KRko"]}
                />
              </section>
            )
          })
        }
      </div>
    );
  }

}
  

export default Animals;
