import React from "react";


class AnimalCount extends React.Component {

    setAnimalCountsToSelectOptions = () => {
        const { animalCounts } = this.props;
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


    render () {
        const { onSelectChange } = this.props 
        return (
            <div>
                <label >No. </label>
                <select name="no" onChange={ onSelectChange }>
                    <option value=''></option>
                    {
                        this.setAnimalCountsToSelectOptions()
                    }
                </select>
            </div>
        )
    };
}

export default AnimalCount;