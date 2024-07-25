import React, { useState } from 'react';
function Question14() {
  const [text, setText] = useState('');
  const [conversionType, setConversionType] = useState('uppercase');
  const [convertedText, setConvertedText] = useState('');
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleConversionChange = (e) => {
    setConversionType(e.target.value);
  };
  const convertText = () => {
    let result;
    if (conversionType === 'uppercase') {
      result = text.toUpperCase();
    } else if (conversionType === 'lowercase') {
      result = text.toLowerCase();
    } else if (conversionType === 'capitalization') {
      result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    } else {
      result = text;
    }
    setConvertedText(result);
  };
  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={handleTextChange}
        placeholder='Enter text'
      />
      <select value={conversionType} onChange={handleConversionChange}>
        <option value="uppercase">Uppercase</option>
        <option value="lowercase">Lowercase</option>
        <option value="capitalization">Capitalization</option>
      </select>
      <button onClick={convertText}>Convert</button>
      <div>
        <h3>Converted Text:</h3>
        <p>{convertedText}</p>
      </div>
    </div>
  );
}
export default Question14;
/*
Puzzle #14: Text Case Change :abc:
Create a text converter that allows the user
to input text, select a conversion type (uppercase,
 lowercase, or capitalization), and convert the text to
 the selected conversion type.
 */








