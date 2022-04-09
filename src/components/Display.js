import React, { Component } from "react";

class Display extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { person, education } = this.props;
        console.log(education);
        return (
            <div>
                <section>
                    <h1>{person.name}</h1>
                    <h1>{person.email}</h1>
                    <h1>{person.phone}</h1>
                </section>
                <section>
                    <h1>{education.school}</h1>
                    <h1>{education.study}</h1>
                    <h1>{education.date}</h1>
                </section>

            </div>
        )
    }
};

export default Display;