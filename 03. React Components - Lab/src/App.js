import React, { Component } from 'react';
import Wellcome from './components/Welcome';
import Timer from './components/Timer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wellcome title ='Hello from React.' subtitle = 'Enjoy building your apps.' />
        <Timer />
      </div>
    );
  }
}

export default App;
