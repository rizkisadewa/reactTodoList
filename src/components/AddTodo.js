import React, { Component } from 'react';

export class AddTodo extends Component {

  state = {
    title: ''
  }

  /*
  onSubmit method
  a method to submit the value, bring up to App.js use props
  */

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ' '}); // set the state again to nothing once submited
  }

  /* /onSubmit method */



  /*
  onChange Method
  a method to set the state above with the value of the form below.
  When add the value, will be changed real time into state
  */
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  /* /onChange Method */


  render () {
    return(
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          style={{flex: '10', padding: '5px'}}
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{flex: '1'}}
         />
      </form>
    )
  }
}

export default AddTodo;
