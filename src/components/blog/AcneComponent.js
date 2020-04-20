import React, { Component } from 'react';
import '../blog/DentalComplicationsComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class AcneComponent extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <Helmet>
                        <link rel="canonical" href="https://www.plunes.com/how-to-get-rid-of-acne" />
                        <title>Home Remedies for how to get rid of Acne</title>
                        <meta name='keywords' content='home remedies, acne, ance scars, acne relief, acne cause'></meta>
                        <meta name="description" content="Acne is one of the most common skin problems among people. Sometimes the reason can be genetic & the other times because of rash treatment to your skin.">
                        </meta>
                    </Helmet>
                    <div>
                        <LandingHeader />
                    </div>
                    <div className="container-fluid dental-margin">
                        <h1 className="key-benefits">Home Remedies: How to get rid of Acne</h1>
                        <div className="row">
                            <div className="col-sm-5">
                                <img className="dentalcompli-img" src="/blog28.png" alt=".." />
                            </div>
                            <div className="col-sm-6">
                                <p className="dental-problem">Acne is one of the most common skin problems among people. Sometimes the reason can be genetic & the other times because of rash treatment to your skin.
                             </p><br></br>
                                <h1 className="what-is-it">What Causes Acne? </h1>
                                <p className="dental-problem">Acne appears in your skin when the pores are clogged with oil & dead skin cells.
                                <br />Due to the each pore gets connect with sebaceous gland. In return these pores produces ‘sebum’ which further causes the pores to clogged up.
                                <br />Conventional acne treatments can have undesirable side effects like dryness, redness & irritation. This has prompted many people to find out how to cure acne naturally at home.<a className="tag-color" href="home-remedies-for-anti-aging"> Home remedies</a> are one of the best ways to prevent acne.
                                <br />Natural treatments actually work if followed at a regular basis with proper steps.</p>
                            </div>
                            <div className="col-sm-1">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-10">
                                <h1 className="tooth-font">Let’s look into the following handy tips that can be performed at home: </h1>
                                <h1 className="tooth-font">1) Honey & Cinnamon Mask</h1>
                                <p className="tooth-decay-font">Both honey & cinnamon are excellent ingredients of antioxidants. This helps in reducing the acne like magically. Mix 2 tablespoons of honey & 1 teaspoon of cinnamon together to form a paste. Clean it first & then apply the mask to your face. Leave it for 10–15 minutes. Rinse completely & pat your face dry.</p>
                                <br></br>
                                <h2 className="tooth-font">2) Green Tea </h2>
                                <p className="tooth-decay-font">Green Tea holds soothing properties that helps in reducing pigmentation & prevents acne. Soak green tea or green tea bag (2 tea bags) in boiling water for 3–4 minutes. Allow the tea to cool. Using cotton balls, apply it to skin. Allow it to dry, and then rinse with water.</p>
                                <br></br>
                                <h2 className="tooth-font">3) Moisturize With Aloe Vera </h2>
                                <p className="tooth-decay-font">Aloe Vera gel is often added to lotions, creams, ointments & soaps as a soothing ingredient that heals the acne skin. It's commonly used to treat skin conditions like abrasions, rashes & burns. Scrape the gel from the aloe plant with spoon. Apply gel directly to<a className="tag-color" href="/how-to-keep-skin-healthy"> clean skin.</a> This acts as a natural moisturizer. Repeat 1–2 times per day, or as desired.</p>
                                <br></br>
                                <h2 className="tooth-font">4) Exfoliate Regularly</h2>
                                <p className="tooth-decay-font">Exfoliation is the process of removing the top layer of dead skin cells. It can be achieved mechanically by using a brush or scrub to physically remove the cells. Alternatively, it can be removed chemically by applying an acid that dissolves them.
                            <br /><br />These home remedies for the skin can help treat burns, heal wounds and fight inflammation. It has been resulted in decrease of the anti-acne effects in case of regular following of these handy tips. Follow these steps & witness how magically your acne gets reduced. </p>
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
export default AcneComponent;