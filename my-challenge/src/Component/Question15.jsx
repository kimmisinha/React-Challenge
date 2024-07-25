import React, { useEffect, useState } from 'react'

function Question15() {
  const[red,seRead]=useState(0);
  const[green,setGreen]=useState(0);
  const[blue,setBlue]=useState(0);

  useEffect(()=>{
    const color=`rgb(${red},${green},${blue})`;
    document.body.style.background=color;

  },[red, green, blue]);

  const getOppositeColor=()=>{
    const oppositeRed=255 - red;
    const oppositeGreen = 255 - green;
    const oppositeBlue = 255 - blue;
    return `rgb(${oppositeRed}, ${oppositeGreen}, ${oppositeBlue})`;

  }
  return (
    <div style={{ color: getOppositeColor() }}>
      <h1>Color Picker</h1>
      <div>
        <label>
          Red: 
          <input 
            type="range" 
            min="10" 
            max="255" 
            value={red} 
            onChange={(e) => seRead(Number(e.target.value))} 
          />
        </label>
      </div>
      <div>
        <label>
          Green: 
          <input 
            type="range" 
            min="0" 
            max="255" 
            value={green} 
            onChange={(e) => setGreen(Number(e.target.value))} 
          />
        </label>
      </div>
      <div>
        <label>
          Blue: 
          <input 
            type="range" 
            min="0" 
            max="255" 
            value={blue} 
            onChange={(e) => setBlue(Number(e.target.value))} 
          />
        </label>
      </div>
    </div>
  );
}


export default Question15
/*
Puzzle #15: Color Background 🎨
Create a color picker app that allows the user to select a color by adjusting the 
red, green, and blue values. When the user changes a value, the background color of
 the body element should update to reflect the new color. Display the opposite colo
 r as the text color for the app title

 */
