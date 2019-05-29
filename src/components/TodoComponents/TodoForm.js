import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <div className='formContainer'>
        <form onSubmit={this.addTodo}>
          <input
            type='text'
            placeholder='Todo Goes Here...'
            onChange={this.handleChanges}
          />
          <button className='add' name='add'>
            Add Todo
          </button>
          <button className='clear' name='clearCompleted'>
            Clear Completed
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
