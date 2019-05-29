import React from 'react';

class Todo extends React.Component {
  render() {
    return <li className='taskItem'>{this.props.taskOnProps.task}</li>;
  }
}

export default Todo;
