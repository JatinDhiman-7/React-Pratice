// import Controlled from "./Controlled";
// import { useState } from "react";
// import Todo from "./todo";
// import Filter from "./Filter";
// import SagarCode from "./SagarCode";
// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       {/* <h1>Counting:{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <button onClick={()=>setCount(count-1)}>Decrement</button>
//       <button onClick={()=>setCount(0)}>Reset</button> */}
//       {/* <Controlled /> */}
//       {/* <Todo/> */}
//       {/* <Filter/> */}

//       <SagarCode />
//     </div>
//   )
// }

// export default App;

import React, { useEffect, useState } from 'react'
const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1)
  }, [])
  return (
    <div>{count}</div>
  )
}

export default App