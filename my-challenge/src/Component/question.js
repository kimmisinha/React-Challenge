import React,{useState} from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'


const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const PianoKey = ({ note, isPressed, onPress }) => (

  {/*
  TODO: CREATE VISUALS FOR THE KEYS AS BUTTONS
  TODO: GIVE PRESSED BUTTONS THE pressed CLASSNAME
  TODO: ADD FUNCTIONALITY TO BUTTONS & RENDER THEIR NOTE NAME
  */}
);

const Piano = ({ pressedNotes, onPressKey }) => (
  <div>
    keys go here
  {/*TODO: RENDER ALL KEYS HERE*/}
  </div>
);

const App = () => {
  const [pressedNotes, setPressedNotes] = useState([]);

  const onPressKey = note => {
    setPressedNotes(prevPressedNotes =>
      prevPressedNotes.includes(note)
        ? prevPressedNotes.filter(n => n !== note)
        : [...prevPressedNotes, note]
    );
  };

  return <Piano pressedNotes={pressedNotes} onPressKey={onPressKey} />;
};

ReactDOM.render(<App />,
document.getElementById("root"))