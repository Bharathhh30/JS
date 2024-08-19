import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/bharathhh30')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    } ,[])
  return (
    <div className='text-center m-4 bg-gray-300 text-white p-4 text-3xl'>Github Followers : {data.followers}
        <img src={data.avatar_url} alt="dp" className='rounded-full' />
    </div>
  )
}

export default Github