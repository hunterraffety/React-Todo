import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <li className='taskItem'>
        {this.props.taskOnProps.task} | {this.props.taskOnProps.id} |
        {this.props.taskOnProps.completed}
      </li>
    );
  }
}

export default Todo;
