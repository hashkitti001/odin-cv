import React from "react"
import {v4 as uuid} from "uuid";
function RenderList(){
    const animals = ["Lion", "Cow", "Pig", "Lizard", "Cat"];
    return (
        <>
        <h1>Animals</h1>
        <ul>{

            animals.map((animal) => 
              {return <li key={animal}>{animal}</li>})
            
            }
            </ul>
        </>
    )
}
const todos = [
    { task: "mow the yard", id: uuid() }, 
    { task: "Work on Odin Projects", id: uuid() },
    { task: "feed the cat", id: uuid() },
  ];
  
  function TodoList() {
    return (
      <ul>
        {todos.map((todo) => (
          // here we are using the already generated id as the key.
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    ) 
  }
export default RenderList;
export  {TodoList};