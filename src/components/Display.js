import React, { Component } from "react";

class Display extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        const { person } = this.props;
        console.log(person);
        return (
            <div>
                <h1>{person.name}</h1>
                <h1></h1>
                <h1></h1>
            </div>
        )
    }
};

export default Display;