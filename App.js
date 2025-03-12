import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav style={{ padding: "10px", 
      background: "#000", 
      color: "#FFF", 
      display: "flex", 
      justifyContent: "center" }}>
      <Link to="/" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>About</Link>
      <Link to="/contact" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Contact</Link>
    </nav>
  );
};

const Home = () => {
  return <h1>Welcome to Sushant's assignment for Tarun Sir!</h1>;
};

const About = () => {
  return <h1>Intern at SoftProdigy!</h1>;
};

const Contact = () => {
  return <h2>email: <em>sushant_chaturvedi@softprodigy.com</em></h2>;
};

function App() {
  return (
    <Router>
      <Navbar />
      <div className="assignment">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
