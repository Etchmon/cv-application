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
                location: '',
            },
        };
    };

    onSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        this.props.onSubmitPersonal(this.state);
        document.querySelector('#pForm').style.display = 'none';
        document.querySelector('#resume-personal').style.display = 'grid';
    };

    handleNameChange = (e) => {
        this.setState({
            personal: {
                name: e.target.value,
                email: this.state.personal.email,
                phone: this.state.personal.phone,
                location: this.state.personal.location,
            }
        });
    };

    handleEmailChange = (e) => {
        this.setState({
            personal: {
                name: this.state.personal.name,
                email: e.target.value,
                phone: this.state.personal.phone,
                location: this.state.personal.location,
            }
        });
    };

    handlePhoneChange = (e) => {
        this.setState({
            personal: {
                name: this.state.personal.name,
                email: this.state.personal.email,
                phone: e.target.value,
                location: this.state.personal.location,
            }
        });
    };

    handleLocationChange = (e) => {
        this.setState({
            personal: {
                name: this.state.personal.name,
                email: this.state.personal.email,
                phone: this.state.personal.phone,
                location: e.target.value,
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
                <label htmlFor="locationInput">Location</label>
                <input onChange={this.handleLocationChange} type="text" id="locationInput" value={personal.location} />
                <button type="Submit">
                    Add
                </button>
            </form>
        )
    };
};

export default Personal;