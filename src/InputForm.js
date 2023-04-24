import { useState } from "react";

const InputForm = (props) => {
    const [newTodo, setNewTodo] = useState("");
    
    const handleSetNewTodo = (input) => {        
        setNewTodo(input.target.value);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        if (newTodo.length > 0) {            
            props.addTodo(newTodo);
        }        
    }

    return (
        <form className="form-note" onSubmit={handleAddTodo}>
            <input value={newTodo} placeholder="Add a new note" onChange={handleSetNewTodo}></input>
            <button >submit</button>
        </form>
    )
}

export default InputForm;
