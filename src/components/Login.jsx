import axios from 'axios'
import React, { useState } from 'react'


const Login = () => {
    const [data,changeData] =useState(
        {
            "username" :"",
            "password" :""
        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("success")
                    }
                else{
                    alert("failed")
                }
            }
        ).catch().finally()
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-labe">User Name</label>
                            <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Sign Up</button>
                        </div>
                    </div>
                </div>
                <a class="navbar-brand" href="/">New user click here</a>
            </div>
        </div>
    </div>
  )
}

export default Login