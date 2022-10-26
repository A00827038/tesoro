import React from 'react'
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    
    
    return(
        <div className="footer">
            <div className="container-fluid custom-container footer-padding">
                {/* Logo */}
                <div>
                    <h2>Tesoro</h2>
                </div>

                <div className="row mt-5">
                    {/* Contact Information */}
                    <div className="col-7 col-md-3">
                        <h4>Contacto</h4>
                        <p>Email: fdoddolilankenau@gmail.com</p>
                        <p>Teléfono: +52 81154495</p>
                        <div>
                            <a target="_blank" href="" className="footer-link"><i className="bi bi-instagram"></i></a>
                            <a target="_blank" href="" className="footer-link"><i className="bi bi-youtube ms-3"></i></a>
                            <a target="_blank" href="" className="footer-link"><i className="bi bi-facebook ms-3"></i></a>
                        </div> 
                    </div>

                    {/* Blog */}
                    <div className="col-5 col-md-3" id="blog">
                        <h4>Blog</h4>
                        <a href="#" target="_blank"  className="footer-link">Cómo Reducir tus Cancelaciones</a>
                    </div>
                </div>
            </div>
        </div> 
    );
}



export default Footer;
