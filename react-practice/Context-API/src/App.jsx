import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/UserContext'

function App() {
  return (
    <UserContextProvider>
      <h1 className='text-blue-400 text-xl font-bold text-center pt-3'>Hello this project is about learning the context api concept of react</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App


// get the data and send to context , whenever whereeveer u need data get that using const{user} = useContext (contextname)