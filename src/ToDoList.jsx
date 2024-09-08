import { TodoItem  } from "./ToDoItem"


export function ToDoList({ todos, toggleToDo, deleteToDo }) {

    return (
        <ul className = "list">
            {todos.length === 0 && "No Todos"}
            {/* Curly Braces inside HTML stuff reads as Js */}
            {todos.map(todo => {
                return (
                    <TodoItem 
                        id = {todo.id} 
                        completed = {todo.completed} 
                        title = {todo.title} 
                        key = {todo.id} 
                        toggleToDo = {toggleToDo}
                        deleteToDo= {deleteToDo}

                    />
                )
            })} 
        </ul>
    )

}