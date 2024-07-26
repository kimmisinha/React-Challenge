import React, { useState } from "react";
import QRCode from "react-qr-code";

function Question17() {
  const [website, setWebsite] = useState("");
  const [savewebsite, setsavewebsite] = useState("");
  function handlechange(e) {
    setWebsite(e.target.value); 
  }
  function handlesumbit(e) {
    e.preventDefault(); 
    setsavewebsite(website); 
  }

  return (
    <div>
      {savewebsite}
      <form onSubmit={handlesumbit}>
        <input
          type="text"
          name="website"
          onChange={handlechange}
          placeholder="Type website name"
        ></input>
        <button type="submit">Submit</button>
      </form>
      <br />
      {savewebsite && (
        <QRCode size={100} bgColor="white" fgColor="black" value={savewebsite} />
      )}
    </div>
  );
}

export default Question17;
/*
Puzzle #17: QR Code 🧑‍💻
Create a React app that lets the user input a website name and recieve a 
generated QR code when they click 'submit'

*/
