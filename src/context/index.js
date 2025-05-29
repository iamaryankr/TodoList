export {TodoContext, TodoProvider, useTodo} from "./TodoContext";



/*
    we use React context to:
    -> create a global state for our todos
    -> let deeply nested components access the todos state without prop drilling

    How to use the context ?
    -> we use our custom react Hook (useContext(TodoContext))
    -> we can use useTodo() to access the context

    Exporting the provider
    -> we use TodoContext.Provider to wrap our App component by passing the value prop

*/