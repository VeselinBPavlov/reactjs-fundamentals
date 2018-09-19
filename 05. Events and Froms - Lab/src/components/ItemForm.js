import React, {Component} from 'react';

export default class ItemForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            itemName: '',
            error: ''
        }
        
        this.onInputChanged = this.onInputChanged.bind(this);
        this.onItemSaved = this.onItemSaved.bind(this);
    }

    onInputChanged(event) {
        this.setState({
            itemName: event.target.value
        });
    }

    onItemSaved(event) {
        event.preventDefault();

        if (!this.state.itemName) {
            let error = 'Item cannot be empty!';
            this.setState({ error });
            return;
        }

        this.setState({ error: '' });
        this.props.addItem(this.state.itemName);       
    }

    render() {
        return (
            <form onSubmit={this.onItemSaved}>
                <p>{this.state.error}</p>
                Item Name:
                <input
                    type='text'
                    name='name' 
                    onChange={this.onInputChanged}
                    value={this.state.itemName}
                />
                <br />
                <input type="submit" />                
            </form>
        )
    }
}