
export const todoReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TODO':
            const newTodos = [...state.todos, action.payload];
            localStorage.setItem('todos', JSON.stringify(newTodos));
            return { ...state, todos: newTodos };
        case 'DELETE_TODO':
            const updatedTodos = state.todos.filter(e => e !== action.payload)
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return { ...state, todos: updatedTodos };
        case "CHANGE_VALUE":
            return {
                ...state, value: action.payload
            }
        case "INPUT_USERNAME":
            return {
                ...state, username: action.payload
            }
        case "INPUT_PASSWORD":
            return {
                ...state, password: action.payload
            }
        case "LOGIN_PROMPT":
            return {
                ...state, isLogged: action.payload
            }
        case "LOGOUT_PROMPT":
            return {
                ...state, isLogged: action.payload
            }
        default:
            return state;
    }
}