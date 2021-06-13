import React from 'react';

class Todos extends React.Component{
    render(){
        let todo = this.props.todoItem
    
        return(
            <div>
                <input 
                    type="checkbox"
                    onChange={()=>this.props.handleChange(todo.id)}
                    checked={todo.completed}
                />
                <span>{todo.text}</span>
            </div>
        )
    }
}

export default Todos