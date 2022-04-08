import React, { Component } from "react";

class Personal extends Component {
    constructor() {
        super();

        this.state = {
            personal: {
                name: '',
                email: '',
                phone: '',
            },
        };
    };

    handleChange = (e) => {
        this.setState({
            personal: {
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state)
    };

    render() {
        return (
            <form>
                <legend>Personal Information</legend>
                <label htmlFor="nameInput">Name</label>
                <input onChange={this.handleChange} type="text" id="nameInput" name="name" />
                <label htmlFor="nameInput">Email</label>
                <input onChange={this.handleChange} type="text" id="emailInput" name="email" />
                <label htmlFor="nameInput">Phone</label>
                <input onChange={this.handleChange} type="text" id="phoneInput" name="phone" />
                <button type="Submit">
                    Add
                </button>
            </form>
        )
    };
};

export default Personal;