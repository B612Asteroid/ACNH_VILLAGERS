import React from "react";


class AnimalKind extends React.Component {

    render () {
        const { animalKinds, onSelectChange } = this.props;
        return (
            <div>
                <label >Kind. </label>
                <select onChange={ onSelectChange } name="kind">
                    <option value=""></option>
                    {
                        animalKinds.map((kind, idx) => {
                        return <option key={ idx } value={ kind }>{ kind }</option>
                        })
                    }
                </select>
            </div>
        )
    };
}

export default AnimalKind;