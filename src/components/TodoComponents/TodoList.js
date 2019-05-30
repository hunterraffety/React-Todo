import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className='task-list'>
      {props.taskList.map(task => {
        return (
          <TaskItem key={task.id} toggleTask={props.toggleTask} task={task} />
        );
      })}
    </div>
  );
};

export default TodoList;
