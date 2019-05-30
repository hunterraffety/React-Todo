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

  // clearTasks = e => {
  //   e.preventDefault();
  //   console.log(e);
  //   this.setState({
  //     taskList: this.state.taskList.filter(task => !task.completed)
  //   });
  // };

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
          <button className='addTask' name='addTask'>
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
