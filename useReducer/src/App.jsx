import { useReducer } from "react";
const counterReducer = (state, action) => {
  console.log(action)
  console.log(state)
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state
  }
}
function App() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })
  return (
    <div>
      <p>Count :{state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
    </div>
  )
}
export default App;