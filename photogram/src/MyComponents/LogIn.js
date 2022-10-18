import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';



export const LogIn = () => {
    let style= {
        width: '100%',
        height: '100vh',
        // backgroundColor: '#e7decc',
        position: 'absolute',
        zindex: '500',
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
    
    const [loginusername, setloginusername] = useState('')
    const [loginPassword, setloginPassword] = useState('')



    const  handleLogin= ()=>{

        let url= 'http://127.0.0.1:8000/check/login/';


        let fd= new FormData();
        fd.append('username', loginusername);
        fd.append('password', loginPassword);

        let config= {headers: {'Content-Type': 'multipart/form-data'}}

        axios.post(url, fd, config).then(function(res){
                let loginStatus= res.data.status;


                if(loginStatus == 202){
                    alert('Successfully Logged in User');
                    window.location = '/';
                }
                else{
                    alert('Log In Failed');
                }

        }).catch(err => console.log(err));


    }


    const onloginSubmit = (e) => {
        e.preventDefault();
        if(!loginusername || !loginPassword){
            alert('Please enter full details');
        }
        else{
            handleLogin();
            setloginPassword('');
            setloginusername('');
        }
            
    }

    return (
        <div className='p-5' style= {style} >

<div className='p-4' style= {innerStyle}>
<h4 className='pi-1 float-right' style= {cancelStyle}><Link style= {cancelStyle}  to= '/'>X</Link></h4>
        <form  method = 'post' enctype= 'multipart/form-data' onSubmit={onloginSubmit} >

  <div className="form-group" >
    <label htmlFor="username">Username</label>
    <input type="text"  style= {formFieldStyle} className="form-control" id="username" aria-describedby="username" placeholder="Enter your username" value= {loginusername}  onChange={(e)=>{
      setloginusername(e.target.value);
    }}/>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password"  style= {formFieldStyle} className="form-control" id="password" placeholder="Enter password" value= {loginPassword}  onChange={(e)=>{
      setloginPassword(e.target.value);
    }}/>
  </div>
  
  <button type="submit"  style= {formFieldStyle} className=" my-2 btn btn-primary">Submit</button>
</form>
</div>

</div>
    )
}
