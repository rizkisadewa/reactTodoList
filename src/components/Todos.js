// Uper Case each word is for the convention of the component

import React, { Component } from 'react';

// Make a new component that copy from App.js, but we just modified the class name and export default into Todos.
// We do not need the tag with the calss App as that only in App.js.
class Todos extends Component {
  render() {
    // console.log(this.props.todos); // will be printed all of todos state that created in the state come from App.js
    return (
      <div>
        <h1>Todos</h1>
      </div>
    );
  }
}

export default Todos;
