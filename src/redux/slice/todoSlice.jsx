import { createSlice } from "@reduxjs/toolkit";
let initState = JSON.parse(localStorage.getItem("todo"))
const todoSlice = createSlice({
    name: 'todos',
    initialState: initState || [],
    reducers: {
        addTodo: (state, action) => {
            state.unshift({ id: Date.now(), text: action.payload.value,});
            localStorage.setItem('todo', JSON.stringify(state))
        },
        removeTodo: (state, action) => {
            let updated = state.filter(todo => todo.id !== action.payload);
            localStorage.setItem('todo', JSON.stringify(updated))
            return updated
        },
    }
})


export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;