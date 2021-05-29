import React from 'react';
import axios from 'axios';

class Animal extends React.Component {

    componentDidMount() {
        this.getApi();
    }

    state = {
        animal : {} 
    }

    getApi = async () => {
        const url = `http://acnhapi.com/v1/villagers/${this.props.match.params.id}`;
        const option = {
            url : url,
            method : 'get',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json;charset=UTF-8'
            }    
        }

        try {
            let api = axios(option);
            await api.then(this.setAnimalState);
          } catch (e) {
            console.error(e);
        }
    };

    setAnimalState = (response) => {
        this.setState({
            animal : response.data
        });
    }

    renderAnimalDom = (animal) => {
        return(
            <div style={{ background : animal["bubble-color"] }}>
                <p style={{ color : animal["text-color"] }}>
                    No. { animal['id'] } { animal['name']['name-KRko'] }
                </p>
                <img alt={animal["image_uri"]} src={ animal["image_uri"] }/>
                <br/>
                <div style={{ color : animal["text-color"] }}>
                    <p>personality : { animal["personality"] }</p>
                    <p>birthday : { animal["birthday"] }</p>
                    <p>species : { animal["species"] }</p>
                    <p>gender : { animal["gender"] }</p>
                    <p>subtype : { animal["subtype"] }</p>
                    <p>hobby : { animal["hobby"] }</p>
                    <p>catch-phrase : { animal["catch-translations"]["catch-KRko"] }</p>
                </div>
            </div>
        )
    }

    render () {
        const { animal } = this.state;
        
        return (
            <section>
                {
                    animal.id !== undefined
                    ? this.renderAnimalDom(animal)
                    : <h1>Loading...</h1>
                }
                
            </section>
        );
    }
}

export default Animal;