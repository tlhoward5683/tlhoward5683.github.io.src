import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaRegListAlt, FaTools, FaBriefcase, FaGraduationCap, FaSplotch, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
       <nav className="navbar navbar-expand-lg navbar-mainbg">
            <NavLink className="navbar-brand navbar-logo" to="/" exact>
                Tiffany L Howard
            </NavLink>

            <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>

            <div 
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">  
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/" exact>
                            <FaRegListAlt className="nav-icon" /> Summary 
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/skills" exact>
                            <FaTools className="nav-icon" /> Skills 
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/experience" exact>
                            <FaBriefcase className="nav-icon" /> Experience 
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/education" exact>
                            <FaGraduationCap className="nav-icon" /> Education 
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/interests" exact>
                            <FaSplotch className="nav-icon" /> Interests 
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div 
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="mailto:TiffanyL.Howard@gmail.com'">
                            <FaEnvelope className="nav-icon" />
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="http://linkedin.com/in/tiffanyhoward">
                            <FaLinkedin className="nav-icon" />
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="http://github.com/tlhoward5683">
                            <FaGithub className="nav-icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;