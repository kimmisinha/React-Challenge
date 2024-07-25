import React from 'react'

function Question5() {
    // TODO: Add state variables for password and confirm password
  // TODO: Add event handlers for updating password and confirm password state

  function checkPasswordsMatch() {
    // TODO: Compare password and confirm password state and return true if they match, false if they don't
  }

  function checkPasswordStrength() {
    // TODO: Use a regular expression to check if password includes at least one special character
    // TODO: Check if password is at least 8 characters long
    // TODO: Return true if password has a special character and is at least 8 characters long, false otherwise
  }

  return (
    <form>
      {/* TODO: Add password input field */}
      {/* TODO: Add confirm password input field */}
      {/* TODO: Add message to display whether passwords match */}
      {/* TODO: Add message to display whether password is strong */}
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