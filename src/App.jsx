import './App.css'
import Login from './components/Login'
import TaskBox from './components/TaskBox'
import { useReducer, useEffect } from 'react'
import { todoReducer } from './reducers/todoReducer'
import { useSelector } from 'react-redux'

function App() {
  // const initialState = {
  //   todos: JSON.parse(localStorage.getItem('todos')) || [],
  //   value: "",
  //   isLogged: false,
  //   username: "",
  //   password: "",
  //   modalValue: false
  // };
  // const [state,dispatch] = useReducer(todoReducer, initialState)
 const state = useSelector(state => state.user)
  return(
     <>
      {!state.logPrompt?<Login/>:
      <TaskBox/>}
    </>
  )
}

export default App
