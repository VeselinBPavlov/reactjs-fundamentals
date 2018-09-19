import React from 'react';
import Char from './Char';

class Bio extends React.Component {
    constructor(params) {
        super(params);

        this.state = {
            id: 0,
            currentChar: {}
        }

         this.updateId = (id) => {
            this.setState({id: id});
        } 

        this.promisfyState = obj => {
            return new Promise(res => {
              this.setState(obj, res)
            }).catch(e => {
              console.log(e)
            })
        }
    }  

      componentWillReceiveProps () {
        fetch('http://localhost:9999/character/' + this.props.id)
          .then(data => {
              console.log(data)
            return data.json()
          })
          .then(parseData => {
            this.promisfyState({ id: Number(parseData.id)}).then(() => {
            })
          })
      } 
    
    componentDidMount() {
        fetch('http://localhost:9999/character/' + this.state.id)
            .then(data => {
                return data.json();
            }).then(parsedData => {
                this.setState({currentChar: parsedData})
            })
    }

    render() {
        return (
            <div className="bio">
                <Char params={{url: this.state.currentChar.url}} />
                <p>{this.state.currentChar.bio}</p>
            </div>
        )
    }

}

export default Bio;