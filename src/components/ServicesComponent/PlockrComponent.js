import React, { Component } from 'react';
import '../ServicesComponent/PlockrComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class PlockrComponent extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/plockr" />
                    <title>Plockr World's First integrated platform for EMRs, Plunes</title>
                    <meta name='keywords' content='plockr, EMR, electronic medical records, cloud solution'></meta>
                    <meta name="description" content="Get Personal Plocker account with unlimited Cloud storage for free. Helps you to share all of the Reports/Prescriptions with respective patients.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className='container-fluid ploker-align'>
                    <div className='row justify-content-center'>
                        <h1 className="ploker-header">PLOCKR</h1>
                    </div>
                    <div className='row plockr-align'>
                        <div className="col-sm-1 ">
                        </div>
                        <div className='col-sm-6 col'>
                            <h2 className="welcome-to">Welcome to the world's first cross-functional integrated platform for EMRs.</h2>
                            <p className="EMR">
                                EMR stands for Electronic Medical Record, which are the digital equivalent of paper records, or charts at a clinician's office. EMRs contain general information such as treatment and medical history about a patient as it is collected by the individual medical practice.
                            </p>
                            <p className="EMR">
                                Our platform is an intelligent cloud solution allowing you to share all of the Reports/Prescriptions with your respective patients in one click.
                            </p>
                            <button className="btn button-plockr">Get unlimited cloud storage for free</button>
                            <p className="EMR"> Upto 40% reduction in your operational cost.    </p>
                            <p className="EMR">
                                Patients can store all their medical history including prescriptions, test reports and doctor's remarks at one place in their personal PLOCKR Account .
                            </p>
                            <p className="EMR">The required documents can be shared as and when needed.
                            </p>
                        </div>
                        <div className='col-sm-4 '>
                            <img className="plocker-img col" src="/PLOCKER.png" alt=".." />
                        </div>
                        <div className='col-sm-1 col'>
                        </div>
                    </div>
                </div>
                <LandingFooter />
            </div>
        );
    }
}
export default PlockrComponent;