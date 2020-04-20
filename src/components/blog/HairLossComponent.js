import React, { Component } from 'react';
import '../blog/DentalComplicationsComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class HairLossComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/hair-loss-treatment" />
                    <title>Hair Loss Treatment: No Products Way</title>
                    <meta name='keywords' content='hair loss treatment, hair loss, no products, hair treatment'></meta>
                    <meta name="description" content="Are you tired of trying all the best products? Or getting tired of different dermatologist’s advice? & if nothing has worked out yet, maybe the answer to your entire hair loss problem has been lying in your kitchen all this while.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="container-fluid dental-margin">

                    <h1 className="key-benefits">Hair Loss Treatment: No Products Way</h1>

                    <div className="row">

                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/blog26.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">Are you tired of trying all the best products? Or getting tired of different dermatologist’s advice? & if nothing has worked out yet, maybe the answer to your entire hair loss problem has been lying in your kitchen all this while.   
                             </p><br></br>
                            <h1 className="what-is-it">Aloe Vera Hair Mask</h1>
                            <p className="dental-problem">Trust Aloe Vera to come to the rescue. Aloe Vera acts as an effective home remedy for hair loss. It also boosts<a className="tag-color" href="/best-home-remedies-of-hair-growth"> hair growth</a> & improves the<a className="tag-color" href="how-to-keep-skin-healthy"> skin</a> of your scalp. Just extract the pulp of the plant & apply it directly to the scalp. You can also apply on the length of your hair. Leave it for about 45 minutes before rinsing it with cold or lukewarm water. Do not use hot water.</p>

                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10">
                            <h1 className="tooth-font">Coconut Hair Spa</h1>
                            <p className="tooth-decay-font">Proteins present in Coconut Milk can rapidly promote hair growth. This is probably one of the best hair loss home remedies. All you gotta do to be apply fresh Coconut Milk to your scalp, ideally with the help of a shampoo hair brush. Keep your head covered in a hot towel for 15-20 minutes & then wash it off with cold water.</p>
                            <br></br>
                            <h2 className="tooth-font">Green Tea Rinse </h2>
                            <p className="tooth-decay-font">Yup! That cup of Green Tea which wakes you up every morning can also bring back life to your dead locks. Green Tea can make an excellent ingredient for hair growth. Dip 2-3 tea bags in two cups of hot water. Now pour this cooled mixture over your hair. Now, gently massaging at the roots, before rinsing off.</p>
                            <br></br>
                            <h2 className="tooth-font">Amla Hair Pack</h2>
                            <p className="tooth-decay-font">Amla, or the Indian Gooseberry, is one of the best natural hair loss treatments; this beauty also prevents premature hair graying. Mix a paste of Amla-powder & Lime juice & apply it on your scalp. Avoid the mask from drying by covering your head with a shower cap & then wash it as usual with cold or lukewarm water.</p>
                            <br></br>
                            <h2 className="tooth-font">Brahmi</h2>
                            <p className="tooth-decay-font">Brahmi (which is also known as ‘Gotu Kola’) is one of the most rejuvenating promoters of hair growth. Its herbal qualities not only contribute in strengthening hair follicles but also<a className="tag-color" href="how-to-reduce-dandruff-by-ayurvadic-ways"> reduce hair fall.</a> Mix Brahmi & amla powder with coconut oil. Then apply the paste to your scalp. Within a week you will notice the changes that your hair will show. 
                            <br/><br/>
                            It’s time to dig through your cooking cabinets & make the most out of these effective home remedies to treat hair fall. </p>


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
export default HairLossComponent;