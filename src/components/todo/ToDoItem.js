import React from 'react'

export const ToDoItem =(props)=>{
    return (
        <li>
            <input type="checkbox" defaultChecked={props.isComplete}/>{props.name}
        </li>
    )
}
ToDoItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    isComplete: React.PropTypes.bool,
    id: React.PropTypes.number.isRequired
}