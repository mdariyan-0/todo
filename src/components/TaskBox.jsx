import React from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import {updateLogValue} from "../redux/slice/userSlice"
import { useDispatch, useSelector } from 'react-redux'

function TaskBox() {
  const state = useSelector(state => state.user)
  const dispatch = useDispatch()
  return (
    <>
    
    <button type="button" onClick={()=>{
        let prompt = confirm("Are you sure you want to logout?")
        if(prompt === true){
            if(state.logPrompt === true){
                dispatch(updateLogValue (false))
            }
        }
    }} class="logout btn btn-outline-light">Logout</button>
    <div className='taskbox container'>
        <h2 className='heading'>Todo List:</h2>
        <TaskInput/>
        <TaskList />
    </div>
    </>
  )
}

export default TaskBox