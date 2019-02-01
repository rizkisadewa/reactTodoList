// Uper Case each word is for the convention of the component

import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// Make a new component that copy from App.js, but we just modified the class name and export default into Todos.
// We do not need the tag with the calss App as that only in App.js.
class Todos extends Component {
  render() {
    // console.log(this.props.todos); // will be printed all of todos state that created in the state come from App.js

    // Modified parentesist
    // Below is actually looping each
    return this.props.todos.map((todo) => (
      // Print all the title in todo state, come from TodoItem.js
      // Every single map must have a key that unique, todo.id is a unique value
      <TodoItem key={todo.id} todo={todo} />
    ));

  }
}

// PropType 
Todos.propsTypes = {
  todos : PropsTypes.array.isRequired
}

export default Todos;
