import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Question1 from "./Component/Question1"
function App() {
  return (
    <BrowserRouter>

    <div className="App">
    <Routes>
        <Route path="/question1" element={<Question1 />}>

        </Route>
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
