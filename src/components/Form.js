import React, { Component } from "react";
import Personal from "./Personal";
import Education from "./Education";

class Form extends Component {
    constructor(props) {
        super(props);
        this.onSubmitPersonal.bind(this);
    };

    onSubmitPersonal = (person) => {
        this.props.onSubmitPersonal(person);
    };

    onSubmitEducation = (edu) => {
        this.props.onSubmitEducation(edu);
    };


    render() {
        // const { personal, education, experience } = this.state;

        return (
            <div>
                <Personal onSubmitPersonal={this.onSubmitPersonal} />
                <Education onSubmitEducation={this.onSubmitEducation} />
            </div>
        )
    }
};

export default Form;