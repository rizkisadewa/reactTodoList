import React, { Component } from 'react';

// Make a new component that copy from App.js, but we just modified the class name and export default into Todos.
// We do not need the tag with the calss App as that only in App.js.
class Todos extends Component {
  render() {
    return (
      <h1>Todos</h1>
    );
  }
}

export default Todos;
