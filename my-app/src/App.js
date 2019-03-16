// the main "ROOT COMPONENT" APP.js

import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: 39, belt: 'black', id: 1  },
      { name: 'Dan', age: 33, belt: 'green', id: 2  },
      { name: 'Lyli', age: 7, belt: 'purple', id: 3  }
    ]
  }
  
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>  
        <p>Welcome brah</p>
        <Ninjas ninjas={ this.state.ninjas }/>
        <AddNinja />
      </div>
    );
  }
}

export default App;
