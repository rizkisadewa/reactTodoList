import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  /* method for CSS dynamic, long way */
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  btnStyle = () => {
    return {
      background: '#ff0000',
      color: '#fff',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '50%',
      cursor: 'pointer',
      float: 'right'
    }
  }

  /* /method for CSS dynamic, long way */

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
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} style={this.btnStyle()}>x</button>
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
