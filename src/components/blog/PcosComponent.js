import React, { Component } from 'react';
import '../blog/DentalComplicationsComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class PcosComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/myths-and-reality-of-pcos" />
                    <title>Myths & Reality of PCOS: Polycystic Ovary Syndrome</title>
                    <meta name='keywords' content='pcos, pcos myths, pcos reality, pcos facts, pregnancy'></meta>
                    <meta name="description" content="How many times have you come across this term of PCOS? Let’s try to understand this condition and break the myths attached to PCOS. ">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="container-fluid dental-margin">

                    <h1 className="key-benefits">Myths & Reality of PCOS: Polycystic Ovary Syndrome</h1>

                    <div className="row">

                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/PCOS.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">How many times have you come across this term of PCOS? We are sure many times you must have asked yourself what does it means to be diagnosed with this hormonal syndrome. Let’s try to understand this condition and break the myths attached to PCOS.   
                             </p><br></br>
                            <h1 className="what-is-it">What Is Polycystic Ovary Syndrome?</h1>
                            <p className="dental-problem">Polycystic ovary syndrome is a hormonal disorder that affects millions of women. Sometimes it's called Stein-Leventhal syndrome.
                                <br/><br/>
                                PCOS creates problems with your ovaries: You might have irregular <a className="tag-color" href="how-to-remain-active-in-periods">periods</a> or no periods, and you could get cysts in a "string of pearls" pattern. PCOS, if not treated in an early stage is also a common cause of infertility. The condition can't be cured, but it can be treated and the effects can be reduced.
                                </p></div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10">
                            <h1 className="tooth-font">Reality About PCOS</h1><br/>
                            <h1 className="tooth-font">Myth 1: You are the cause </h1>
                            <p className="tooth-decay-font">While the exact cause of PCOS is still unknown to Doctors, one thing is certain: You are not to be blamed. While all women produce small amounts of androgen, those with PCOS have more androgen than normal, which can prevent ovulation and make it difficult to have regular menstrual cycles. Women whose mothers and sisters have PCOS are also likely to be affected.</p>
                            <br></br>
                            <h2 className="tooth-font">Myth 2: Losing weight helps in getting rid of PCOS </h2>
                            <p className="tooth-decay-font">Unfortunately, there is no cure for PCOS. Treatment is aimed at managing the symptoms but not completely cure it.<a className="tag-color" href="how-to-get-ride-of-post-pregnancy-weight"> Overweight women</a> can choose to workout to balance their pH levels that minimize the symptoms. Lifestyle changes, such as healthy eating and<a className="tag-color" href="key-benefits-of-daily-yoga"> regular exercise,</a> improve the regulation of your hormone levels. </p>
                            <br></br>
                            <h2 className="tooth-font">Myth 3: PCOS is a Rare Condition </h2>
                            <p className="tooth-decay-font">It is estimated that between 1 in 5 women in India (childbearing age) have PCOS. That’s about 5 million women, which makes the condition one of the most common hormonal endocrine disorders among women of reproductive age. Still, millions of women are potentially unaware of their condition.</p>
                            <br></br>
                            <h2 className="tooth-font">Myth 4: PCOS leads to no pregnancy</h2>
                            <p className="tooth-decay-font">This isn’t true for everyone. Several medications can stimulate ovulation, which is the main issue that women with PCOS face.
                            <br/><br/>
                            That's why getting into the habit of eating healthy and exercising regularly is recommended as part of the most treatment plan. By knowing the real facts & separating yourself from several myths, you can empower yourself to live a completely healthy life with PCOS.
                            </p>


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
export default PcosComponent;