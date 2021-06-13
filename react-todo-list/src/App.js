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
    this.setState({todos:updateState}) // don't forget to update to the correct property
  }
  render() {
    console.log(this.state.todos)
    let allTodos = this.state.todos.map(todo => {
      return(
        <Todos key={todo.id} todoItem={todo} handleChange={this.handleChange}/>
      )
    })
    return (
       <div>
         {allTodos}
       </div>
    );
  }
}

export default App;
