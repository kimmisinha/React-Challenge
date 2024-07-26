import React, { useState } from 'react';
import confetti from "https://cdn.skypack.dev/canvas-confetti"; 

// Function to play sound
const playSound = (note) => {
  const audio = new Audio("../../public/sounds/audio.mp3");
  
  audio.play().catch((error) => {
    console.error(`Error playing sound for ${note}:`, error);
  });
};

// PianoKey Component
const PianoKey = ({ note, isPressed, onPress }) => {
  // console.log('PianoKey props:', { note, isPressed, onPress });

  return (
    <button 
      className={`piano-key ${isPressed ? 'pressed' : ''}`} 
      onClick={() => {
        console.log(`Key pressed: ${note}`);
        onPress(note);
      }}
    >
      {note} {isPressed && '★'}
    </button>
  );
};


// Piano Component
const Piano = ({ pressedNotes, onPressKey }) => {

  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  // console.log('pressedNotes:', pressedNotes); 

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
    playSound(note);
    confetti();
    setPressedNotes(prevPressedNotes =>
      prevPressedNotes.includes(note)
        ? prevPressedNotes.filter(n => n !== note)
        : [...prevPressedNotes, note]
    );
  };

  return <Piano pressedNotes={pressedNotes} onPressKey={onPressKey} />;
};

export default App;
