import React, { Component } from "react";

class Display extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { person } = this.props;
        return (
            <div>
                <h1>{person.name}</h1>
                <h1>{person.email}</h1>
                <h1>{person.phone}</h1>
            </div>
        )
    }
};

export default Display;