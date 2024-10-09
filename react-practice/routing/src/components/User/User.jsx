import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div>User :{userid}</div>
  )
}

export default User

// routing nunchi info teskovali ante useParams() hook ni use cheyali
//  is like github.com/bharathhh30