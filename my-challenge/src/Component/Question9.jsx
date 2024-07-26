import React, { useState } from "react";

function Question9() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translateToPigLatin = (text) => {
    return text
      .split(" ")
      .map((word) => {
        if (word.match(/^[aeiouAEIOU]/)) {
          return word + "way"; // Words starting with a vowel
        } else {
          return word.substring(1) + word[0] + "ay";
          // Words starting with a consonant
        }
      })
      .join(" ");
  };
  const handleTranslate = () => {
    const pigLatinText = translateToPigLatin(text);
    setTranslatedText(pigLatinText);
    alert(pigLatinText);
  };
  return (
    <div>
      <h1>Pig Latin Converter</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      ></input>
      <button onClick={handleTranslate}></button>
      <p>Translated Text: {translatedText}</p>
    </div>
  );
}

export default Question9;

/*
Puzzle #9: Pig Latin 🐖
Create an app that translates English text into Pig Latin and displays
 the result in a pop-up window.
 */
