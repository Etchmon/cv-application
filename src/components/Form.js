import React, { Component } from "react";
import Personal from "./Personal";

class Form extends Component {
    constructor(props) {
        super(props);
        this.onSubmit.bind(this);
    };

    onSubmit = (person) => {
        this.props.onSubmitPersonal(person);
    };


    render() {
        // const { personal, education, experience } = this.state;

        return (
            <div>
                <Personal onSubmitPersonal={this.onSubmit} />
            </div>
        )
    }
};

export default Form;