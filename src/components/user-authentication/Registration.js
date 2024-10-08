//Q)  know about es6 and es7 features of js(link: https://www.programiz.com/javascript/ES6 )

import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Registration() {
    const navigate=useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [username,setUsername] = useState('')
    const [role,setRole]=useState('user')
    const [formErrors, setFormErrors] = useState({})
    const [serverErrors, setServerErrors] = useState('') 

    //using es7-async await
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const FormData={
            username,
            email,
            password,
            role 
        }
        try{
        const response= await axios.post('http://localhost:3033/api/users/register',FormData)
        
          console.log(response)

            alert('successfully registered in')
            setServerErrors("")
          setEmail('')
          setPassword("")
          setUsername("")
          navigate("/login")
          //  props.loginSuccess() //
        }catch(err){
            console.log(err)
            setServerErrors(err.response.data.errors)
        }
    }

  return (
    <div className="col-md-6 offset-md-3 " style={{marginTop: '100px'}}>
        
        <h4 className="text-center">Register Here</h4>
        <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label 
                        className="form-label"
                        htmlFor="username"
                    >User name</label>
                    <input 
                        type="text" 
                        value={username} 
                         onChange={(e)=>{setUsername(e.target.value)}} 
                        name="username" 
                        className="form-control"
                        id="username"
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form-label"
                        htmlFor="email"    
                    >Email</label>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}} 
                        name="email" 
                        id="email"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label
                        className="form-label"
                        htmlFor="password"
                    >Password</label>
                    <input 
                        type="text" 
                         value={password} 
                        onChange={(e)=>{setPassword(e.target.value)}} 
                        name="password" 
                        id="password"
                        className="form-control"
                    />
                </div>
                <br/>

                <input 
                     type="radio" 
                     checked={role==="user"}  
                     style={{accentColor:"blue"}} 
                    name="role" value="user" 
                    onChange={(e)=>{setRole(e.target.value)}} 
            />I am a client
        
                <input 
                type="radio" style={{accentColor:"blue",marginLeft:"30px"}} 
                name="role" value="proprietor" 
                onChange={(e)=>{setRole(e.target.value)}} 
                />I want to work and earn
               
                <br/>
                {
                serverErrors.length > 0 &&  (
                    <div style={{color:"red"}}>
                        These errors prohibited the form from being saved: 
                        <ul>
                            { serverErrors.map((ele, i) => {
                                return <li key={i}> { ele.msg }</li>
                            })}
                        </ul>
                    </div>
                )
            }
                <br/>

                <input type="submit" className="btn btn-primary" />
            </form>
            
    </div>
  )
}

export default Registration