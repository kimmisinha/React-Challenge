import React, { useState } from 'react'

function Question5() {
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState('')

    const isPasswordStrong=(pwd)=>{
      const hasSpecialChar = /[!@#\$%\^\&*\)\(+=._-]/.test(pwd);
      const hasMinLength=pwd.length>=9;
       return hasMinLength && hasSpecialChar
    }
 
    const handleSubmit=(e)=>{
      e.preventDefault()
      if(password!==confirmPassword){
        setMessage("Passwords do not match")
      }
      else if (!isPasswordStrong(password)){
        setMessage('Password must be at least 8 characters long and include at least one special character.');
      }
      else{
        setMessage('Success! Your password is secure.')
      }
    }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Password:</label>
        <input type='password' value={password} 
                  placeholder="Enter password"

        onChange={(e)=>setPassword(e.target.value) }></input>
      </div>
      <div>
      <label>Confirm Password:</label>
    <input type='password' value={confirmPassword}
    onChange={(e)=>setConfirmPassword(e.target.value)}
    placeholder="Confirm password"

    />
    
      </div>
      <div>
        <button type='submit'>submit</button>
        <p>{message}</p>
      </div>
    </form>
  );
}

export default Question5

/*
Puzzle #5: Secure Password Check 🔑
Make a React application that checks if a password is secure.
 To be considered secure it must include one special character(!, @, #, etc...) 
and have a minimum length of 8 characters. Make the user enter the password 
twice and verify that passwords match. If passwords match and are secure provide a success message, 
otherwise display instructions for creating a secure password.
*/