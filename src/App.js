import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: [{}],
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

  render() {
    return (
      <div className='container'>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
