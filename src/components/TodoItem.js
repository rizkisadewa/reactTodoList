import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  render(){
    return(
      <div style={itemStyle}>
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
