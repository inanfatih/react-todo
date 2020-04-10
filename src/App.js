import React, { Component, Fragment } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((res) => {
        this.setState({
          todos: res.data,
        });
        console.log(res.data);
      });
  }
  //Toggle complete
  markComplete = (id) => {
    console.log('id', id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        }),
      );
  };

  addTodo = (title) => {
    console.log(title);
    // const newTodo = {
    //   id: uuid(),
    //   title,
    //   completed: false,
    // };
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title: title,
        completed: false,
        id: uuid(),
      })
      .then((res) =>
        this.setState({
          todos: [...this.state.todos, res.data],
        }),
      );
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </Fragment>
              )}></Route>
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
