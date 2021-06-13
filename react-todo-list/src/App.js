import React from 'react';
import todoData from './todoData'
import Todos from './Todos'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id){
    console.log(id)
    let updateState = this.state.todos.map(todo =>{
      if (todo.id === id){
        return ({
          ...todo,
          completed: !todo.completed
        })
      }
      return todo
    })
    console.log("this.state",this.state)
    console.log("update",updateState)
    this.setState({todos:updateState}) // don't forget to update to the correct property
  }
  render() {
    console.log(this.state.todos)
    return (
       <div>
         <Todos todoList = {this.state.todos} handleChange={this.handleChange}/> {/*Need to add keys*/}
       </div>
    );
  }
}

export default App;
