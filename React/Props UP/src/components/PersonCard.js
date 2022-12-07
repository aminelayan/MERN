import React, { Component } from 'react';

class PersonInfo extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>{this.props.lastName},{this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.haircolor}</p>
            </div>
        );
    }
}
 
export default PersonInfo;