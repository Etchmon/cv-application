import React, { Component } from "react";

class Education extends Component {
    constructor() {
        super();
        this.onSubmit.bind(this);
        this.formValidate.bind(this);
        this.state = {
            education: {
                school: '',
                study: '',
                date: '',
            },
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        this.cssValidate();
        if (this.formValidate()) return;
        this.props.onSubmitEducation(this.state);
        document.querySelector('#eduForm').style.display = 'none';
        document.querySelector('#resume-education').style.display = 'grid';
    };

    cssValidate = () => {
        const arr = Array.from(document.querySelectorAll('#eduForm input'));
        arr.forEach(element => {
            if (element.value === '') {
                element.style.borderColor = '#d90429'
            } else {
                element.style.borderColor = ''
            }
        });
    };

    formValidate = (e) => {
        const { school, study, date } = this.state.education;
        if (school === '' || study === '' || date === '') {
            return true;
        }
    };

    handleSchoolChange = (e) => {
        this.setState({
            education: {
                school: e.target.value,
                study: this.state.education.study,
                date: this.state.education.date,
            }
        });
    };

    handleStudyChange = (e) => {
        this.setState({
            education: {
                school: this.state.education.school,
                study: e.target.value,
                date: this.state.education.date,
            }
        });
    };

    handleDateChange = (e) => {
        this.setState({
            education: {
                school: this.state.education.school,
                study: this.state.education.study,
                date: e.target.value,
            }
        });
    };

    render() {
        const education = this.state;
        return (
            <form onSubmit={this.onSubmit} id="eduForm">
                <legend>Education</legend>
                <label htmlFor="schoolInput">School</label>
                <input onChange={this.handleSchoolChange} type="text" id="schoolInput" value={education.school} />
                <label htmlFor="schoolInput">Subject of Study</label>
                <input onChange={this.handleStudyChange} type="text" id="studyInput" value={education.study} />
                <label htmlFor="schoolInput">Date of Completion</label>
                <input onChange={this.handleDateChange} type="month" id="dateInput" value={education.date} />
                <button type="Submit">
                    Add
                </button>
            </form>
        )
    };
};

export default Education;