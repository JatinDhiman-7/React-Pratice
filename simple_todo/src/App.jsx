import { use } from "react";
import { useState } from "react";
function todo() {
  const [todo, settodo] = useState([]);
  const [text, settext] = useState("")

  const addTodo = () => {
    settodo([...todo, text]);
    settext(" ")
  }

  const deleteTodo = (indexToDelete) => {
    settodo(todo.filter((_, index) => index !== indexToDelete));
  }

  return (
    <>
      <div>
        <ul>
          {
            todo.map((todo, index) => (
              <li key={index}>{todo}
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </li>
            ))
          }
        </ul>
        <input value={text} placeholder="enter task" onChange={(e) => settext(e.target.value)} />
        <button onClick={addTodo} >Add</button>
      </div>
    </>
  )
}
export default todo;