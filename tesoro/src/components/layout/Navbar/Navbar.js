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
                                    <Link to='/personas' className="nav-link"><span className="black">Personas</span></Link>
                                </li>
                                <li className="nav-item ms-0 ms-md-3">
                                    <Link to='/negocios' className="nav-link"><span className="black">Negocios</span></Link>
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
