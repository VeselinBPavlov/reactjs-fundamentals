import React, {Component} from 'react';

export default class List extends Component {
    render() {
        let items = this.props.items || [];

        return (
            <ul>
                {items.map(i => <li key={i.id}>{i.name}</li>)}
            </ul>
        )
    }
}