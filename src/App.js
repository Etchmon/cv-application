import React, { Component } from "react";
import Header from "./components/Header";
import Form from './components/Form';
import Display from "./components/Display";
import "./styles/reset.css";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super()
    this.onSubmitPersonal.bind(this);
    this.onSubmitEducation.bind(this);
    this.state = {
      personal: {
        name: '',
        email: '',
        phone: '',
        location: '',
      },
      education: {
        school: '',
        study: '',
        date: '',
      },
      experience: {
        company: '',
        position: '',
        description: '',
        from: '',
        till: '',
      },
    }
  }

  onSubmitPersonal = (person) => {
    this.setState({
      personal: {
        name: person.personal.name,
        email: person.personal.email,
        phone: person.personal.phone,
        location: person.personal.location
      },
    });
  };

  onSubmitEducation = (edu) => {
    this.setState({
      education: {
        school: edu.education.school,
        study: edu.education.study,
        date: edu.education.date,
      },
    });
  };

  onSubmitExperience = (exp) => {
    this.setState({
      experience: {
        company: exp.experience.company,
        position: exp.experience.position,
        description: exp.experience.description,
        from: exp.experience.from,
        till: exp.experience.till,
      },
    });
  };

  render() {
    const { personal, education, experience } = this.state;
    return (

      <div className="main">
        <Header />
        <Form onSubmitPersonal={this.onSubmitPersonal} onSubmitEducation={this.onSubmitEducation} onSubmitExperience={this.onSubmitExperience} />
        <Display person={personal} education={education} experience={experience} />
      </div>
    )
  }
}

export default App;
