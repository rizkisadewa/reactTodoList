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

  render(){
    return(
      <div style={this.getStyle()}>
        <p> {this.props.todo.title} </p>
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
