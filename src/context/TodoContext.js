import {createContext, useContext} from "react"


//we are creating a context for todos
//and gives it a default value
//like a "conract" of what's expected inside


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});


export const useTodo = () => { return useContext(TodoContext) };
export const TodoProvider = TodoContext.Provider ;