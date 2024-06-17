import React from 'react'
import '../App.css'

function ToDoList({ data, hdlt, hupd }) {
    return (
        <div className="todo-list">
            <h1> {data.isCompleted ? <input type="checkbox" name="" id="" checked disabled /> : <input type="checkbox" name="" id="" disabled />}        {data.work}</h1>
            <button onClick={() => hupd(data.id)}>Check/UnCheck</button>
            <button onClick={() => hdlt(data.id)}>Delete</button>
        </div>
    )
}

export default ToDoList
