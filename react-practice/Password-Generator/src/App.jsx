import { useCallback, useState , useEffect ,useRef} from 'react'

function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState('')

  // useRef hook
  const passwordRef = useRef(null)

  

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed){
      str+="0123456789"
    }

    if (charAllowed){
      str+="!@#$%^&*-_+=[]{}~`"
    }

    for(let i=1;i< length;i++){
      let char = Math.floor(Math.random() * str.length)
      pass+=str.charAt(char)
    }

    setPassword(pass)  //generated password is set and used in to render on the ui

  } , [length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()} , [length,numberAllowed,charAllowed,passwordGenerator])   // function and dependencies

  return (
    <>
      <div className='w-full  flex justify-center items-center '>
        <div className='bg-slate-800   py-10 mt-24 rounded-lg px-9 shadow-xl'>
          <h1 className='text-4xl text-blue-300 text-center '>Password Generator</h1>
          <div className='flex justify-center '>
            <div>
              <input type="text" value={password} placeholder='password' className='rounded-lg mt-4 py-2 px-6 outline-none ' readOnly ref={passwordRef}  />
            </div>
            <div>
              <button className='bg-blue-300 rounded-lg px-2 py-2 mt-4 ml-1 shrink-0 ' onClick={copyPasswordToClip}>Copy</button>
            </div>
          </div>

          <div className='flex-1 flex justify-evenly gap-x-2 text-white mt-6'>
            <div>
              <input type="range" min={8} max={50} className='cursor-pointer' onChange={(e)=>{setLength(Number(e.target.value))}} />
              <label > Length :{length}</label>
            </div>

            <div className='gap-x-1'>
              <input type="checkbox" name="numberallowed or no" id="hh" onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
              <label >Numbers</label>
            </div>

            <div className='gap-x-1'>
              <input type="checkbox" name="charallowed or no" id="cc" onChange={()=>setCharAllowed((prev)=>!prev)} />
              <label >Char</label>
            </div>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default App
