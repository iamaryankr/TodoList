import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export {TodoForm};
export {TodoItem};


/*
    Todoform: handles input and adding new todos
    -> we use useState to manage the input state, and useTodo context to access addTodo() function in out form.
    -> user - input - bound to todo state - on form submit, we prevent default refreshand call addTodo({completed: false}).
    -> then clear the input field by setting todo to "".


    TodoItem: Represents a single todo with editing and other actions
    -> isTodoEditable state to manage edit mode
    -> todoMsg local copy of todo text for inline editing
    CheckBox -> bound to todo.completed state, toggles using toggleCompleted(id)
    TextInput -> bound to todoMsg, editable when isTodoEditable is true
    Edit/Save Button -> toggles edit mode, calls updateTodo() when in edit mode
    Delete Button -> calls deleteTodo() with todo.id
*/
