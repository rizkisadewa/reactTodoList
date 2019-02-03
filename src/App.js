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

  // Method to for dynamic, Toggle Complete
  markComplete = (id) => {
    // console.log(id); // just to make sure that when we click, then we choose in certain id in state

    // we need to match the id that parsing in parameter with the id in state when is check
    this.setState({ todos: this.state.todos.map(todo => {

      // if that state id is equal to id parsing in parameter
      if (todo.id === id) {
        todo.completed = !todo.completed
        // we do not use todo.completed = True, if we do that, the completed value will always true even we un-check the box.
        // therefore, we need to set like the above so that we can set the opposite what ever the value
      }
      return todo;
    })})
  }


  render() {
    // console.log(this.state.todos) // will be shown the state in the console
    return (
      // <Todos /> is the customized Tag that created in Todos.js at components folder
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
