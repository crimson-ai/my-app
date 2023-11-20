import React, { Component } from 'react';
import './deletedHello.css';

class Hello extends Component {
    render() {
        return (
            <div className='f1 tc'>
                <h1>Hello world!</h1>
                <p>{this.props.greeting}</p>
            </div>
        );
    }
} // 'this' is the class Hello, which has properties, among which is 'greeting' as defined in index.js

export default Hello; 
