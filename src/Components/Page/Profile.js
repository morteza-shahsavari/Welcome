import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Profile = (props) => {
console.log(props.auth)
return(
  props.auth ?   
    <div>Profile</div>
   :<Navigate to="/login"/>
)

}

export default Profile