import React, { Component } from 'react';
import Todos from './components/Todos'; // import Todos component from folder components

import './App.css'; // Import the CSS from App.css

class App extends Component {

  // State is like a database to create a value, each component will have a state.
  // We can pass down the state into Todos as a props
  state = {
    todos : [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  render() {
    // console.log(this.state.todos) // will be shown the state in the console
    return (
      // <Todos /> is the customized Tag that created in Todos.js at components folder
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
