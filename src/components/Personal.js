import React, { Component } from "react";

class Personal extends Component {
    constructor(props) {
        super(props);
        this.onSubmit.bind(this);
        this.state = {
            personal: {
                name: '',
                email: '',
                phone: '',
            },
        };
    };

    onSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        this.props.onSubmitPersonal(this.state);
        this.setState({
            personal: {
                name: '',
                email: '',
                phone: '',
            },
        })
    };

    handleNameChange = (e) => {
        this.setState({
            personal: {
                name: e.target.value,
                email: this.state.personal.email,
                phone: this.state.personal.phone,
            }
        });
    };

    handleEmailChange = (e) => {
        this.setState({
            personal: {
                name: this.state.personal.name,
                email: e.target.value,
                phone: this.state.personal.phone,
            }
        });
    };

    handlePhoneChange = (e) => {
        this.setState({
            personal: {
                name: this.state.personal.name,
                email: this.state.personal.email,
                phone: e.target.value,
            }
        });
    };

    render() {
        const { personal } = this.state;
        return (
            <form onSubmit={this.onSubmit} id="pForm">
                <legend>Personal Information</legend>
                <label htmlFor="nameInput">Name</label>
                <input onChange={this.handleNameChange} type="text" id="nameInput" value={personal.name} />
                <label htmlFor="nameInput">Email</label>
                <input onChange={this.handleEmailChange} type="text" id="emailInput" value={personal.email} />
                <label htmlFor="nameInput">Phone</label>
                <input onChange={this.handlePhoneChange} type="text" id="phoneInput" value={personal.phone} />
                <button type="Submit">
                    Add
                </button>
            </form>
        )
    };
};

export default Personal;