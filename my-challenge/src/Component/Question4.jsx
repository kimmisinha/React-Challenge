import React from "react";
import '../Css/Question4.css';  

function Question4() {
  const [naughtyKids, setNaughtyKids] = React.useState([]);
  const [niceKids, setNiceKids] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  function handleNaughty() {
    setNaughtyKids([...naughtyKids, inputValue]);
    setInputValue("");
  }

  function handleNice() {
    setNiceKids([...niceKids, inputValue]);
    setInputValue("");
  }

  return (
    <div className="container">
      <h1 className="header">Santa's Naughty and Nice List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input"
      />
      <div>
        <button onClick={handleNaughty} className={`button naughtyButton`}>
          Add to Naughty List
        </button>
        <button onClick={handleNice} className={`button niceButton`}>
          Add to Nice List
        </button>
      </div>
      <h2>Naughty List</h2>
      <ul className="list">
        {naughtyKids.map((ele, index) => (
          <li key={index} className="listItem">{ele}</li>
        ))}
      </ul>
      <h2>Nice List</h2>
      <ul className="list">
        {niceKids.map((ele, index) => (
          <li key={index} className="listItem">{ele}</li>
        ))}
      </ul>
    </div>
  );
}

export default Question4;
