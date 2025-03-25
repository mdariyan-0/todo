import React from 'react'
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from "../redux/slice/todoSlice"

function TaskInput() {
    const checkBoxRef = useRef(null)
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const handleChange = (e)=>{
        setValue(e.target.value)
    }
  return (
    <>
        <div className='inputF mb-4 gap-1'>
            <input className="form-control" onChange={handleChange} value={value} type="text" placeholder="Input here..." aria-label="default input example"></input>
            <button type="button" onClick={()=>{
                value?dispatch(addTodo({value : value})): alert("Please input something...")
                setValue("");
            }} className="btn addtask btn-outline-light">Add Task</button>
        </div>
        <hr />
    </>
  )
}

export default TaskInput