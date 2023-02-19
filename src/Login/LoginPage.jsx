import React from "react";
import { useEffect, useState } from "react";


function LoginPage(props) {
const [isSubmitting, setIsSubmitting] = useState("");
const [isSubmitted, setIsSubmitted] = useState("");
const [formValue, setFromValue] = useState('');
const []
 


function handleSubmit(event) {
event.preventDefault();
setIsSubmitting("")
console.log("submit")
}

function handleChange(event) {
  const { name, value} = event.target;
  setFromValue({ ...formValue, [name]: value});
}

useEffect(() => {
   document.title = `MultiForm  ${formValue}`;
  
},[setFromValue]);


console.log(isSubmitted)
  return (
    
 <>
  <h1>submit Successfully{setIsSubmitting}</h1>
    <div className="login-info-container">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="username" name="uname"  placeholder="username"  value={formValue.username}  required  onChange={e => setFromValue(e.target.value)}/>
      
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="text" name="pass"  placeholder="Password" value={formValue.password} required  onChange={e  => setFromValue(e.target.value)}/>
        
      </div>
      <div className="button-container">
        
      
        <button type="submit"  onClick={() => setIsSubmitting(formValue)} disabled={isSubmitting}>
          {isSubmitting ? 'submit successfully...' : 'submit'}
        </button>
        <h1>Don't Have Account Sign Up </h1>
     
      </div>
    </form>
   <a href="/form"> <button>Sign Up</button></a>
    <p>{formValue}</p>
  </div></>
);
  }

export default LoginPage;