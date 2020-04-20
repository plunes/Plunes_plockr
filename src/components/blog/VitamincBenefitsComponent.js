import React, { Component } from 'react';
import '../blog/DentalComplicationsComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class VitamincComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/vitamin-c-benefits" />
                    <title>Why Vitamin C is Important for Your Skin?</title>
                    <meta name='keywords' content='vitamin c, vitamin c benefits, healthy skin, skincare, skin benefits'></meta>
                    <meta name="description" content="Vitamin C is one of the best skin care nutrient. It is the key nutrient for glowing, healthy-looking skin. If you don’t know all the reasons why Vitamin C is effective at promoting a radiant complexion, it’s time for you to learn its main advantages.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="container-fluid dental-margin">

                    <h1 className="key-benefits">Why Vitamin C is Important for Your Skin</h1>

                    <div className="row">

                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/blog27.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">Vitamin C is one of the best skin care nutrient. It is the key nutrient for glowing,<a className="tag-color" href="how-to-keep-skin-healthy"> healthy-looking skin.</a> If you don’t know all the reasons why Vitamin C is effective at promoting a radiant complexion, it’s time for you to learn its main advantages  
                             </p><br></br>
                            <h1 className="what-is-it">Why Vitamin C is important?</h1>
                            <p className="dental-problem">Vitamin C is a necessity for anyone who wants a strong and effective skin care regimen, as well as people who want to take preventive steps against issues such as wrinkles, dryness, and loss of firmness.
                             <br/><br/>Vitamin C is also powerful because of its antioxidant properties. Vitamin C has the ability to transform the appearance of your complexion so it looks brighter, fresher and renewed.</p>

                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10">
                            <h1 className="tooth-font">Why use Vitamin C skin-care products? </h1>
                            <p className="tooth-decay-font">Vitamin C goes by many different skin care products in the market. Whenever buying Vitamin C skin care products, make sure it is one of the top ingredient.</p>
                            <br></br>
                           <ul style={{listStyleType:'none'}}>
                               <li className="tooth-font"></li>
                               <p className="tooth-decay-font">1) Cleansers can revitalize skin morning and night and can be followed by a serum that serves as both a base for your daily sunscreen and makeup products, or as the first layer of your<a className="tag-color" href="how-to-get-better-sleep"> nighttime maintenance routine. </a> </p>
                               <li className="tooth-font"></li>
                               <p className="tooth-decay-font">2) Concentrated Serum is a wonderful must-have for daily skin rejuvenation. For better health, pair the serum with our Vitamin C. With consistent use, you will notice your healthy skin giving a natural shine to it. </p>
                               <li className="tooth-font"></li>
                               <p className="tooth-decay-font">3) Vitamin C is also a featured player in many specialty skin care products that aren’t used on a daily basis but instead enhance your skin through weekly or other periodic applications.	</p>

                               <li className="tooth-font"></li>
                               <li className="tooth-font"></li>
                           </ul><br/>
                           <p className="tooth-decay-font">If you are dealing with the lines, rough patches, and dry skin that can come with<a className="tag-color" href="home-remedies-for-anti-aging"> aging skin,</a> never fear—Vitamin C is your complexion’s superhero, ready to save the day!</p>


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
export default VitamincComponent;