import React, { Component } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from './Experience';

class Form extends Component {
    constructor(props) {
        super(props);
        this.onSubmitPersonal.bind(this);

        this.state = {
            person: this.props.state,
        }
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

        return (
            <div className="form-container">
                <Personal onSubmitPersonal={this.onSubmitPersonal} data={this.state} />
                <Education onSubmitEducation={this.onSubmitEducation} />
                <Experience onSubmitExperience={this.onSubmitExperience} />
            </div>
        )
    }
};

export default Form;