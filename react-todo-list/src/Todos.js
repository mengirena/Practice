import React from 'react';

class Todos extends React.Component{
    render(){
        const todos = this.props.todoList.map(todo => {
            let checked = (todo.completed) ? "checked" : ""
            return (
                <div>
                    <input 
                        type="checkbox"
                        onChange={()=>this.props.handleChange(todo.id)}
                        checked={checked}
                    />
                    <span>{todo.text}</span>
                </div>
            )
        })
        return(
            <>
                {todos}
            </>
        )
    }
}

export default Todos