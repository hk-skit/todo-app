import React from 'react';

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });

    return <ul>{todos}</ul>;
  }
}
