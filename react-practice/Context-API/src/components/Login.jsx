import React , {useState , useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [userage, setUserage] = useState("")

    const {setUser} = useContext(UserContext)
    const {setAge} = useContext(UserContext)

    const handleSubmit = (e) =>{
        
        e.preventDefault()  //just to avoid anonymous submission to a random link , as when you click on submit it gets submmitedd on a random link
        setUser({username,password})
        setAge({userage})
    }

  return (
    <div className='flex justify-center p-5'>
    <div className='flex justify-center flex-col h-full'>
        <h2>Login</h2>
        <input type="text" placeholder='UserName' value={username} onChange={(e) => setUsername(e.target.value)} className='p-2 border border-slate-500 mb-2  w-64' /> <br />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='p-2 border border-slate-500 w-64 mb-2' /> <br />
        <input type="text" placeholder='Age' value={userage} onChange={(e) => setUserage(e.target.value)} className='p-2 border border-slate-500 w-64 mb-2' /> <br />
        <button onClick={handleSubmit} className='bg-cyan-200 rounded-md w-32 p-2 active:bg-pink-200 active:transition hover:bg-pink-200 '>Submit</button>
    </div></div>
  )
}

export default Login