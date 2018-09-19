import React, { Component } from 'react';
import './App.css';
import ButtonWithClick from './components/ButtonWithClick';
import RegisterForm from './components/RegisterFrom';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <ButtonWithClick />
        <br />
        <RegisterForm />
        <br />
        <Container />
      </div>
    );
  }
}

export default App;
