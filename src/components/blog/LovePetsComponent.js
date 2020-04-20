import React, { Component } from 'react';
import '../blog/DentalComplicationsComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class LovePetsComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/pet-love-benefits" />
                    <title>Love Pets? Secretly it's beneficial to your health!</title>
                    <meta name='keywords' content='pet love. pet, pet love benefits, pet therapy, pet love'></meta>
                    <meta name="description" content="Pets play an important role when it comes to the well-being of our physical & mental health. Let's check the role they play in our health!">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="container-fluid dental-margin">

                    <h1 className="key-benefits">Love Pets? Secretly it's beneficial to your health!</h1>

                    <div className="row">

                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/blog17.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">Isn't it adorable when a pup comes running your way? Do you prefer to take a long walk with your pet rather than a human? Pets play an important role when it comes to the well-being of our physical & mental health. Dogs, cats, horses, turtles, parrots & even fish have been known to be beneficial to health.
                            <br/><br/>
                            Spending some quality time with a furry friend can greatly improve the mental peace of our life in more ways than you might be aware of. Following are some of the benefits observed:
                             </p><br></br>
                            <h1 className="what-is-it">1. Helps during Depression</h1>
                            <p className="dental-problem">Pet animals provide emotional, physical, or social support. Reptiles, dogs, birds, & fishes are sometimes used as therapy animals. They are also known to help people with their<a className="tag-color" href="what-to-do-when-anxiety-gets-in-your-way"> anxiety</a> & depression by alleviating stress levels & feelings of loneliness</p>

                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10">
                            <h1 className="tooth-font">2. Cures Autism </h1>
                            <p className="tooth-decay-font">Mammals make for better therapy animals. They help people with autism break out of their shyness by providing companionship & help them develop much-needed social & interactive skills</p>
                            <br></br>
                            <h2 className="tooth-font">3. Support differently-able people </h2>
                            <p className="tooth-decay-font">A Service Pet Animal is trained for the benefit of an individual with a disability to help improve the quality of their life. Dogs are the most common service pet animal. They are more responsive to training & hence make an ideal companion. </p>
                            <br></br>
                            <h2 className="tooth-font">4. Lowers<a className="tag-color" href="/healthy-tips-toprevent-heart-attack"> heart disease</a></h2>
                            <p className="tooth-decay-font">A cat’s purr is maybe one of the most fulfilling sounds on the planet Earth and has a large group of medical advantages as well. While a cat purring sound surely implies a glad feline, its purring has for quite some time been related with a remedial mending capacity on human bones and muscles.
                            <br></br><br/>
                            So why not make these friendly furry pet animals a part of our life and know that we can count upon them for our primary strength, health.</p>
                            
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




            </div>  </div>
                <LandingFooter />
            </div>
        );
    }
}
export default LovePetsComponent;