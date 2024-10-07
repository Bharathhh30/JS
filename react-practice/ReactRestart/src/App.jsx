import React from 'react'
import { useState , useCallback , useEffect , useRef} from 'react'

import './App.css'


function App() {
  const [length , setLength] = useState(8)
  const [numallow , setNumallow] = useState(false)
  const [specialallow , setSpecialallow] = useState(false)
  const [password , setPassword] = useState('')


  // useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallow) str += "0123456789"
    if (specialallow) str += "!@#$%^&*"

    for (let i=1 ; i<=length ; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  } , [length,numallow , specialallow , setPassword])   // ikkada setPassword enduku ichamu , if password is given it changes (if it changes the onChange event is trggierds and it changes password again resulting in infinite loop)

  useEffect(() => {
    passwordGenerator()
  } ,[length,numallow,specialallow,passwordGenerator])
  return (
    <>
      <h1 className='text-blue-400 text-center text-4xl pt-3'>Password Generator</h1>
      <div className='flex justify-center items-center mt-12 border-cyan-300 border-2 rounded-md'>
        <div>
          <h3 className='text-2xl text-blue-300 p-4 flex'>Generate a better Password for better security</h3>
          <div className='p-4'>
            <input type="text" placeholder='Password' className='w-[500px] border-2 border-black p-4 h-12 rounded-lg' 
            ref={passwordRef}
            readOnly value={password} />
            <button className='bg-blue-600 w-24 h-12 rounded-lg ml-2 text-white text-xl'
             onClick={copyPasswordToClipboard}>Copy</button>
          </div>
          <div className='p-4'>
            <input type="range"
              min={8}
              max={50}
              value = {length}

              className='cursor-pointer '
              onChange={(e)=>{setLength(e.target.value)}}
            /> <label className='text-xl ml-2'>Length : {length}</label>

            <input type="checkbox" name="kkkk" id=""
            className='ml-4'
              checked={numallow}  // ikkada okavela true oste it will be like checked = {true} apd em avtaadi page lo tick kanipistad , so on page visual ga chupinchaniki we used this same goes with value = {length}
              onChange={(e) => {setNumallow((prev)=>!prev)}}
            /> <label className="text-xl ml-2" htmlFor="">Number</label>

            <input type="checkbox" name="" id=""
              checked = {specialallow}
              className='ml-4'
              onChange={()=>{setSpecialallow((prev)=>!prev)}}
            /> <label htmlFor="" className='ml-2 text-xl'>Special</label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App