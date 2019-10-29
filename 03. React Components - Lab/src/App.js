import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Timer from './components/Timer';


function App() {
  return (
    <div className="App">
      <Welcome title ='Hello from React.' subtitle = 'Enjoy building your apps.' />
      <Timer />
    </div>
  );
}

export default App;
