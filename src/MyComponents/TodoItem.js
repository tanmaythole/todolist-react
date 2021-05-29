import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <tr>
            <td>{todo.sno}</td>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td><button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button></td>
        </tr>
    )
}
