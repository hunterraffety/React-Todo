import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: [
        {
          task: 'Clean theadsdasasdasdasd kitchen',
          id: 2329302340,
          completed: false
        },
        {
          task: 'Walk the dog',
          id: 94904094,
          completed: true
        }
      ],
      task: null,
      id: null,
      completed: null
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: this.state.completed
    };
    this.setState({
      taskList: [...this.state.taskList, newTodo]
    });
  };

  handleChanges = e => {
    this.setState({
      task: e.target.value
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='itemListDisplay'>
          <h1>Your todo list:</h1>
          <ul className='tasks'>
            {this.state.taskList.map(taskFromMap => (
              <TodoList taskOnProps={taskFromMap} />
            ))}
          </ul>
        </div>
        <TodoForm addToArr={this.addTodo} addTaskItem={this.handleChanges} />
      </div>
    );
  }
}

export default App;
