import React, { useState } from 'react';

const Form = (props) => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState ("");
  const [ email, setEmail ] = useState ("");
  const [ password, setPassWord ] = useState ("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  
  //**From Check Solution "Not my Code"**
  const formDataDivStyle = {
    textAlign: "left", 
    width: "450px", 
    margin: "auto",
  }

  const inputDataDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    margin: "5px",
  }

  return (
    <div>
      <form style={{ marginTop: "30px" }}>
        <div style={ inputDataDivStyle }>
          <label htmlFor='firstName'> First Name </label>
          <input type="text" name="firstName" onChange = { (e) => setFirstName(e.target.value) }>
          </input>
        </div>
        <div  style={ inputDataDivStyle }>
          <label htmlFor='lastName'> Last Name </label>
          <input type="text" name="lastName" onChange = { (e) => setLastName(e.target.value) }>
          </input>
        </div>
        <div  style={ inputDataDivStyle }>
          <label htmlFor='email'> Email </label>
          <input type="text" name="email" onChange = { (e) => setEmail(e.target.value) }>
          </input>
        </div>
        <div  style={ inputDataDivStyle }>
          <label htmlFor='passWord'> Password </label>
          <input type="text" name="passWord" onChange = { (e) => setPassWord(e.target.value) }>
          </input>
        </div>
        <div  style={ inputDataDivStyle }>
          <label htmlFor='confirmPassword'> Confirm Password</label>
          <input type="text" name="confirmPassword" onChange = { (e) => setConfirmPassword(e.target.value) }>
          </input>
        </div>
      </form>

      <div style={ formDataDivStyle }>
        <h3 style={{ textAlign: 'center '}}>Your Form Data</h3>
        <p>
          <label> Fist Name: </label>{ firstName }
        </p>
        <p>
          <label> Last Name: </label>{ lastName }
        </p>
        <p>
          <label> Email: </label>{ email }
        </p>
        <p>
          <label> Password: </label>{ password }
        </p>
        <p>
          <label> Confirmed Password: </label>{ confirmPassword }
        </p>
      </div>
    </div>
  )
}

export default Form;