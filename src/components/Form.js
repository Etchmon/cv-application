import React, { Component } from "react";

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
            <form>

            </form>
        )
    }
};

export default Form;