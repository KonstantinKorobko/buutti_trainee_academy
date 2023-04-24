import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoNote from './TodoNote';
import InputForm from './InputForm';

function App () {
  const [defaultTodos, setTodos] = useState(
    [
      {id: 1, text: 'Buy potatoes', complete: false},
      {id: 2, text: 'Make food', complete: false},
      {id: 3, text: 'Exercise', complete: false},
      {id: 4, text: 'Do the dishes', complete: false},
      {id: 5, text: 'Floss the teeth', complete: false},
      {id: 6, text: 'Play videogames', complete: true}
    ]
  );
  const [searchQuery, setSearchQuery] = useState('');

  const rendToDoNotes = () => {
    return defaultTodos.map((obj) => (
        <TodoNote
          id={obj.id}
          todo={obj}
          toggleCompletion={toggleCompletion}
          onChange={editTodoText}
          onRemoveClick={removeTodo}
        />
      )
    )
  }

  const rendInputForm = () => {
    return <InputForm
      addTodo={addTodo}
    />
  }

  const rendSerchForm = () => {
    return (
      <form className="form-note" onSubmit={filterToDo}>
      <input placeholder="Add search text..." onChange={handleSetSearchQuery}></input>
      <button >search</button>
      </form>
    )
  }

  const toggleCompletion = (id) => {
    setTodos(defaultTodos.map((obj) => {
      if (obj.id === id) {
        if (obj.complete === true) {
          obj.complete = false;
        }
        else {
          obj.complete = true;
        }
      }
      return obj;
    }))
  }

  const editTodoText = (id, newText) => {
    setTodos(defaultTodos.map((obj) => {
      if (obj.id === id) {
        obj.text = newText;
      }
      return obj;
    }))
  }

  const removeTodo = (id) => {
    setTodos(defaultTodos.filter(obj => obj.id !== id))
  }

  const addTodo = (text) => {
    const newToDo = {id: uuidv4(), text: text, complete: false};

    const newDefaultTodos = [...defaultTodos];
    newDefaultTodos.push(newToDo);    
    setTodos(newDefaultTodos);
  }

  const handleSetSearchQuery = (input) => {
    setSearchQuery(input.target.value);
  }

  const filterToDo = (event) => {
    event.preventDefault();
    if (searchQuery.length > 0) {
      setTodos(defaultTodos.filter(obj => obj.text.search(searchQuery) >= 0));
    }
  }

  return (
    <div>
      {rendInputForm()}
      {rendSerchForm()}
      {rendToDoNotes()}
    </div>
  )
}

export default App;
