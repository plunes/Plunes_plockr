import React, { Component } from 'react';
import '../blog/DentalComplicationsComponent.css';
import LandingHeader from '../LandingComponent/LandingHeader';
import LandingFooter from '../LandingComponent/LandingFooter';
import { Helmet } from "react-helmet";
class HyperthyroidismComponent extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <Helmet>
                        <link rel="canonical" href="https://www.plunes.com/hyperthyroidism" />
                        <title>Hypothyroidism: Connection between your Stress & Thyroid</title>
                        <meta name='keywords' content='hyperthyroidism, stress, thyroid, stress relief, stress reduce'></meta>
                        <meta name="description" content="How many times you have comes across this term ‘Stress’? We are sure, you in your daily life have used these words quite a lot of times. Stress is a word that seems all too common in today’s society.">
                        </meta>
                    </Helmet>
                    <div>
                        <LandingHeader />
                    </div>
                    <div className="container-fluid dental-margin">
                        <h1 className="key-benefits">Hypothyroidism: The connection between your Stress & Thyroid</h1>
                        <div className="row">
                            <div className="col-sm-5">
                                <img className="dentalcompli-img" src="/blo25.png" alt=".." />
                            </div>
                            <div className="col-sm-6">
                                <p className="dental-problem">How many times you have comes across this term ‘Stress’? We are sure, you in your daily life have used these words quite a lot of times. Stress is a word that seems all too common in today’s society. This word not only causes chronic havoc on your overall health but it can affect your thyroid too
                                </p><br></br>
                                <h1 className="what-is-it">Stress & Hypothyroidism</h1>
                                <p className="dental-problem">Whenever you undergo stress they release Cortisol, which enhances various bodily functions. Stress does not contribute to thyroid disorder, but it can make the condition worse.
                                <br /><br />
                             Lab tests cannot always identify the right picture of how you’re feeling, & medications cannot always keep up with the changes that stress causes. Chronic stress can cause problems in your body before lab tests can detect it and show a problem.
                            </p>
                            </div>
                            <div className="col-sm-1">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1"></div>

                            <div className="col-sm-10">
                                <h1 className="tooth-font">Stress Relief Tips:</h1>
                                <p className="tooth-decay-font">You can help your overall stress levels & thyroid health by making some simple changes in your daily life which includes:</p>
                                <br></br>
                                <ul>
                                    <li className="tooth-font">Eating Right</li>
                                    <p className="tooth-decay-font">The definition of a healthy, balanced diet looks different for everyone. In general, plan to eat three times well-balanced meals. With heavy breakfast, medium lunch and light dinner that includes fruits, vegetables, & protein each day. Start your morning off with a good breakfast, one low in sugar but high in protein & fiber.</p>
                                    <li className="tooth-font">Sleeping Well</li>
                                    <p className="tooth-decay-font">Getting enough quality sleep at night can be tough with hypothyroidism. Stress makes getting a<a className="tag-color" href="/how-to-get-better-sleep"> good night’s sleep</a> tough too but it's very important to not anything affect your sleep cycle. Aiming a good night's sleep is required for a person diagnosed with the thyroid. </p>
                                    <li className="tooth-font">Relaxing</li>
                                    <p className="tooth-decay-font">Taking time for you once in a while is important. To reflect or<a className="tag-color" href="/how-to-get-a-healthy-mind"> meditate</a> can help the body relax. In turn, relaxation leads to reduced stress & less impact on your thyroid. There are many ways to relax. For some people, it helps to calm their bodies. For other people, deep breathing exercises, <a className="tag-color" href="key-benefits-of-daily-yoga">yoga,</a> or simply being outside are more than enough.</p>
                                </ul>
                                <p className="tooth-decay-font">You may not be able to realize the importance of these small steps but we can guarantee a positive change in your life after initiating these stress relief measures. Supporting your body with healthy foods, adding vitamins & minerals, sleeping properly, & trying some relaxation techniques can help you balance your overall health as well as your thyroid.</p>
                            </div>
                            <div className="col-sm-1">
                            </div>
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
                <LandingFooter/>
            </div>
        );
    }
}
export default HyperthyroidismComponent;