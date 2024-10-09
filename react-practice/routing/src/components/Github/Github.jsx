// import React, { useEffect ,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data =  useLoaderData() // optimaside if we use loaders , just on hover the info gets fetched , if not used only after you click on link only it will load --- using loaders is good , and react doesnot do any magic to load , so we use useLoaderData() hook
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {console.log(data);
    //     setData(data)})
    // } , [])
  return (
    <>
    <div className='text-center m-5 bg-grey-200 text-white p-4 text-3xl'>Github Followers : {data?.followers}</div>
    <img src={data?.avatar_url} alt="dp" />
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}