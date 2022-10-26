import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    return(
       <div className="container-fluid landing-page">

            {/* What is Tesoro */}
            <div className="custom-container row mt-4">
                <div className="col-12 col-md-6">
                    <h1 className="landing-title">Ofrece pago contra entrega, <br></br> <span className="bold">sin riesgo</span></h1>
                    <h4 className="landing-problem mt-4">Olvídate de absorber el costo de envío en ventas canceladas. Utiliza nuestro API para asegurar el costo envío en tus ventas de pago contra entrega.</h4>
                </div>
                <div className="col-6 no-display-mobile">
                    <div className="d-flex">
                        <img src="img/order_checkout_tesoro.png" className="landing-main-imgs me-5" alt=""/>
                        <img src="img/order_validation_tesoro.png" className="landing-main-imgs mt-5" alt=""/>
                    </div>
                </div>
                <div className="col-12 no-display-md">
                    <div className="d-flex">
                        <img src="img/order_validation_tesoro.png" className="landing-main-imgs mt-5" alt=""/>
                    </div>
                </div>
            </div>
            
            {/* Is it for me? */}
            <div className="green-section">
                <h2 className="green-section-text">Razones para Utilizar Tesoro</h2>
            </div>

            <div className="custom-container trust-section">
                <div className="row trust-section-1">
                    <div className="col-12 col-md-6">
                        <img className="trust-img" src="img/reason_to_use_tesoro.jpg" alt=""/>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="trust-text">
                            <h2 className="trust-text-title bold">Ofreces pago contra entrega pero...</h2>
                            <h4 className="mt-4">Tienes un índice alto de cancelaciones y tienes que absorber el costo de envío cuando una venta se cancela.</h4>
                        </div>
                    </div>
                </div>
                <div className="row trust-section-2">
                    <div className="col-12 col-md-6 no-display-md">
                        <img className="trust-img" src="img/reason_to_use_tesoro_2.jpg" alt=""/>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="trust-text">
                            <h2 className="trust-text-title bold">No ofreces pago contra entrega porque...</h2>
                            <h4 className="mt-4">Crees que el índice de cancelaciones es muy alto y te preocupa tener que absorber el costo de envío.</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 no-display-mobile">
                        <img className="trust-img" src="img/reason_to_use_tesoro_2.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* How it Works */}
            <div className="custom-container how-it-works" id="how-it-works">
                <h2 className="how-it-works-text bold">¿Cómo Funciona?</h2>
                
                <div className="row how-it-works-items">
                    <div className="col-4 col-md-2 how-it-works-item">
                        <h6 className="how-it-works-item-text">1 <br></br> Integra el API de tesoro en tu checkout</h6>
                    </div>
                    <div className="col-4 col-md-2 how-it-works-item">
                        <h6 className="how-it-works-item-text">2 <br></br> Llama al API con la información de tu cliente</h6>
                    </div>
                    <div className="col-4 col-md-2 how-it-works-item">
                        <h6 className="how-it-works-item-text">3 <br></br> En tiempo real calculamos la prima en base al riesgo de tu cliente</h6>
                    </div>
                    <div className="col-4 col-md-2 how-it-works-item">
                        <h6 className="how-it-works-item-text">4 <br></br> Agrega el costo de la prima al total de tu orden</h6>
                    </div>
                    <div className="col-4 col-md-2 how-it-works-item">
                        <h6 className="how-it-works-item-text">5 <br></br> Tu cliente completa su orden</h6>
                    </div>
                    <div className="col-4 col-md-2 how-it-works-item">
                        <h6 className="how-it-works-item-text">6 <br></br> Si la orden se cancela Tesoro te reembolsa el costo de envío</h6>
                    </div>
                </div>
            </div>

            {/* Frequently asked questions */}
            <div className="custom-container frequently-asked-questions" id="faq">
                
                <h2 className="frequently-asked-questions-text bold">Dudas que podrías tener</h2>
                
                <div className="accordion accordion-flush mt-5" id="accordionFlushPF">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                ¿Cómo se calcula la prima para asegurar el envío?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">La prima de riesgo para asegurar el envío se calcula en base al perfil de riesgo de tu cliente. Tomando en cuenta el índice de devoluciones del cliente dentro de la red de negocios que trabaja con nosotros y el costo del envío de la orden.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                ¿Cómo le pago a Tesoro la prima para asegurar el envío?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Una vez que realizas una orden, el costo de la prima automáticamente se reduce de tu balance de fondos que tienes en tu cuenta de Tesoro.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                ¿Cómo me reembolsa Tesoro el costo del envío?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Semanalmente te reembolsamos el costo de envío de tus ventas que no se pudieron completar con éxito. Esta cantidad de la depositamos a la cuenta de banco que nos indiques.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                ¿Me pueden ayudar a integrar el API a mi tienda en línea?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Claro que sí, personalmente te apoyamos a hacer la integración.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet the Team and Why We are Doing this*/}
            <div className="meet-the-team" id="meet-the-team">
                
                <h2 className="meet-the-team-text bold">Conoce al Equipo</h2>
                
                <div className="mt-5">
                    <iframe className="meet-the-team-video" frameborder="0" allowfullscreen
                        src="https://www.youtube.com/embed/g2aWyQGk32E">
                    </iframe>
                </div>
            </div>

            <div className="custom-container call-to-action-section">
                <a href="https://forms.gle/Vcsz7JkCJkg8mmxi6" target="_blank" className="btn-primary-landing">Solicitar Ahora</a>
            </div>

       </div>
    );
}

export default LandingPage;
