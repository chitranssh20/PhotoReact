import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

export const SignUp = () => {
    let style= {
        width: '100%',
        height: '100vh',
        // backgroundColor: '#e7decc',
        position: 'absolute',
        zindex: '5',
        top: '0',
        color: 'black'

        
    }
    let innerStyle= {
        backgroundColor: '#f8eeec',
        transform: 'translate(-50%,-50%)',
        top: '50%',
        left: '50%',
        position: 'absolute',
        width: '50%'
    }
    let formFieldStyle= {
        borderRadius: '0%'
    }
    let cancelStyle= {
        textAlign: 'right',
        textDecoration: 'none',
        color: 'black'
    }

//Signing Up User

const [signusername, setsignusername] = useState('')
const [signpass, setsignpass] = useState('')
const [email, setemail] = useState('')
const [ConfirmPass, setConfirmPass] = useState('')




const getOTP = ()=>{
  let url = 'http://127.0.0.1:8000/check.getotp/'
}

const handleSignup = () =>{

  let url= 'http://127.0.0.1:8000/check/signup/'
 let fd= new FormData();
 fd.append('username', signusername);
 fd.append('email', email);
 fd.append('password', signpass);
  // console.log(fd)
  let config= {headers: {'Content-Type': 'multipart/form-data'}}



  axios.post(url, fd, config).then(function(res){

   let status= res.data.status;
   if(status===208){
    
    // console.log("ALready registered");
    if((window.confirm('Are you trying to log In?'))){
      window.location= '/login'
    }
   }
   else if(status===201){
    alert('New User Created')
   }
  }).catch(err=>console.log(err))
}

const submitSign = (event) =>{
  event.preventDefault();
  if(signpass !== ConfirmPass){
    alert('Passwords do not match');

  }
  else{
    handleSignup();
    setsignusername('');
    setConfirmPass('');
    setsignpass('');
    setemail('');
    // alert('Password Matched');
 
  }
}





  return (
    <>


<div className='p-5' style= {style} >

<div className='p-4' style= {innerStyle}>
<h4 className='pi-1 float-right' style= {cancelStyle}><Link style= {cancelStyle}  to= '/'>X</Link></h4>
        <form  method= 'post' onSubmit={submitSign} >

  <div className="form-group" >
    <label htmlFor="username">Username</label>
    <input type="text"  style= {formFieldStyle} className="form-control" id="username" aria-describedby="username" placeholder="Enter your username" value= {signusername}  onChange={(e)=>{
      setsignusername(e.target.value);
    }}  />
  </div>
  <div className="form-group" >
    <label htmlFor="email">Email</label>
    <input type="email"  style= {formFieldStyle} className="form-control" id="email" aria-describedby="email" placeholder="Enter your email" value= {email}  onChange={(e)=>{
      setemail(e.target.value);
    }}  />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password"  style= {formFieldStyle} className="form-control" id="password" placeholder="Enter password" 
  
  value= {signpass}
  onChange={(e)=>{
      setsignpass(e.target.value);
    }}
    />
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">Password</label>
    <input type="password" value= {ConfirmPass} style= {formFieldStyle} className="form-control" id="cpassword" placeholder="Re-enter password" 
    onChange={(e)=>{
      setConfirmPass(e.target.value);
    }}
    
    />
  </div>
 
  <button type="submit"  style= {formFieldStyle} className=" my-2 btn btn-primary">Sign Up</button>
</form>
</div>

</div>
    
    </>
  )
}
