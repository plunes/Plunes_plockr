import React, { Component } from 'react';
import '../blog/DentalComplicationsComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class HighBloodPressureComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/Mental-healthComponent" />
                    <title> High Blood Pressure: Symptoms & Treatments</title>
                    <meta name='keywords' content='high blood pressure, symptoms, treatments, blood pressure symptoms, stress, stress relief'></meta>
                    <meta name="description" content="Do you have an issue of high blood pressure? Does your pressure get in the way of your day to day life? Hypertension occurs when your blood pressure increases to high & unhealthy levels.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="container-fluid dental-margin">

                    <h1 className="key-benefits">High Blood Pressure: Symptoms & Treatments</h1>

                    <div className="row">

                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/blog29.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">Do you have an issue of high blood pressure? Does your pressure get in the way of your day to day life? Hypertension occurs when your blood pressure increases to high & unhealthy levels. Your blood pressure measurement takes into account the amount of blood passing through your blood vessels. The amount of resistance the blood meets while the heart is pumping counts blood pressure.   
                             </p><br></br>
                            <p className="dental-problem">Do you have an issue of high blood pressure? Does your blood pressure level fumes on a regular basis? Usually, Hypertension is defined as High Blood Pressure ranging from 140/90 or higher. Hypertension occurs when your blood pressure increases to high & unhealthy levels. Your blood pressure measurement takes into account the amount of blood passing through your blood vessels. The amount of resistance blood meets while the<a className="tag-color" href="healthy-tips-to-prevent-heart-attack"> heart </a>is pumping, counts the blood pressure.</p>

                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10">
                            <h1 className="tooth-font">Symptoms of severe hypertension can include:</h1>
                            <ul style={{lineHeight:'37px'}}>
                                <li className="tooth-decay-font">Headaches</li>
                                <li className="tooth-decay-font">Shortness Of Breath</li>
                                <li className="tooth-decay-font">Nosebleeds</li>
                                <li className="tooth-decay-font">Flushing</li>
                                <li className="tooth-decay-font">Dizziness</li>
                                <li className="tooth-decay-font">Chest Pain</li>

                            </ul>
                            <br></br>
                            <h2 className="tooth-font">Preventive Measures: </h2><br/>
                            <h2 className="tooth-font">1) Eat less meat </h2>

                            <p className="tooth-decay-font">A healthy diet consisting of green veggies is an easy way to increase fiber & reduce the amount of unsaturated trans-fat. Increase the number of fruits, vegetables, leafy greens, & whole grains you’re eating. Instead of red meat, opt for healthier lean proteins like fish or tofu.</p>
                            <br></br>
                            <h2 className="tooth-font">2) Reduce dietary sodium</h2>
                            <p className="tooth-decay-font">People with hypertension & those with an increased risk for heart disease needs to keep their daily sodium intake between 1,500 mg-2,300 mg per day. Avoid or lessen your intake eating restaurant food or prepackaged foods, which are often very high in sodium.</p>
                            <br></br>
                            <h2 className="tooth-font">3) Cut back on sweets</h2>
                            <p className="tooth-decay-font">Sugary foods & beverages contain empty calories but doesn’t consist nutritional content. If you want something sweet, try eating fresh fruit or minimal amounts of dark chocolate that haven’t been sweetened as much with sugar.
                            <br/><br/>By taking these preventive measures you can promptly keep your blood pressure in check. </p>

                          
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
export default HighBloodPressureComponent;