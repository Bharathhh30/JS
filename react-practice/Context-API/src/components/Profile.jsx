import React ,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    const {age} = useContext(UserContext)

    if (!user) {
        return <div>Please login</div>
    }return <div>welcome {user.username } age is {age.userage}</div>
}

export default Profile