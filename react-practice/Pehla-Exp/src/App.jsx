import { useState } from "react"

function App() {
  const [color,setColor] = useState("#212121")
  return (
    <div className="w-screen h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>{setColor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>{setColor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>{setColor("blue")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>{setColor("yellow")}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>{setColor("orange")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=>{setColor("pink")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
        </div>
      </div>
    </div>
  )
}
//onclick will always need a function to be  returned rather than a variable , when we use a call back i.e we are returning a function then we can use the function directly
// onClick is a function and whatever inside the {} (first curly braces) are instructions to be executed when the button is clicked
export default App
