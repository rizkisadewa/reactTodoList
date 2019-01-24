import React, { Component } from 'react';
import Todos from './components/Todos'

class App extends Component {
  render() {
    return (
      // <Todos /> is the customized Tag that created in Todos.js
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
