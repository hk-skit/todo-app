import React from 'react';
import { TodoList } from './TodoList';
import { TodoAddBar } from './TodoAddBar';
import { TodoService } from './TodoService';

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleTodoTextChange = this.handleTodoTextChange.bind(this);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
    this.state = { text: '', todos: [] };
  }

  componentDidMount() {
    this.setState({ todos: TodoService.getTodos() });
  }

  handleTodoTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleTodoSubmit() {
    const todos = TodoService.addTodo(this.state.text);
    this.setState({ todos, text: '' });
  }

  render() {
    const todos = this.state.todos;
    return (
      <div className="container">
        <TodoAddBar
          text={this.state.text}
          onTodoTextChange={this.handleTodoTextChange}
          onTodoSubmit={this.handleTodoSubmit}
        />
        {todos.length ? <TodoList todos={todos} /> : <p>Yeah!! No todos.</p>}
      </div>
    );
  }
}
