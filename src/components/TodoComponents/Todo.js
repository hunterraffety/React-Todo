import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <div class='containersss'>
        <div>
          <li className='taskItem'>{this.props.taskOnProps.task}</li>
        </div>
        <div>
          <li className='taskComplete'>{this.props.taskOnProps.completed}</li>
        </div>
      </div>
    );
  }
}

export default Todo;
