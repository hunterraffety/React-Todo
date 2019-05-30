import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: ''
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.taskName);
    this.setState({
      taskName: ''
    });
  };

  render() {
    return (
      <div className='formContainer'>
        <form onSubmit={this.addTask}>
          <input
            value={this.state.taskName}
            name='taskName'
            placeholder='Todo Goes Here...'
            onChange={this.handleChanges}
          />
          <button name='addTask'>Add Todo</button>
          <button name='clearCompleted'>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
