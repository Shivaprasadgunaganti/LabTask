import React, { useState } from 'react'
import "./Signup.css";
export const Signup = () => {
    const [name,setName]=useState("")
    const [mail,setMail]=useState("")
     const [password,setPassword]=useState("")

    const nameHandler=(k)=>{
        setName(k.target.value)
    }
    const mailHandler=(k)=>{
        setMail(k.target.value)
    }
     const passwordHandler=(k)=>{
        setPassword(k.target.value)
    }
  
const formHandler=(e)=>{
    e.preventDefault()
    // console.log(name,mail,password)
    if(!name || !mail || !password){
        alert("Please fill all the fields")
        }
    setName("")
    setMail("")
    setPassword("")
      
}

  return (
    <div>
         <div className='signup-main'>
            <form onSubmit={formHandler} className='form-main'>
                <label>userName :</label>
                <input type='text' placeholder='Enter User name' onChange={nameHandler} value={name}/>
                <br />
                <label>Email :</label>
                <input type="email" placeholder='Enter Email' onChange={mailHandler} value={mail}/>
                <br />
                <label >Password :</label>
                <input type="text" placeholder='Enter Password' onChange={passwordHandler} value={password}/>
                <br />
                <button type='submit'>Submit</button>
            </form>
         </div>
    </div>
  )
}
