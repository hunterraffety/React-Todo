import React from 'react';
import Todo from './Todo';
class TodoList extends React.Component {
  render() {
    return (
      <div className='TodoList'>
        <Todo taskOnProps={this.props.taskOnProps} />
      </div>
    );
  }
}

export default TodoList;
