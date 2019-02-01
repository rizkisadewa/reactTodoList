import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  // method for CSS dynamic, long way
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  // // mark completed method, but we cannot make any change the state,
  // // we need to the climb the tree
  // markCompleted = (e) => {
  //   console.log(this.props);
  // }

  // climb the tree is only make a method markCompleted in Todos.js

  render(){
    // distructuring pull out the variable
    const {id, title} = this.props.todo;
    
    return(
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          { title }
        </p>
      </div>
    )
  }
}

// PropType
TodoItem.propsTypes = {
  todo : PropTypes.array.isRequired
}

// CSS
// we do not use background-color, but we do backgroundColor (Camel Case )
const itemStyle = {
  backgroundColor: '#f4f4f4'
}

export default TodoItem
