import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // usage of hook
  // const [counter, setCounter]=useState(15)   //countetr is a variable and setCounter is a function
  // // let counter = 15;

  // const addValue = () =>{
  //   // counter++;
  //   // console.log(counter);
  //   setCounter(counter+1)
  // }

  // const removeValue = () =>{
  //   setCounter(counter - 1)
  // }

  // assignment

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter >=20){
      setCounter(20)
    }else{
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter <= 0){
      setCounter(0)
    }else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Hi nanna</h1>
      <p>React will controls the ui updation ,babel will do automatically somethings</p>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value</button><br /><br />
      <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
