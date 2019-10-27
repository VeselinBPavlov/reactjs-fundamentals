import React, { Component } from 'react';
import ReactMessage from '../components/ReactMessage';

export default class HelloMessage extends Component {
    render () {
        return <div>
            <h1>Hello World!</h1>
            <ReactMessage />
            </div>
    }
}