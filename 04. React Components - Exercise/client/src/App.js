import React, { Component } from 'react';
import Slider from './components/Sliders';
import Roster from './components/Roster';
import Bio from './components/Bio';
import observerMenu from './utils/observer';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      epOnFocus : 0,
      focusedChar: 0
    }

    this.changeEp = (ep)=>{
      this.setState({epOnFocus:ep})
    }

    this.eventHandler = (newState) => {
      this.setState(newState)
    }

    this.changeChar = (id) => {
      this.setState({focusedChar: id});
    }
  }

  componentDidMount() {
    observerMenu.addObserver('changeFocus', this.eventHandler);
  }

  render() {
    return (
      <div className="App">   
        {console.log(this.state)} 
        <Slider updateFunc={this.changeEp} focusedEp={this.state.epOnFocus}/>
        <Roster />
        <Bio id={this.state.focusedChar}/>
      </div>
    );
  }
}

export default App;
