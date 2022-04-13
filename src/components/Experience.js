import React, { Component } from "react";

class Experience extends Component {
    constructor() {
        super();
        this.onSubmit.bind(this);
        this.formValidate.bind(this);
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
        e.target.reset();
        this.cssValidate();
        if (this.formValidate()) return;
        this.props.onSubmitExperience(this.state);
        document.querySelector('#expForm').style.display = 'none';
        document.querySelector('#resume-experience').style.display = 'grid';
    };

    cssValidate = () => {
        const arr = Array.from(document.querySelectorAll('.input'));
        arr.forEach(element => {
            if (element.value === '') {
                element.style.borderColor = '#d90429'
            } else {
                element.style.borderColor = ''
            }
        });
    };

    formValidate = (e) => {
        const { company, position, description, from, till } = this.state.experience;
        if (company === '' || position === '' || description === '' || from === '' || till === '') {
            return true;
        }
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
            <form onSubmit={this.onSubmit} id="expForm">
                <legend>Work Experience</legend>
                <label htmlFor="companyInput">Company</label>
                <input onChange={this.handleCompanyChange} type="text" id="companyInput" className="input" value={experience.company} />
                <label htmlFor="positionInput">Position</label>
                <input onChange={this.handlePositionChange} type="text" id="positionInput" className="input" value={experience.position} />
                <label htmlFor="descriptionInput">Description</label>
                <textarea onChange={this.handleDescriptionChange} type="text" rows="4" id="descriptionInput" className="input" value={experience.description} />
                <label htmlFor="fromInput">Date Started</label>
                <input onChange={this.handleFromChange} type="month" id="fromInput" className="input" value={experience.from} />
                <label htmlFor="tillInput">Date Ended or Current</label>
                <input onChange={this.handleTillChange} type="text" id="tillInput" className="input" value={experience.till} />
                <button type="Submit">
                    Add
                </button>
            </form>
        )
    }
};

export default Experience;