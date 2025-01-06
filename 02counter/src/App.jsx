import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

     const addValue = ()=>{
      setCounter((prevCounter)=>prevCounter+1)
      setCounter((prevCounter)=>prevCounter+1)
      setCounter((prevCounter)=>prevCounter+1)
      setCounter((prevCounter)=>prevCounter+1)
     }

     const removeValue = ()=>{
      setCounter(prevCounter=>prevCounter-1);
      setCounter(prevCounter=>prevCounter-1);
      setCounter(prevCounter=>prevCounter-1);
      setCounter(prevCounter=>prevCounter-1);
     }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}> Add Value {counter}</button>
      <br/>

      <button onClick={removeValue}> remove Value {counter}</button>
      <br/>
      <p>footer: {counter}</p>

    </>
  )
}

export default App
