import React from 'react';

const TodoForm = () => {
  return (
    <div className='formContainer'>
      <form>
        <input type='text' placeholder='Todo Goes Here...' />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
