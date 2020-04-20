import React, { Component } from 'react';
import '../ServicesComponent/AboutusComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class AboutusComponent extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/about" />
                    <title>About Us Plunes India's First Utility Network </title>
                    <meta name='keywords' content='utility network, plunes, AI-powered, real-time solutions, one stop solution, consultation, procedures'></meta>
                    <meta name="description" content="Know about Plunes one of India's First utility network. Providing the best service to find the doctors including Gynecologist, Psychotherapist. Get Free Consultation.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className='container-fluid aboutus-align' >
                    <div className='row justify-content-center'>
                        <h1 className="ploker-header">ABOUT US</h1>
                    </div>
                    <div className="row about-us">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-3">
                            <img className="col aboutus-image" src="/doctor.png" alt=".." />
                        </div> 
                        <div className="col-sm-7">
                            <h3 className="plunes-is">PLUNES is India's first utility network. Our advanced and unique AI (Artificial Intelligence) acts as a personal assistant to everyone on the platform searching for medical solutions. Experience our unique AI & avail up-to 50% off on all your Medical Procedures, Diagnostics, Appointments & Tests. 
                                <br></br><br></br>
                                Our AI will negotiate in real-time from curated doctors/hospitals & clinics nearest to you to get the best price solution. We help you find the best price solutions to all your medical concerns in just one click. Search instant solutions for all your treatments & medical procedures in Delhi NCR. 
                                <br></br>  <br></br>In the app, we have in-build platform for your EMRs (Electronic Medical Record) so that post diagnosis you don’t have to wait for your reports, it will be directly delivered in your PLOCKR account. It’s the world’s first cross functional platform for electronic medical records. 
                           </h3>
                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                        <h1 className=" collection">Perks & Privileges </h1>
                        <p className="terms-of">The perks of Downloading PLUNES will include:</p>
                        <ul className="medical-text attime-align">
                                
                                <li className="ul-privacy-align" > 100% Refundable Payment</li>
                                <li className="ul-privacy-align">Preferred Timing as Per Your Availability</li>
                                <li className="ul-privacy-align">Free Telephonic Consultations</li>
                                <li className="ul-privacy-align">First Consultation will always be Free</li>
                                <li className="ul-privacy-align"> Make Partial Payments</li>
                                <li className="ul-privacy-align"> Automated Appointments & Payments</li>

                                </ul>
                                <p className="terms-of">With PLUNES, experience a hassle-free & instant booking process with best priced medical solutions for your health. </p>

                        </div>
                        <div className="col-sm-1"></div>
                     </div>
                </div>
                <LandingFooter />
            </div>
        );
    }
}
export default AboutusComponent;