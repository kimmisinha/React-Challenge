import React, { useEffect, useState } from "react";

function Question13() {
  let [Emoji, setEmoji] = useState("🍪");
  let [Clicks, setClicks] = useState(0);
  useEffect(() => {
    setEmoji("🍪");
  }, []);
  function cookiescount() {
    if (Clicks % 2 === 0) {
      setEmoji(Emoji + "🍪");
    }
    if (Clicks >= 10) {
      setEmoji("Victory!");
    }
    setClicks(Clicks + 1);
  }
  return (
    <div>
      <h2>{Emoji}</h2>
      {Clicks}
      <button onClick={cookiescount}>cookiescount</button>
    </div>
  );
}

export default Question13;

/*
Puzzle #13: Cookie Clicker 🍪
Create a React app that allows a user to click a button and see an
 emoji change in response. When the app first loads, the emoji displayed 
 should be a single cookie emoji ('🍪'). When the user clicks the button, the app 
 should increment a counter of clicks and check if the number of clicks is even.
  If it is, the app should add another cookie emoji to the display. For example, if the user clicks the button three times, the display should show '🍪🍪🍪'.
   If the user clicks the button ten or more times, the app should also display t
he text 'Victory!' Use state variables and React's useState hook to keep track of
 the number of clicks and the current emoji display, and update these variables using the 
 setClicks and setEmoji functions when the button is clicked.
 */
