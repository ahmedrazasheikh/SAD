import { useSelector, useDispatch } from 'react-redux'
import { Loginscheck , Logout } from '../Redux/loginSlice'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import axios from "axios"
import { useState } from 'react';

let baseUrl = "";
if (window.location.href.split(":")[0] === "http") {
  baseUrl = "http://localhost:8000/api/v1"
}else{
  baseUrl= "/api/v1"
}
const Login = () => {
  const dispatch = useDispatch()
  const LoginBoolean = useSelector((state) => state.boolean.value)
  console.log(LoginBoolean)
  // dispatch(inputValue(input))

  const[email,setEmail] = useState()
  const[password,setPassword] = useState()
  const [result, setResult] = useState("");
const logindata =  async ()=>{
  try {
    dispatch(Loginscheck())
    let response = await axios.post(`${baseUrl}/login`, {
        email: email,
        password: password
    }, {
        withCredentials: true
    })
    console.log("login successful");
    setResult("login successful")
    
  } catch (e) {
    console.log("e: ", e);
  }
  
  
  
}

const logoutHandler = async () => {
  
  try {
    dispatch(Logout())
    let response = await axios.post(`${baseUrl}/logout`,
    {},
    {
      withCredentials: true
    })
    console.log("response: ", response);
    
  
  } catch (error) {
    console.log("axios error: ", error);
  }

}


  return (
    <div  style={{"display" : "flex" , "flexDirection" : "column" , "alignItems" : "center"}} >
        <h1   className='text-3xl font-bold underline' >    Login Form!!</h1>
        {/* <a href="" >Ahemd Raza </a> */}
      <button  onClick={logoutHandler} style={{"position" :"absolute" , "right" : "0px"}} >Logout</button>
       <Form>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control   onChange={(e)=>{
setEmail(e.target.value)
        }}    style={{"maxWidth"  : "900px"}}  type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"   
        onChange={(e)=>{
          setPassword(e.target.value)
                  }} 
        style={{"maxWidth"  : "600px"}} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  onClick={()=>{
        logindata()
      }}  variant="primary">
        Submit
      </Button>
    </Form>
    <p>{result}</p>



    {LoginBoolean ?  <h1> Login </h1>: <h1> Logout</h1> }
    </div>
  )
}

export default Login
