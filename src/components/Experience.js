import React, { Component } from "react";

class Experience extends Component {
    constructor() {
        super();
        this.onSubmit.bind(this);
        this.state = {
            experience: {
                company: '',
                position: '',
                description: '',
                from: '',
                till: '',
            },
        };
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmitExperience(this.state);
    };

    handleCompanyChange = (e) => {
        this.setState({
            experience: {
                company: e.target.value,
                position: this.state.experience.position,
                description: this.state.experience.description,
                from: this.state.experience.from,
                till: this.state.experience.till,
            }
        });
    };

    handlePositionChange = (e) => {
        this.setState({
            experience: {
                company: this.state.experience.company,
                position: e.target.value,
                description: this.state.experience.description,
                from: this.state.experience.from,
                till: this.state.experience.till,
            }
        });
    };

    handleDescriptionChange = (e) => {
        this.setState({
            experience: {
                company: this.state.experience.company,
                position: this.state.experience.position,
                description: e.target.value,
                from: this.state.experience.from,
                till: this.state.experience.till,
            }
        });
    };

    handleFromChange = (e) => {
        this.setState({
            experience: {
                company: this.state.experience.company,
                position: this.state.experience.position,
                description: this.state.experience.description,
                from: e.target.value,
                till: this.state.experience.till,
            }
        });
    };

    handleTillChange = (e) => {
        this.setState({
            experience: {
                company: this.state.experience.company,
                position: this.state.experience.position,
                description: this.state.experience.description,
                from: this.state.experience.from,
                till: e.target.value,
            }
        });
    };


    render() {
        const { experience } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <legend>Work Experience</legend>
                <label htmlFor="companyInput">Company</label>
                <input onChange={this.handleCompanyChange} type="text" id="companyInput" value={experience.company} />
                <label htmlFor="positionInput">Position</label>
                <input onChange={this.handlePositionChange} type="text" id="positionInput" value={experience.position} />
                <label htmlFor="descriptionInput">Description</label>
                <input onChange={this.handleDescriptionChange} type="text" id="descriptionInput" value={experience.description} />
                <label htmlFor="fromInput">Date Started</label>
                <input onChange={this.handleFromChange} type="text" id="fromInput" value={experience.from} />
                <label htmlFor="tillInput">Date Ended or Current</label>
                <input onChange={this.handleTillChange} type="text" id="tillInput" value={experience.till} />
                <button type="Submit">
                    Add
                </button>
            </form>
        )
    }
};

export default Experience;