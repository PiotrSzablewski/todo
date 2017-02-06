import React from 'react'


export const ToDoForm=(props)=>(
    <form action="">
        <input type="text"
               onChange={props.handleInputChange}
               value={props.currentToDo}/>
    </form>
)
