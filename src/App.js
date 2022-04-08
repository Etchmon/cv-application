import React, { Component } from "react";
import Form from './components/Form';
import Display from "./components/Display";

class App extends Component {
  constructor() {
    super()
    this.onSubmitPersonal.bind(this);
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

  render() {
    const { personal } = this.state;
    return (

      <div>
        <Form onSubmitPersonal={this.onSubmitPersonal} />
        <Display person={personal} />
      </div>
    )
  }
}

export default App;
