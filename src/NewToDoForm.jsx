// whenever you create a new component, it must end in .jsx
import { useState } from "react"
 
// the function will have an object called props
export function NewToDoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("") // this is how we essentially update dynamically

    function handleSubmit(e){

        e.preventDefault(); 
        if(newItem === "") {
            alert("Field cannot be blank");
            return;
        }
    
        /*
         Notice how we use a function like this when we want to use the current value
         of something. Otherwise, we can just pass in a single value like the new item
        */
        
        onSubmit(newItem);
    
        setNewItem("")
    
      }

    return (
        <form onSubmit = {handleSubmit} className = "new-item-form"> 

        <div className = "form-row">
            <label htmlFor = "item">New Item</label>
            <input value = {newItem} onChange = {e => setNewItem(e.target.value)}type = "text" id = "item" />
            {/* this section right here is updating our textValue box AS we type */}
        </div>

        <button className = "btn">Add Item</button>
        </form>
    )
}