import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <div className='formContainer'>
        <form onSubmit={this.props.addToArr}>
          <input
            type='text'
            placeholder='Todo Goes Here...'
            onChange={this.props.addTaskItem}
            id={Date.now()}
            completed='false'
          />
          <button>Add Todo</button>
          <button>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
