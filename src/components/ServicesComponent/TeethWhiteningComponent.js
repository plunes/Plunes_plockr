import React, { Component } from 'react';
import '../ServicesComponent/TeethWhiteningComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class TeethWhiteningComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/teeth-whitening" />
                    <title>Teeth Whitening in Gurgaon, Improve Your Lifestyle, Plunes</title>
                    <meta name='keywords' content='dentist consultation, hot sensitivity, sensitivity, cold sensitivity, oral checkup, implant, gum swelling, tooth ache, tooth pain, Invisalign therapy, teeth bleaching, teeth whitening strips, vital teeth whitening, cosmetic dentistry'></meta>
                    <meta name="description" content="Get the Best Teeth Whitening Clinic in Gurgaon. Plunes help to find the best solution for our dentistry procedures & treatments in Gurgaon.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="container-fluid dental-margin">

                    <h1 className="key-benefits">A Complete Guide To Teeth Whitening</h1>

                    <div className="row">
                        
                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/blog3.png"  alt=".."/>
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">Are you conscious about your teeth before you can laugh freely? Though you are flossing twice a day but no improvement with your yellow teeth? Then it’s time to consider other options and you have arrived on the correct page!<br></br>
                              Knowing you’re flashing a healthy, bright smilebuilds confidence, and tooth whitening isone of the safest, easiest and fastest ways to get your teeth in its best possible condition</p>
                            <h1 className="what-is-it">What Is It?</h1>
                            <p className="dental-problem">Tooth whitening lightens teeth and helps to remove teeth stain and discoloration. Whitening is among the most popular cosmetic dental procedures because it can greatly improve how your teeth look. Most dentists perform tooth whitening.<br></br>
                               When your teeth are professionally whitened the only thing that changes is their color. The strength, health or structure of the teeth is never affected. It primarily focuses on the improvement of the overall smile appearance. Whitening is not a one-time procedure. It will need to be repeated from time to time if you want to maintain the brighter color.</p>

                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10">
                        <h1 className="tooth-font">What It's Used For? </h1>

                            <p className="tooth-decay-font">The outer layer of a tooth is called the enamel. The color of natural teeth is created by the reflection and scattering of light off the enamel, combined with the color of the dentin under it. Your genes affect the thickness and smoothness of the enamel. Thinner enamel allows more of the color of the dentin to show through. Having smoother or rougher enamel also affects the reflection of light and therefore the color. Every day, a thin coating (pellicle) forms on the enamel and picks up stains. Tooth enamel also contains pores that can hold stains.</p>
                            <p className="tooth-decay-font">The most common reasons for teeth to get yellow or stained are:</p>
                            <p className="tooth-decay-font">1. Using tobacco,</p>
                            <p className="tooth-decay-font">2. Drinking dark-colored liquids such as coffee, cola, tea and red wine,</p>
                            <p className="tooth-decay-font">3. Not taking good care of your teeth.</p>
                            
                            <br></br>
                            <h1 className="tooth-font">The Plunes Advantage  </h1>
                            <p className="tooth-decay-font">We help you find the best price solutions to all your medical concerns with just one click. Our AI will help you search instant solutions for all your dental procedures & treatments in Delhi NCR. <br></br><br></br>
                             Search for the desired dental treatments such as teeth whitening, hot sensitivity, cold sensitivity, oral checkup, dental implants, gum swelling, or any other dentistry treatments & our AI will negotiate in real-time with top dentists & clinics nearest to you to get the best price in real time. Avail Upto 50% discount on instant booking!</p>

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
export default TeethWhiteningComponent;