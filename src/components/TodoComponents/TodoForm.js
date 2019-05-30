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
            completed='false'
          />
          <button>Add Todo</button>
          <button onClick={this.props.mark}>Mark Complete</button>
        </form>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
