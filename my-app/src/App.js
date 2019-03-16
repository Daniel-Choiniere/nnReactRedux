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
  
  addNinja = (ninja) => {
    ninja.id = Math.random();
    // makes an exact copy of the ninjas array using the spread opperator and adding the new "ninja" to the newly created array (therefore not altering the original array at all)
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      // the new ninjas property will now be equal to the new ninjas updated array
      ninjas: ninjas
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>  
        <p>Welcome brah</p>
        <Ninjas ninjas={ this.state.ninjas }/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
