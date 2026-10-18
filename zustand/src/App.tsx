import { useCounter } from './store'

const App = () => {
  const{count , increment, decrement} = useCounter()
  // const increment = useCounter(state=>state.increment)
  // const decrement = useCounter(state=>state.decrement)
  return (
    <div><h1>{count}</h1>
    <button onClick={()=>increment()}>Increment</button>
    <button onClick={()=>decrement()}>decrement</button></div>
  )
}

export default App