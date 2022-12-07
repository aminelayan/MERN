import React, { Component } from 'react';

class Dojo extends Component {
    state = {dojo:["Learn React","Climb Mt Everst","Run A Marathon","Feed The Dogs"] } 
    render() { 
        return (
            <div>
            <h1>Hello Dojo</h1>
            <h2>Things to do</h2>
            <ul>{this.state.dojo.map(tanas => <li key={tanas}>{tanas}</li>)}
            </ul>
            </div>
        );
    }
}
export default Dojo;