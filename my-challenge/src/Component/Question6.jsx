import React, { useState } from "react";

function Question6() {
  // TODO: initialize state variables for password and password length
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(2);

  function generatePassword(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    setPassword(result);
  }
// console.log(password)
  function handleGeneratePassword(){
    generatePassword(passwordLength)
  }

  function handlePasswordLengthChange(e){

    setPasswordLength(Number(e.target.value))
  }
  return (
    <form>
      {/*TODO: add interaction to the button*/}
      <label>
        Password Length:
        <input type="number" value={passwordLength} onChange={handlePasswordLengthChange} min="1" />
      </label>
      <button type="button" onClick={handleGeneratePassword}>
        Generate Password
      </button>
      <div>{password}</div>
    </form>
  );
}

export default Question6;

/*
Puzzle #6: Password Maker 🔒
Create a React application that generates a strong password and give the
user the ability to chose the password's length.
*/
