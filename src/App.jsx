import { useEffect, useState } from "react"
import "./styles.css" // connecting stylesheet to our JSX file
import { NewToDoForm } from "./NewToDoForm";
import { ToDoList } from "./ToDoList";

export default function App (){
  const [todos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEM");
    if(localValue === null){return []}

    return JSON.parse(localValue);
  });

  //Run this function every single time any value in the array changes (any time our todo list changes). Storing our data in cookies
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
    let test = localStorage.getItem("ITEM");
    console.log(test)
  }, [todos])


  function addToDo(title){
    setToDos(currentToDos => {
    
            return [
              ...currentToDos,
              { id: crypto.randomUUID(), title, completed: false }
            ]
    
    })
  }


  function toggleToDo(id, completed){

    setToDos(currentToDos => {
      return currentToDos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }

        return todo
      })
    })

  }

  function deleteToDo(id) {

    setToDos(currentToDos => {
      return currentToDos.filter(todo => 
        todo.id !== id);
    })

  }

  // newItem is immutable, so we need to change it using the function
  // setNewItem("updating our new Item with this string") // the function re-runs/re-renders your ENTIRE component

  return ( // just return all the regular HTML that you'd like
    <>
      <NewToDoForm onSubmit={addToDo}/> {/*importing our component, but the stuff after gets passed into props in the components JSX file*/}
      <h1 className = "header">To-Do List</h1>
      <ToDoList todos={todos} deleteToDo={deleteToDo} toggleToDo={toggleToDo}/>
    </>

  )
  // if you want to name something with "class", you need "className" instead
  // since "class" is a reserved keyword in react

  //Also, you can only ever return ONE HTML element. Think of it as a giant div
  // Thats why we use a "fragment" which is <> </>
}