import React, { Component } from 'react';
import '../ServicesComponent/TeethWhiteningComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class AntiAgingComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/Mental-healthComponent" />
                    <title>Home Remedies For: Anti Aging </title>
                    <meta name='keywords' content='home remedies, anti aging, skincare, anti aging tips, healthy tips'></meta>
                    <meta name="description" content="We all have an irresistible desire to look pretty and young forever. Let's bring forth the secrets of anti-aging that will simplify your life.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="container-fluid dental-margin">

                    <h1 className="key-benefits">Home Remedies For: Anti Aging</h1>
                    <div className="row">

                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/blog06.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">We all have an irresistible desire to look pretty and young forever. But as we continue ageing, avoiding the effects of aging on our skin is difficult. 

                               <br/> <br/>That's why most of us look for anti-aging tricks and treatment at some point in time. Let's bring forth the secrets of anti-aging that will simplify your life.

                                 <br/>  <br/>  Home remedies are the most common way to beat the signs of aging: 



                             </p>
                            <h1 className="what-is-it">1)  Aloe Vera: </h1>
                            <p className="dental-problem">Aloe Vera is enriched with vitamin C and E which keeps the skin healthy and radiant. It is also high in antioxidants and the signs of aging are slowing down. Aloe vera is one of the treatments used most commonly for skin care. It is used for hydrated skin also in various skin care creams. </p>

                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10">
                            <h1 className="tooth-font">2) Citrus fruits: </h1>
                            <p className="tooth-decay-font">Among the most effective anti-aging secrets are citrus fruits such as orange, lemon and grapefruit. They load these fruits with antioxidants and anti-inflammatory properties. Hence, they replace the old skin cells with new ones, reducing the aging effects. </p>
                            <br></br>
                            <h2 className="tooth-font">3) Cucumber:</h2>
                            <p className="tooth-decay-font">Cucumber also serves as an antioxidant and stimulates the development of new skin cells. You can also gently rub it off for a lighter, smoother skin.</p>
                            <br></br>
                            <h2 className="tooth-font">4) Ginger </h2>
                            <p className="tooth-decay-font">Ginger is a well-known and easy to use kitchen cure for various health problems. The ginger's anti-inflammatory or curative properties make it a perfect anti-aging remedy. Have a cup of hot ginger tea with some honey every morning, for amazing anti-aging effects.</p>
                            <br></br>
                            <h2 className="tooth-font">5) Exercising  </h2>
                            <p className="tooth-decay-font">Exercising regularly is the best way to stay healthy and young. Exercise takes on equal importance to remaining young and fit as a healthy diet. This retains flexible body muscles and improves blood circulation throughout the body. 

                                         <br/><br/>Having these foods as part of your regular diet would definitely do amazing things for your skin and you're sparkling inside out within short span.</p>
                            <br></br>
                           </div></div>


            </div>  </div>
                <LandingFooter />
            </div>
        );
    }
}
export default AntiAgingComponent;