import React, { Component } from "react";
import Form from './components/Form';
import Display from "./components/Display";

class App extends Component {
  constructor() {
    super()
    this.update.bind(this);
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

  update = (person) => {
    this.setState(person, () => {
      console.log(this.state);
    });

  }

  render() {
    const { personal } = this.state;
    return (

      <div>
        <Form update={this.update} />
        <Display person={personal} />
      </div>
    )
  }
}

export default App;
