import { useState } from "react";

const TodoNote = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [toDoNote, setToDoNote] = useState(props.todo.text);

    const handleSetToDoNote = (input) => {
        setToDoNote(input.target.value);
    }

    const rendToDoNote = () => {
        if (editMode === false) {
            return <p className="todo-text">{props.todo.text}</p>;
        }
        else {
            return <input type="text" className="input-todo" onChange={handleSetToDoNote}></input>
        }
    }

    const handleSetEditMode = () => {
        if (editMode === false) {
            setEditMode(true);
        }
        else {
            props.onChange(props.id, toDoNote);
            setEditMode(false);
        }
    }

    const rendModeButton = () =>{
        if (editMode === false) {
            return <button className="mode-button" onClick={handleSetEditMode}>edit</button>;
        }
        else {
            return <button className="mode-button" onClick={handleSetEditMode}>save</button>;
        }
    }
    
    const handleOnRemoveClick = () => {
        props.onRemoveClick(props.id);
    }

    return (
        <div className={props.todo.complete ? "todo-note complete" : "todo-note not-complete"} id={props.id}>
            <input type="checkbox" checked={props.todo.complete} onChange={()=>{props.toggleCompletion(props.id)}}></input>
            {rendToDoNote()}
            {rendModeButton()}
            <button className="button-X" onClick={handleOnRemoveClick}>X</button>
        </div>
    )
}

export default TodoNote;
