import React, { Component } from 'react';
import '../ServicesComponent/TeethWhiteningComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class AllergiesTypeComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/Mental-healthComponent" />
                    <title>Allergies: Types, Causes & Healthy Tips </title>
                    <meta name='keywords' content='allergies, allergies types, healthy tips, allergy causes'></meta>
                    <meta name="description" content="An allergy is an exaggerated reaction by the immune system in response to exposure to certain foreign materials. The response is exaggerated because these foreign materials are normally seen as trigger warning by our immune system.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="container-fluid dental-margin">

                    <h1 className="key-benefits">Allergies: Types, Causes & Healthy Tips </h1>
                    <div className="row">

                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/blog03.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">An allergy is an exaggerated reaction by the immune system in response to exposure to certain foreign materials. The response is exaggerated because these foreign materials are normally seen as trigger warning by our immune system
                             </p><br/>
                            <h1 className="what-is-it">Cause: </h1>
                            <p className="dental-problem">In allergic individuals, the body produces foreign substances. These allergy producing substances are called "allergens." 

                          <br/><br/>     A person with certain allergy develops a specific type of antibody called immune-globulin E, or IgE in response to certain normally harmless foreign substances, such as cat dander, pollen, or foods etc. Once IgE is formed, it can recognize the allergen and can hence triggers an allergic response.</p>

                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10">
                        <h1 className="tooth-font">Types With Healthy Tips:</h1><br/>
                            <h1 className="tooth-font">1) Allergic rhinitis (Hay Fever)</h1>
                            <p className="tooth-decay-font">Allergic Rhinitis (Hay Fever) is the most common type of the allergic disease and are also referred as nasal symptoms. </p>
                            
                            <h1 className="tooth-font"> Healthy Tip:</h1>
                            <p className="tooth-decay-font">Spritz eye drops in your eyes and use nasal sprays. Having herbal tea and yogurt also reduces the symptoms.</p>
                            <br/>
                            <h2 className="tooth-font">2) Allergic eyes (Conjunctivitis):</h2>
                            <p className="tooth-decay-font">Allergic eyes (conjunctivitis) are inflammation of the tissue layers (membranes) that cover the under surface of the eyeball.</p>
                            <h1 className="tooth-font"> Healthy Tip:</h1>
                            <p className="tooth-decay-font">During eye infection, do not wear contact lenses. Protect your eyes from foreign materials such as dusts, by wearing sunglasses regularly.</p>
                            <br></br>
                            <h2 className="tooth-font">3) Hives (Urticaria) </h2>
                            <p className="tooth-decay-font">Hives (urticaria) are skin reactions that appear as red-itchy welts and can occur on any part of the body. Short-lived hives are often due to an allergic reaction to a food or medication.</p>
                            <h1 className="tooth-font"> Healthy Tip:</h1>
                            <p className="tooth-decay-font">Use mild body lotions or antiseptic creams over it. Apply cold washcloth and take a comfortably cool bath</p>
                            <br></br>
                            <h2 className="tooth-font">4) Environmental Allergy</h2>
                            <p className="tooth-decay-font">In case of environmental allergies one gets allergic reaction commonly sneezing or itchy skin by an insect sting or being near to a cat’s fur. The symptoms and conditions depend largely on the route of entry & the type of allergen. Airborne pollen for example, tend to have little effect on the skin. </p>
                            <h1 className="tooth-font"> Healthy Tip:</h1>
                            <p className="tooth-decay-font">Always wear a mask if nearby animals that can trigger your allergic reactions. 

                               <br/>Following these healty tips will surely keep you away from stubborn allergies that interferes your daily lifestyle</p>
                          
                           </div></div>


                         </div>  </div>
                <LandingFooter />
            </div>
        );
    }
}
export default AllergiesTypeComponent;