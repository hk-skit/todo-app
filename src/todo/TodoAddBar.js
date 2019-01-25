import React from 'react';
export class TodoAddBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter you tasks" />
        <button>Add</button>
      </div>
    );
  }
}
