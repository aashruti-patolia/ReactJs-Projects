import React, { useState } from 'react'
import ToDoList from './ToDoList'
import '../App.css'


function ToDoInput() {
    const [task, setTask] = useState("")
    const [arr, setArr] = useState([])

    const handleClick = () => {
        let obj = {
            id: Date.now(),
            work: task,
            isCompleted: false
        }
        setArr([...arr, obj])
    }

    const handleDelete = (id) => {
        let d = arr.filter((el) => {
            return el.id != id
        })
        setArr(d)
    }

    const handleUpdate = (id) => {
        let d = arr.map((el) => {
            if (el.id == id) {
                return { ...el, isCompleted: !el.isCompleted }
            } else {
                return el
            }
        })
        setArr(d)
    }
    return (
        <div>
            <input type="text" placeholder='Task' onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleClick}>Add</button>
            <div className='ToDo'>{
                arr.map((el) => {
                    return <ToDoList key={el.id} data={el} hdlt={handleDelete} hupd={handleUpdate} />
                })
            }</div>
        </div>
    )
}

export default ToDoInput
