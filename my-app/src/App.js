// the main "ROOT COMPONENT" APP.js

import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>  
        <p>Welcome brah</p>
        <Ninjas />
      </div>
    );
  }
}

export default App;
