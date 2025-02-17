import React, { useState } from "react";
import "../Css/Question12.css";

function Question12() {
  const [pixels, setPixels] = useState(Array(256).fill());
  console.log(pixels);

  const handleClick = (index) => {
    console.log(index)
    setPixels((prevPixels) => {
      console.log("prevPixels",prevPixels)
      const copyPixels = [...prevPixels];
      console.log("copyPixels",copyPixels)
      copyPixels[index] = copyPixels[index] == "black" ? null : "black";
      return copyPixels;
    });
  };
  return (
    <div className="pixel-grid">
      {pixels.map((color, index) => (
        <div
          key={index}
          className="pixel"
          style={{ backgroundColor: color || "white" }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
}

export default Question12;

/*
Puzzle #12: Pixel Artist 🖼️
Create a pixel art app that allows users to create 
colorful designs by clicking on a grid of pixels.
 The app should have a grid of 256 pixels arranged 
 in a 16 x 16 grid. Each pixel should 
be initially white, but when clicked, it should change
 color based on the number of times it has been clicked. 
 If a pixel is clicked once, it should turn black. If
  it is clicked again, it should turn white again. The 
  app should allow users to keep clicking on the pixels 
  to create a variety of patterns and designs. Use React
   to build the app and manage state.
   */
