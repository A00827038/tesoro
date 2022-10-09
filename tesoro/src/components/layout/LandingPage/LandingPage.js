import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    return(
       <div className="container-fluid">

            <div className="custom-container row mt-4">
                <div className="col-6">
                    <h1 className="landing-title">Ofrece pago contra entrega con el costo de envío como garantía</h1>
                    <h3 className="landing-problem mt-4">Sabemos que ofrecer pago contra entrega es costoso porque implica un índice alto de cancelaciones. Si el cliente cancela, tú tienes que pagar el costo de envío.</h3>
                </div>
                <div className="col-6">
                    <div className="d-flex">
                        <img src="img/order_checkout_tesoro.png" className="landing-main-imgs me-5" alt=""/>
                        <img src="img/order_validation_tesoro.png" className="landing-main-imgs mt-5" alt=""/>
                    </div>
                </div>
            </div>

            <div className="green-section">
                <h2 className="green-section-text">¡Olvídate de Pagar por Envíos de Ventas Canceladas!</h2>
            </div>

            <div className="custom-container row trust-section">
                <div className="col-4">
                    <img className="trust-img" src="img/tesoro_trust.png" alt=""/>
                </div>
                <div className="col-8">
                    <h4 className="trust-text">Integra el botón de checkout de Tesoro en tu tienda en línea y ofrece pago contra entrega como método de pago, con el  costo de envío como garantía. </h4>
                    <h4 className="trust-text mt-4">Si tu cliente cancela su orden, tú recibes el costo de envío.</h4>
                </div>
            </div>

            <div className="custom-container call-to-action-section">
                <button className="btn-primary-landing">Solicitar</button>
            </div>

       </div>
    );
}

export default LandingPage;
