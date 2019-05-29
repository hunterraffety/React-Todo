import React from 'react';

const TodoForm = () => {
  return (
    <div className='formContainer'>
      <form>
        <input type='text' placeholder='Todo Goes Here...' />
        <button className='add' name='add'>
          Add Todo
        </button>
        <button className='clear' name='clearCompleted'>
          Clear Completed
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
