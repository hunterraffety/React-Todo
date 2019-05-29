import React from 'react';
import Todo from './Todo';
const TodoList = props => {
  return (
    <div className='TodoList'>
      <h1>Your todo list:</h1>
      <Todo />
    </div>
  );
};

export default TodoList;
