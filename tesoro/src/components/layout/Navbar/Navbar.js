import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    
    
    return(
        <div className="nav-border-bottom">
            <div class="container">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <Link to="/">
                            <img src="/img/tesoro_logo_mixto.png" className="logo" alt=""/>
                        </Link>
                        {/* Main Nav */}
                        <div class="collapse navbar-collapse justify-content-center mt-3" id="main-nav">
                            <ul className="navbar-nav nav-black-text">
                                <li className="nav-item ms-0 ms-md-3">
                                    <a href="#how-it-works" className="nav-link"><span className="black">Cómo Funciona</span></a>
                                </li>
                                <li className="nav-item ms-0 ms-md-3">
                                    <a href="#faq" className="nav-link"><span className="black">FAQ</span></a>
                                </li>
                                <li className="nav-item ms-0 ms-md-3">
                                    <a href="#meet-the-team" className="nav-link"><span className="black">Nosotros</span></a>
                                </li>
                                <li className="nav-item ms-0 ms-md-3">
                                    <a href="#blog" className="nav-link"><span className="black">Blog</span></a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className="btn-primary-nav">Solicitar</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}



export default Navbar;
