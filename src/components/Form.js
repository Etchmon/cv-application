import React, { Component } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from './Experience';

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

    onSubmitExperience = (exp) => {
        this.props.onSubmitExperience(exp);
    };


    render() {
        // const { personal, education, experience } = this.state;

        return (
            <div>
                <Personal onSubmitPersonal={this.onSubmitPersonal} />
                <Education onSubmitEducation={this.onSubmitEducation} />
                <Experience onSubmitExperience={this.onSubmitExperience} />
            </div>
        )
    }
};

export default Form;