import React from 'react';
import { TodoList } from './TodoList';
import { TodoAddBar } from './TodoAddBar';

const todos = Array.from(
  { length: 10 },
  (_, index) => `Sup! I am your task ${index}`
);

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleTodoTextChange = this.handleTodoTextChange.bind(this);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
  }

  handleTodoTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleTodoSubmit(event) {
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="container">
        <TodoAddBar
          text={this.state.text}
          onTodoTextChange={this.handleTodoTextChange}
          onTodoSubmit={this.handleTodoSubmit}
        />
        <TodoList todos={todos} />
      </div>
    );
  }
}
