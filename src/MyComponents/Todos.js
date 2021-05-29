import React from 'react'
import {TodoItem} from './TodoItem'


export const Todos = (props) => {
    return (
        <div className="container col-md-8 mb-5">
            <h1 className="my-2">ToDo List</h1>
            {props.todos.length===0? "No ToDos to display":
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.todos.map((todo) => {
                            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}
