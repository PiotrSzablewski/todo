import React from 'react'
import { ToDoItem } from './ToDoItem'
export const ToDoList = (props)=>{
    return (
        <div className="ToDo-List">
            <ul>
                {props.todos.map(todo => <ToDoItem key={todo.id} {...todo}/>)}

            </ul>
        </div>
    )
}
ToDoList.propTypes = {
    todos:React.PropTypes.array.isRequired
}