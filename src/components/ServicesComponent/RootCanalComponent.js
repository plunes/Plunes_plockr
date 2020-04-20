import React, { Component } from 'react';
import '../ServicesComponent/RootCanalComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";
class RootCanalComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/root-canal"/>
                    <title>Root Canal Treatment in Gurgaon, India's First Utility Network, Plunes</title>
                    <meta name='keywords' content='Cavity fillings, hot sensitivity, sensitivity, cold sensitivity, oral checkup, implant, gum swelling, tooth ache, tooth pain, RCT, Root Canal Treatment, gum infection, gum swelling, dental implant'></meta>
                    <meta name="description" content="Looking for Best Root Canal Treatment in Gurgaon? Plunes provide you all solution to find the root canal dentistry procedures & treatments in Gurgaon.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader/>
                </div>
                <div className="container-fluid dental-margin">
                    <h1 className="key-benefits">Touch-up Your Dental Health with Root Canal Treatment</h1>
                    <div className="row">
                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/blog1.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">Despite of how scary it feels to undergo Root Canal Treatment, it is ensured that the procedure helps to remove the infected tissue or canal successfully and gives you much relief from the teeth pain. Let’s first understand how RCT (Root Canal Treatment) helps to newly restore the decayed or infected tooth. </p>
                          <br></br>  <h1 className="what-is-it">What Is It?</h1>
                            <p className="dental-problem">Usually, root canals are recommended or needed when there is an infection deep within the tooth. The pulp inside the tooth can become infected with bacteria because of an injury or because of a severe, untreated cavity. Without treatment, the infection can become severe enough that the tooth has to be removed. This treatment also protects our teeth from future infections.</p>
                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <p className="tooth-decay-font">First, the dentist removes everything that is inside the root canal. With the patient under local anesthesia, the dentist makes a small access hole on the surface of the tooth and removes the diseased and dead pulp tissue with very small files.</p>
                            <p className="tooth-decay-font">Next, the dentist cleans shapes and decontaminates the hollow area, using tiny files and irrigation solutions. Then, the tooth is filled with a rubber-like material, using an adhesive cement to seal the canals completely.After root canal therapy, the tooth is dead. The patient will no longer feel any pain in that tooth because the nerve tissue has been removed, and the infection has been eliminated.
                            However, the tooth will be now more fragile than it was before. A tooth with no pulp must receive its nourishment from the ligament that attaches the tooth to the bone. This supply is adequate, but in time, the tooth will become more brittle, so a crown or filling offers protection</p>
                            <br></br>
                            <h1 className="tooth-font">The Plunes Advantage</h1>
                            <p className="tooth-decay-font">We help you find the best price solutions to all your medical concerns with just one click. Our AI will help you search instant solutions for all your dentistry procedures & treatments in Delhi NCR.<br></br>
                                Search for the desired dental treatments such as teeth whitening, hot sensitivity, cold sensitivity, oral checkup, dental implants, gum swelling, or any other dentistry treatments & our AI will negotiate in real-time with top dentists & clinics nearest to you to get the best price in real time. Book instantly & avail Up to 50% discount!</p>
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
                </div></div>
                <LandingFooter />
            </div>
        );
    }
}
export default RootCanalComponent;