import React, {Component} from 'react';

export default class ButtonWithClick extends Component {
    onButtonClicked() {
        alert('Event!');
    }


    render() {
        return (
            <button onClick={this.onButtonClicked}>Click me</button>
        )
    }
}
