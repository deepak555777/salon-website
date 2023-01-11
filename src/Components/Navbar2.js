import React from 'react'
import './navbar.css'
import barber from './gallery/images/barber.png'
import { Link } from 'react-router-dom'

function Navbar2() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
    <div className="container-fluid">
        <Link to="/" className="navbar-brand"><img src={barber} className="iconImg" alt="icon"></img> Salon Fareed</Link>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
                <Link to="/services" className="nav-item nav-link">Services</Link>
                <Link to="contact" className="nav-item nav-link ">Contact</Link>
            </div>
        </div>
    </div>
</nav>
    </div>
  )
}

export default Navbar2