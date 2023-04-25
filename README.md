# Konsta's trainee academy portfolio.

In this assignment, you create a single ***Todo notes*** application.

Here's a crude MS Paint mockup how it could look like:

![](notes.png)

## Assignment 1. Displaying the notes

Start from an empty Create React App project. Delete the unnecessary files and start from an empty App component. Inside it, create a new array of objects state `todos` with this array as the default value:
```js
const defaultTodos = [
    {id: 1, text: 'Buy potatoes', complete: false},
    {id: 2, text: 'Make food', complete: false},
    {id: 3, text: 'Exercise', complete: false},
    {id: 4, text: 'Do the dishes', complete: false},
    {id: 5, text: 'Floss the teeth', complete: false},
    {id: 6, text: 'Play videogames', complete: true},
]
```

Inside the App component, we will include the functions that implement the CRUD (create, read, update, delete) methods. First, we just want to *display* the existing notes. 

* Create a new component called TodoNote in its own file.
* In the App component, map the objects in the array state to display TodoNote components.
* Send the todo object and the id as props `todo` and `id`, respectively.

In the TodoNote component, destructure the props and create a `<div>` element with a class `todo-note`.

Inside the div, create three elements:

* A checkbox that is used to toggle the `complete` boolean. Show the correct state on the checkbox based on the prop value!
* A paragraph that shows the `text` of the note.
* A remove button that shows the letter "X", this will be used for deleting the note.

## Assignment 2. Toggling the completion

In the App component, add a new function `toggleCompletion(id)` that finds the object based on the given id, and toggles the `complete` boolean (if it's `true`, set it to `false` and vice versa). The function should save the changed note in the `todos` state.

Pass the function as a prop `onCompletionToggle` to the TodoNote component. Wrap it inside an arrow function so that you can send the correct id as well.

Inside TodoNote, call the function when the checkbox is clicked.

***Extra:*** Add a conditional style for the todo note: if the note is completed, make the note background color light green; if not completed, make it pink.

## Assignment 3: Editing notes (Extra)

![](editnotes.png)

In the App component, add a new function `editTodoText(id, newText)` that 
* finds the todo object from the `todos` array state based on the given `id`
* changes its `text` field to the value of the `newText` argument. 

TodoNote component should have a prop called `onChange`, whose value should be an arrow function. Inside the arrow function call `editTodoText` with appropriate arguments.

In the TodoNote component, add a new boolean state `editMode` with the default value `false`.

Based on its value, we display the note differently:

* If `editMode` is `false`, show the note text like previously, as a paragraph. Show a new button `Edit` on the right side of the text.
* If `editMode` is `true`, show an input field instead of the text paragraph. Add a new button `Save` next to the field.

If the `Edit` button is clicked, set `editMode` to `true`.
If the `Save` button is clicked, set `editMode` to `false` and call the `onChange` function.

## Assignment 4. Removing a note

In the app component, create a new function `removeTodo(id)` that removes the note with the given id from the `todos` state.

Send it to TodoNote component as a prop `onRemoveClick`, again wrapped inside an arrow function so the correct id is sent to the component as well.

In the TodoNote component, set the onClick event listener of the remove button to be the passed in function. 

## Assignment 5. Adding a new note

In the App component, create a new function `addTodo(text)`. Xreate a new todo object in the `todos` state with the given text and the `complete` value set to `false`. Generate a new `id` value with UUID.

Create a new component called InputForm in its own file. Add a new string state `newTodo` with an empty string as the default value.

In the component, create a new form element with two elements inside:

* a text input field with three properties:
  * `placeholder` with the value `Add a new note`
  * `value` with the value from `newTodo`
  * `onChange` with a function that updates `newTodo`
* a submit button

Create a new function that is called when the `onSubmit` event is triggered. It should call the `addTodo` function with the `newTodo` value (and make sure you disable refreshing the page!).

## Assignment 6: Searching for notes (Extra)

Add a new text field that is used for searching the notes. Its value should be saved in the state `searchQuery`. Based on its value, we decide how many notes we show in the original notes list:
* If `searchQuery` is an empty string, show all the notes. 
* If `searchQuery` has text, check for all notes if the note's `text` includes the substring `searchQuery`, and only if it does, show the note.
