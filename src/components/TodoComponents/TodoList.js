import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  console.log(props);
  return (
    <div className='task-list'>
      {props.taskItems.map(task => {
        return <Todo key={task.id} toggleTask={props.toggleTask} task={task} />;
      })}
      <button className='clear' onClick={props.clearTasks}>
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default TodoList;
