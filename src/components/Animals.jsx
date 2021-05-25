import axios from "axios";
import React from "react";
import AnimalNode from "./AnimalNode"


class Animals extends React.Component {

  kind = React.createRef();
  no = React.createRef();
  name = React.createRef();

  state = {
    animals : [],
    animalDatas : [],
    animalCounts : 0,
    animalKinds : []
  };

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

  setAnimalProps = () => {
    this.setState((prevState) => {
      let prevAnimals = prevState.animalDatas;
      if (this.no.current && this.no.current.value !== '') {
        let noValues = this.no.current.value.split("-");
        prevAnimals = prevAnimals.slice(noValues[0], noValues[1]);
      }

      if(this.kind.current && this.kind.current.value !== '') {
        prevAnimals = prevAnimals.filter(
          (animal) => animal.species.indexOf(this.kind.current.value) !== -1
        );
      }

      if (this.name.current && this.name.current.value !== '') {
        prevAnimals = prevAnimals.filter(
          (animal) => animal.name['name-KRko'].indexOf(this.name.current.value) !== -1
        );
      }
      return {
        animals : prevAnimals
      }
    });    
  };

  setAnimalCountsToSelectOptions = () => {
    const { animalCounts } = this.state;
    const count = 20;
    let options = [];
    for (let i = 0; i <= animalCounts; i+= count) {
      let start = i + 1;
      let end = start + (count - 1);
      if (end > animalCounts) end = animalCounts;
      options.push(<option key={i} value={`${i}-${end}`}>{`${start} ~ ${end}`}</option>)
    }
    return options;
  };

  render() {
    const { animals, animalKinds } = this.state;
    return (
      <div>
        <label >No. </label>
        <select ref={ this.no }>
          <option value=''></option>
          {
           this.setAnimalCountsToSelectOptions()
          }
        </select>
        &nbsp;
        <label >Kind. </label>
        <select ref={ this.kind }>
          <option value=""></option>
          {
            animalKinds.map((kind, idx) => {
              return <option key={ idx } value={ kind }>{ kind }</option>
            })
          }
        </select>
        &nbsp;
        <label >Name. </label>
        <input type="text" ref= { this.name }/>
        <button onClick={this.setAnimalProps}>Search Villagers</button>
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
