import React from 'react'
import trash from "../assets/trash.svg"
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from "../redux/slice/todoSlice"

function TaskList() {
  const state = useSelector(state => state.todos)
  const weather = useSelector(state => state.weather)
  const dispatch = useDispatch()
  console.log(weather);
  
  return (
    <div className='tasklist'>
        {state.map((elem, index)=>{
            return(
                <div key={elem.id} className="d-flex justify-content-between">
                    <p className='paragraph'>{elem.text}</p>
                    <img className='img' onClick={(e)=>{
                        dispatch(removeTodo(elem.id))
                    }} src={trash} alt="Delete" />
                    </div>
            )
        })}
    </div>
  )
}

export default TaskList