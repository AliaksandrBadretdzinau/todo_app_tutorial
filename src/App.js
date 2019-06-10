import React, { Component } from 'react'
import './App.css';
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem} />
      </div>
    )
  }
}

export default App;