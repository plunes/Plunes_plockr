import React, { Component } from 'react';
import '../blog/DentalComplicationsComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class DailyYogaComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/key-benefits-of-daily-yoga" />
                    <title> Key Benefits of Daily Yoga</title>
                    <meta name='keywords' content='daily yoga, benefits of daily yoga, key benefits of daily yoga, yoga benefits, yoga'></meta>
                    <meta name="description" content="How many times people around have recommended you practice yoga? We are surely many times. In our busy work life, we tend to avoid paying attention to our health.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="container-fluid dental-margin">

                    <h1 className="key-benefits">Key Benefits of Daily Yoga</h1>

                    <div className="row">

                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/blog02.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">How many times people around have recommended you practice yoga? We are surely many times. In our busy work life, we tend to avoid paying attention to our health. It’s vital to take care of our<a className="tag-color" href="/how-to-get-a-healthy-mind"> mental health</a> & yoga is one of the most powerful exercises to do this.
                          <br/><br/>  Derived from the Sanskrit word "Yuji," meaning yokes or unions, it is an ancient practice that brings mind and body together. It embodies breathing exercises & meditation designed to encourage relaxation & reduce <a className="tag-color" href="/hyperthyroidism">stress.</a> 
                              <br/>It is said that practicing yoga comes with many benefits for both mental and physical health. 

                             </p>
                            <h1 className="what-is-it">1) Dismantles stress:</h1>
                            <p className="dental-problem">Used alone or in combination with other stress relief techniques, such as meditation, yog asana can be an effective way to keep stress under control.</p>

                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10">
                            <h1 className="tooth-font">2) Relieves Anxiety: </h1>
                            <p className="tooth-decay-font">Most people start to practice yoga as a way to cope with anxious feelings. Ironically enough, quite a bit of research shows that yoga can help lower <a className="tag-color" href="what-to-do-when-anxiety-gets-in-your-way">anxiety.</a> </p>
                            <br></br>
                            <h2 className="tooth-font">3) Improves the health of your heart: </h2>
                            <p className="tooth-decay-font">The health of your heart is an essential component, from pumping blood throughout the body to supplying tissues with important nutrients. Studies show that yoga may help improve heart health & reduce several risk factors for heart disease.</p>
                            <br></br>
                            <h2 className="tooth-font">4) Improves Quality of Life:</h2>
                            <p className="tooth-decay-font">Yoga is becoming increasingly common as an adjunct therapy for many people to improve their quality of life.
                                <br/><br/>Finding just a few minutes to practice yoga can be quite beneficial to your health & make a noticeable difference.</p>
                            <br></br>
                           </div></div>


            </div>  </div>
                <LandingFooter />
            </div>
        );
    }
}
export default DailyYogaComponent;