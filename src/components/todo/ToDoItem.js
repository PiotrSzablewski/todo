import React from 'react'

export const ToDoItem =(props)=>{
    return (
        <li>
            <input type="checkbox" defaultChecked={props.isComplete}/>{props.name}
        </li>
    )
}