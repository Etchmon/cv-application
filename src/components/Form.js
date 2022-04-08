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
        return (
            <div>
                <form>

                </form>
            </div>
        )
    }
};

export default Form;