import logo from './logo.svg';
import './App.css';
import NavBar from "./Component/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question1 from "./Component/Question1";
import Question2 from "./Component/PianoApp";
import Question3 from "./Component/Question3";
import Question4 from "./Component/Question4";
import Question5 from "./Component/Question5";
import Question6 from "./Component/Question6";
import Question7 from "./Component/Question7";
import Question8 from "./Component/Question8";
import Question9 from "./Component/Question9";
import Question10 from "./Component/Question10";
import Question11 from "./Component/Question11";
import Question12 from "./Component/Question12";
import Question13 from "./Component/Question13";
import Question14 from "./Component/Question14";
import Question15 from "./Component/Question15";
import Question16 from "./Component/Question16";
import Question17 from "./Component/Question17";
import Question18 from "./Component/Question18";
import Question19 from "./Component/Question19";
import Question20 from "./Component/Question20";
import PianoApp from "./Component/PianoApp"; // Import your virtual piano component

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/question1" element={<Question1 />} />
          <Route path="/question2" element={<Question2 />} />
          <Route path="/question3" element={<Question3 />} />
          <Route path="/question4" element={<Question4 />} />
          <Route path="/question5" element={<Question5 />} />
          <Route path="/question6" element={<Question6 />} />
          <Route path="/question7" element={<Question7 />} />
          <Route path="/question8" element={<Question8 />} />
          <Route path="/question9" element={<Question9 />} />
          <Route path="/question10" element={<Question10 />} />
          <Route path="/question11" element={<Question11 />} />
          <Route path="/question12" element={<Question12 />} />
          <Route path="/question13" element={<Question13 />} />
          <Route path="/question14" element={<Question14 />} />
          <Route path="/question15" element={<Question15 />} />
          <Route path="/question16" element={<Question16 />} />
          <Route path="/question17" element={<Question17 />} />
          <Route path="/question18" element={<Question18 />} />
          <Route path="/question19" element={<Question19 />} />
          <Route path="/question20" element={<Question20 />} />
          <Route path="/piano" element={<PianoApp />} /> {/* Add a route for the virtual piano */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
