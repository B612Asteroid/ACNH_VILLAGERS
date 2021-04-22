import React from 'react'

class Animal extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.id);
    }

    state = {
        animal : {}
    }

    render () {
        return (
            <div>this is Animal Detail Page</div>
        );
    }
}

export default Animal;