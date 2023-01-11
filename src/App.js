import { React } from "react";
import './App.css';
import Home from './Components/Home'
import Appointment from "./Components/Appointment.js";
import Gallery from './Components/gallery/Gallery';
import Contact from "./Components/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar2 from "./Components/Navbar2";
import Services from './Components/Services';

function App() {

  return (
    <Router>

    <div>
      <Navbar2/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/appointment" element={<Appointment />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/contact" element={<Contact />} />
</Routes>
    </div>
    </Router>
  )
}

export default App