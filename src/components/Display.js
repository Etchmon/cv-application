import React, { Component } from "react";

class Display extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { person, education, experience } = this.props;
        return (
            <div>
                <section id="resume-personal">
                    <h1 id="resume-personal-name">{person.name}</h1>
                    <h2 id="resume-personal-email">{person.email}</h2>
                    <h2 id="resume-personal-phone">{person.phone}</h2>
                </section>
                <section id="resume-education">
                    <h1>Education</h1>
                    <h2 id="resume-education-school">{education.school}</h2>
                    <h2 id="resume-education-study">{education.study}</h2>
                    <h2 id="resume-education-date">{education.date}</h2>
                </section>
                <section id="resume-experience">
                    <h1>Experience</h1>
                    <h2 id="resume-experience-company">{experience.company}</h2>
                    <h2 id="resume-experience-position">{experience.position}</h2>
                    <h2 id="resume-experience-description">{experience.description}</h2>
                    <h2 id="resume-experience-from">{experience.from}</h2>
                    <h2 id="resume-experience-till">{experience.till}</h2>
                </section>

            </div>
        )
    }
};

export default Display;