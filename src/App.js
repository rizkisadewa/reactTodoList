import React, { Component } from 'react';
import Header from './components/layout/Header'; // import header layout from folder ./components/layout
import Todos from './components/Todos'; // import Todos component from folder ./components
import AddTodo from './components/AddTodo'; // import Todos component from folder ./components

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


  /* Method for dynamic : Toggle Complete */
  toggleComplete = (id) => {
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
  /* /Method for dynamic : Toggle Complete */

  /* Method for dynamic : Delete Todo */

  delTodo = (id) => {
    console.log(id); //test the button is working

    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)]});
    //... mean copy everything that has already in state. Then we filter all the state which is id not the same with the id that we click
  }

  /* /Method for dynamic : Delete Todo */

  /* Method for dynamic : Add Todo */
  addTodo = (title) => {
    // console.log(title); // test the button is working
    const newTodo = {
      id : 4,
      title,
      completed : false
    }
    this.setState({todos:[...this.state.todos, newTodo]});
  }

  /* /Method for dynamic : Add Todo */

  render() {
    // console.log(this.state.todos) // will be shown the state in the console
    return (
      // <Todos /> is the customized Tag that created in Todos.js at components folder
      <div className="App">
        <div>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
