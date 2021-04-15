import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

class Animals extends React.Component {

  kind = React.createRef();
  no = React.createRef();
  name = React.createRef();

  state = {
    animals : [],
    animalCounts : 0,
    animalKinds : []
  };

  mapAnimals (response) {
    let animals = Object.values(response.data);
    let kinds = new Set(animals.map((animal) => animal.species));
    this.setState({
      animals : animals,
      animalCounts : animals.length,
      animalKinds : [...kinds]
    });
    console.log(this.state.animals);
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

  componentWillUnmount () {
    this.setState({
      animals : []
    });
  };

  setAnimalProps = () => {
    this.setState((prevState) => {
      let prevAnimals = prevState.animals;
      if (this.name.current.value !== '') {
        prevAnimals = prevState.animals.filter(
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
      options.push(<option value={`${i}-${end - 1}`}>{`${start} ~ ${end}`}</option>)
    }
    return options;
  }

  render() {
    const { animals, animalKinds } = this.state;
    return (
      <div>
        <label >No. </label>
        <select ref={ this.no }>
          {
           this.setAnimalCountsToSelectOptions()
          }
        </select>
        <label >Kind </label>
        <select ref={ this.kind }>
          {
            animalKinds.map(kind => {
              return <option value={ kind }>{ kind }</option>
            })
          }
        </select>
        <label >Name. </label>
        <input type="text" ref= { this.name }/>
        <button onClick={this.setAnimalProps}>Search Villagers</button>
        <br/>
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
