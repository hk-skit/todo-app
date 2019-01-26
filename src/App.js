import React from 'react';
import { TodoApp } from './todo/TodoApp';

export default class App extends React.Component {
  render() {
    return (
      <div className="mt-10">
        <TodoApp />
      </div>
    );
  }
}
