import React from 'react';
import Logo from './Logo';
import Button from './Button';

class Welcome extends React.Component {
    render() {
        let title = this.props.title || 'Title';
        let subtitle = this.props.subtitle || 'Subtitle';

        return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <Logo />
            <br/>
            <Button text = 'Button'/>
        </div>
        )
    }
}

export default Welcome;