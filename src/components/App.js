import React, { Component } from 'react';
import '../styles/App.css';

import NavigationBar from './NavigationBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar options="{'brand': 'Ashraful Islam'}"/>
        <div className="jumbotron">
          <h1 className="text-center">Hello, World</h1>
        </div>
      </div>
    );
  }
}

export default App;
