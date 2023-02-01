import React, { useState } from 'react'
import{Navigate, useNavigate} from "react-router-dom"
import User from '../../Data/UserData'



const Login = (props) => {
    const [acount, setAcount] = useState({UserName:'',Password:''})
    const [a, seta] = useState()
 const Navigate=useNavigate()
 
   
  const  userNameHandler=(e)=>{
    setAcount({...acount,UserName:e.target.value})
  }
  const  passwordHandler=(e)=>{
    setAcount({...acount,Password:e.target.value})
  }

const loginHandler=(e)=>{
  e.preventDefault();
props.f(true)
Navigate('/profile')
 if (User.some(item=>item.Username===acount.UserName && item.Password===acount.Password))
{
  props.f(true)
Navigate('/profile')
}
else{
  props.f(false)
  alert ("نام کاربری یا پسورد صحیح نیست")
  Navigate('/Login')
} 
   }
console.log(acount)

  return (
    <div>
        <input type="text" value={acount.UserName} onChange={userNameHandler}/>
        <input type="text" value={acount.Password} onChange={passwordHandler}/>
        <button onClick={loginHandler}>Login</button>

    </div>

  )
}

export default Login