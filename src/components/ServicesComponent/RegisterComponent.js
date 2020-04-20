
import React, { Component } from 'react';
import '../ServicesComponent/RegisterComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import {Helmet} from "react-helmet";

class RegisterComponent extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Helmet>
                <link rel="canonical" href="https://www.plunes.com/register" />
                <title>Register With Us</title>
                <meta name='keywords' content='register, automated appointments, instant payments, pre-paid clients, free registration, digital profile, free registration'></meta>
                <meta name="description" content="Register yourself on Plunes & get best pricing solutions to all your medical procedures, diagnostics & tests instantly. ">
                </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                    
                <div className='container-fluid register-align'>
                    <div className='row justify-content-center'>
                        
                        <h1 className="ploker-header">REGISTER</h1>
                    </div>
                    <div className="row register-element">
                        {/* <div className="col-sm-1"></div> */}
                        <div className="col-sm-3">
                            
                            <img className="register-img" src="/Appintment.png" alt="" />
                            <p className="register-heading">Automated appointments</p>
                            <p className="register-text">Our unique AI acts as your personal assistant automating all the Appointments for you.</p>

                            </div> 
                            <div className="col-sm-3">
                                <img className="register-img" src="/text.png" alt=""/>
                                <p className="register-heading" >Instant Payments</p>
                                <p className="register-text">We provide hassle-free payment options for the clients.</p>
                            </div>
                            <div className="col-sm-3">
                                
                            <img className="register-img" src="/employee.png" alt=""/>
                            <p className="register-heading">Pre-paid Clients</p>
                            <p className="register-text">Our AI automatically provides price solution for all your client requests. Thus, giving you pre-paid clients right at your doorstep.</p>
                            </div>
                            <div className="col-sm-3">
                            <img className="register-img" src="/registration.png" alt="" />
                            <h2 className="register-heading">Free Registration</h2>
                            <p className="register-text">
                            We create your digital profile and do extensive marketing on your behalf. The best part is that the registration is completely free.
                            </p>
                            </div>
                            {/* <div className="col-sm-1">
                            </div> */}
                             </div>
                             <div className="row">
                                <div className="col-sm-5"></div>
                                <div className="col-sm-2">                          
                             <a href="/" className="btn register-button">Register </a>
                              </div>
                              <div className="col-sm-2">
                                  </div>
                   </div>
                </div>
                <LandingFooter />
            </div>
        );
    }
}
export default RegisterComponent;