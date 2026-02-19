import Controlled from "./Controlled";
import { useState } from "react";
import Todo from "./todo";
import Filter from "./Filter";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <h1>Counting:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button> */}
      {/* <Controlled /> */}
      {/* <Todo/> */}
      <Filter/>
    </div>
  )
}

export default App;