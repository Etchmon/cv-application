import React, { Component } from "react";
import Personal from "./Personal";

class Form extends Component {
    constructor() {
        super();

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

    render() {
        const { personal, education, experience } = this.state;

        return (
            <div>
                <Personal />
            </div>
        )
    }
};

export default Form;