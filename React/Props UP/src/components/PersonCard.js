import React, { Component } from 'react';

class PersonInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ageCounter:this.props.age,
        }
    }
    
    
    increaseAge =()=> {
        this.setState({ageCounter:this.state.ageCounter+1});
    }

    render() { 
        return (
            <div>
                <h1>{this.props.lastName},{this.props.firstName}</h1>
                <p>Age: {this.state.ageCounter}</p>
                <p>Hair Color: {this.props.haircolor}</p>
                <button onClick={this.increaseAge}>Birthday Button For Jane Doe</button>
            </div>
        );
    }
}
 
export default PersonInfo;
