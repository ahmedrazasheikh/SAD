import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import axios from 'axios';
const Signup = () => {
  const [firstName, setfirstName] = useState()
  const [lastName, setlastName] = useState()
  const [email, setEmail] = useState()
  const [result, setResult] = useState("")
  const [password, setepassword] = useState()

  let baseUrl = "";
  if (window.location.href.split(":")[0] === "http") {
    baseUrl = "http://localhost:8000/api/v1"
  }

  const signup = async () => {
    try {
     let data  =    await axios.post(`${baseUrl}/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      });
console.log(data);
    } catch (error) {
      console.log("err>>> ", error)
    }
  }

  return (
    <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }} >
      <h1 className="text-3xl font-bold underline" >Signup Form!!</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>First Name </Form.Label>
          <Form.Control
            onChange={(e) => {
              setfirstName(e.target.value)
            }}
            style={{ "maxWidth": "900px" }} type="text" placeholder="Enter  Your First Name " />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText2">
          <Form.Label>Last Name </Form.Label>
          <Form.Control
            onChange={(e) => {
              setlastName(e.target.value)
            }}
            type="text" style={{ "maxWidth": "600px" }} placeholder="Enter  Your Last Name" />


        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email" style={{ "maxWidth": "600px" }} placeholder="Enter  Your Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => {
              setepassword(e.target.value)
            }}

            type="password" style={{ "maxWidth": "600px" }} placeholder="Enter  Your Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={() => {
          signup()
        }}>
          Submit
        </Button>
      </Form>
      <p>{result}</p>
    </div>
  )
}

export default Signup
