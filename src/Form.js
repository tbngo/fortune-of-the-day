import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fortune: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { fortune } = this.state;
    await axios.post(
      'https://rfwiad0wq8.execute-api.us-east-1.amazonaws.com/beta/fortune',
      { body: `${fortune}` }
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Fortune:</label>
          <input
            type="text"
            name="fortune"
            onChange={this.handleChange}
            value={this.state.fortune}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Form;