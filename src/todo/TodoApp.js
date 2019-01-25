import React from 'react';
import { TodoList } from './TodoList';
import { TodoAddBar } from './TodoAddBar';

const todos = Array.from(
  { length: 10 },
  (_, index) => `Sup! I am your task ${index}`
);

export class TodoApp extends React.Component {
  render() {
    return (
      <div className="container">
        <TodoAddBar />
        <TodoList todos={todos} />
      </div>
    );
  }
}
