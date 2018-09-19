import React from 'react';

class Timer extends React.Component {
    // Contructor
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    // Hooks
    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    // Function
    tick() {
        this.setState({
            date: new Date()
        });
    }

    // Render
    render() {
        return (
           <span>{this.state.date.toLocaleTimeString()}</span>
        )
    }
}

export default Timer;