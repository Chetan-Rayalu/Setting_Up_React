import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Import the CSS file

function Home() {
  return (
    <div className="container">
      <h1 className="hover-glow name">Thirumalasetty Chetan Rayalu</h1>
      <p className="hover-glow contact">Contact: chetanrayalu.thirumalasetty.s86@kalvium.community</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
