import React, { Component } from "react";
import Personal from "./Personal";

class Form extends Component {
    constructor(props) {
        super(props);
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
    };

    onSubmitPersonal = (person) => {
        this.setState({
            personal: {
                name: person.personal.name,
                email: person.personal.email,
                phone: person.personal.phone,
            },
        }, () => {
            this.props.update(this.state);
        });

    };

    render() {
        // const { personal, education, experience } = this.state;

        return (
            <div>
                <Personal onSubmitPersonal={this.onSubmitPersonal} />
            </div>
        )
    }
};

export default Form;