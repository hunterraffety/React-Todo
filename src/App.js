import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

// array for initial state
const taskList = [
  {
    task: 'Clean the kitchen',
    id: 2329302340,
    completed: false
  },
  {
    task: 'Walk the dog',
    id: 94904094,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList
    };
  }

  toggleTask = id => {
    this.setState(prevState => {
      return (
        taskList: prevState.taskList.map(task => {
          if (task.id === id) {
            return {
              ...task,
              completed: !task.completed
            };
          } else {
            return task;
          }
        })
      );
  });
  };

  addTaskItem = taskItem => {
    e.preventDefault();
    const taskItem = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      taskList: [...prevState.taskList, newTaskItem]
    });
  };

  // markToComplete = e => {
  //   e.preventDefault();
  //   const markCompleted = {
  //     completed: 'true'
  //   };
  //   this.setState({
  //     taskList: [...this.state.taskList, markCompleted]
  //   });
  // };

  handleChanges = e => {
    this.setState({
      task: e.target.value
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='title'>
          <h1>Your Task List</h1>
          <TodoForm addTask={this.addTaskItem} />
        </div>
        <TaskList
          taskItems={this.state.taskList}
          toggleTask={this.toggleTask}
        />
      </div>
    );
  }
}

export default App;

/*
        <div className='itemListDisplay'>
          <h1>Your todo list:</h1>
          <ul className='tasks'>
            {this.state.taskList.map(taskFromMap => (
              <TodoList taskOnProps={taskFromMap} />
            ))}
          </ul>
        </div>
        <TodoForm
          addToArr={this.addTodo}
          addTaskItem={this.handleChanges}
          mark={this.markToComplete}
        />
        */
