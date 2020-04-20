import React, { Component } from 'react';
import '../blog/DentalComplicationsComponent.css';
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";
class IntoductoryblogComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/Intoductory-blogComponent" />
                    <title>An Era of New Health Care, Plunes-Introductory Blog</title>
                    <meta name='keywords' content='Health Care, Plunes, Utility app'></meta>
                    <meta name="description" content="Check out the new era of healthcare & India's first AI-powered Utility network at Plunes. Check regarding the perks & privileges, also know about plocker.">
                    </meta>
                 </Helmet>
                <div>
                <LandingHeader/>
                </div>
                <div className="container-fluid dental-margin">

                    <h1 className="key-benefits">Plunes – An Era of a New Healthcare</h1>

                    <div className="row">

                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/blog8.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">What is the first question that pops on your mind when you try to book a medical procedure? “Well, let’s Google It”; Sounds familiar? For many of us, it becomes very crucial to know under which specialization it comes and who will treat it. People tend to search about the diseases and tend to research upon the prices if found lethal.
                            <br/><br/>
                            But the question is do you get correct information regarding the prices? Moreover when compared, are the prices same? Not at all! Same medical procedures but the prices are different everywhere & that results in humongous gap. Hospitals & their treatments overcharge at many points. Stuck in middle of the condition we usually tend to pay the asked amount. How about if we fetch you for the best pricing solutions? That’s where PLUNES, India’s first Utility Network takes over the stage!
                            </p>
                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10">
                            <h1 className="tooth-font">Why PLUNES?</h1>
                            <p className="tooth-decay-font">PLUNES is India’s first AI-Powered Utility Network. To solve the most crucial part of this messed up process, we at PLUNES, have pledged together to standardize the prices of each medical procedures, tests, diagnostics & appointments. We have launched an AI powered Utility Network which will negotiate in real-time from top doctors, hospitals & clinics nearby to you with the best-priced solution. We have automated appointments and payments curated for you in just one click. Experience our unique AI & avail up-to 50% off on all your Medical Procedures, Diagnostics, Appointments & Tests.  </p>
                            <br></br>
                            <h2 className="tooth-font">Perks & Privileges </h2>

                            <p className="tooth-decay-font">Downloading<a className="tag-color" href="https://play.google.com/store/apps/details?id=com.plunes&hl=en_IN"> PLUNES</a> will also include amazing perks & privileges specially devised for you -</p>
                            <p className="tooth-decay-font">1. We give 100% Refundable Payment</p>
                            <p className="tooth-decay-font">2. You can have Preferred Timing as Per Your Availability</p>
                            <p className="tooth-decay-font">3. You will get Free Telephonic Consultations</p>
                            <p className="tooth-decay-font">4. Your First Consultation will always be Free</p>
                            <p className="tooth-decay-font">5. You can make Partial Payments</p>

                            <br></br>
                            <h1 className="tooth-font">PLOCKR </h1>
                            <p className="tooth-decay-font"><a className="tag-color" href="/plockr">PLOCKR</a> is India’s first cross-functional integrated platform for EMRs (Electronic Medical Records).   </p>
                            <br></br>
                            <h1 className="tooth-font">What PLOCKR do? </h1>

                            <p className="tooth-decay-font">Post diagnosis, the minimum waiting time is up-to 3-4 hours for the final doctor’s remarks and reports. One has to wait in the long queues to get the reports finally verified by the Doctor. By downloading PLUNES, you will get your reports instantly in your PLOCKR ID with Doctor’s remarks. It acts as an Intelligent Cloud Storage solution allowing you to get all your reports instantly with just one click. 
                            <br></br><br></br>
                            So long gone are the days of waiting in the line. Our AI will help you search instant solutions for all your medical procedures & treatments in Delhi NCR. 
                               <br/><br/>
                               Search for any medical treatments such as<a className="tag-color" href="/teeth-whitening-complete-guide"> teeth whitening, </a>MRI, X-Ray, sensitivity, dental implants, IVF or any other medical procedures/treatments & our AI will negotiate in real-time with top hospitals & clinics nearest to you to get the best price.
                                <br></br><br></br>Book Now & Avail Upto 50% discount instantly!</p>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>


                    <div className="row">
                        <div className="col-sm-1">


                        </div>
                        <div className="col-sm-4">
                            <p>

                            </p>

                        </div>
                        <div className="col-sm-7">

                        </div>
                    </div>



                </div>
                </div>
                <LandingFooter />
            </div>
        );
    }
}
export default IntoductoryblogComponent;