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
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group mx-sm-3">
          <label for="todo" className="sr-only">
            Todo
          </label>
          <input
            className="form-control"
            name="todo"
            type="text"
            placeholder="Enter you tasks"
            value={this.props.text}
            onChange={this.handleTodoTextChange}
          />
        </div>
        <input className="btn btn-outline-primary" type="submit" value="Add" />
      </form>
    );
  }
}
