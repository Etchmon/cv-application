import React, { Component } from "react";
import Form from './components/Form';
import Display from "./components/Display";

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

  render() {
    const { personal, education } = this.state;
    return (

      <div>
        <Form onSubmitPersonal={this.onSubmitPersonal} onSubmitEducation={this.onSubmitEducation} />
        <Display person={personal} education={education} />
      </div>
    )
  }
}

export default App;
