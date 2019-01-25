import React from 'react';
export class TodoAddBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleTodoTextChange = this.handleTodoTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTodoTextChange(event) {
    this.props.onTodoTextChange(event);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onTodoSubmit(event);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter you tasks"
          value={this.props.text}
          onChange={this.handleTodoTextChange}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}
