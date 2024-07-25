import React, { useState } from 'react';
// import audio from "../../public/sounds/audio.mp3"
// const playSound = (audio) => {
//   const audio = new Audio(`${process.env.PUBLIC_URL}/sounds/${note}.mp3`);

//   audio.play().catch((error) => {
//     console.error(`Error playing sound for ${note}:`, error);
//   });
// };


// PianoKey Component
const PianoKey = ({ note, isPressed, onPress }) => (
  <button 
    className={`piano-key ${isPressed ? 'pressed' : ''}`} 
    onClick={() => onPress(note)}
  >
    {note} {isPressed && '★'}
  </button>
);

// Piano Component
const Piano = ({ pressedNotes, onPressKey }) => {
  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  return (
    <div className="piano">
      {notes.map(note => (
        <PianoKey 
          key={note} 
          note={note} 
          isPressed={pressedNotes.includes(note)}
          onPress={onPressKey}
        />
      ))}
    </div>
  );
};

// App Component
const App = () => {
  const [pressedNotes, setPressedNotes] = useState([]);

  const onPressKey = note => {
    // playSound(audio); 
    setPressedNotes(prevPressedNotes =>
      prevPressedNotes.includes(note)
        ? prevPressedNotes.filter(n => n !== note)
        : [...prevPressedNotes, note]
    );
  };

  return <Piano pressedNotes={pressedNotes} onPressKey={onPressKey} />;
};

export default App;


/*
Puzzle #2: Virtual Piano 🎹
Create an interactive virtual piano with seven labeled button 
keys (C, D, E, F, G, A, B). When the user clicks on a button change its
 inner JSX code to have a star symbol beside the letter name. As a bonus challenge,
  change the CSS to make the keys look like a piano.
 You can also try to add sound to the keys.
 */