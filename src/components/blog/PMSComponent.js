import React, { Component } from 'react';
import '../blog/DentalComplicationsComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class PMSComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/prementrual-syndrome-preventionsand-guide" />
                    <title>Premenstrual Syndrome (PMS): Symptoms and Preventions Guide</title>
                    <meta name='keywords' content='pms, pmsing, menstrual, mood swings, premenstrual syndrome, preventions, mentrual guide'></meta>
                    <meta name="description" content="Premenstrual syndrome (PMS) has a wide range of signs and symptoms, including mood swings, tender breasts, food cravings, tiredness, irritability, and depression; It is estimated that as many as three of every four menstruating women have had some form of premenstrual syndrome.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="container-fluid dental-margin">

                    <h1 className="key-benefits">Premenstrual Syndrome (PMS): Symptoms and Prevention Guide</h1>

                    <div className="row">

                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/PMS.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">Premenstrual syndrome (PMS) has a wide range of signs and symptoms, including mood swings, tender breasts, food cravings, tiredness, irritability, and depression; It is estimated that as many as three of every four menstruating women have had some form of premenstrual syndrome.
                            <br/><br/>And you don't have to let your life rule over these issues. Treatments and changes to the lifestyle will help you reduce or control the premenstrual syndrome signs and symptoms.
                             </p><br></br>
                            <h1 className="what-is-it">Emotional & Behavioral Symptoms:</h1>
                            <p className="dental-problem">
                            The list of potential signs and symptoms for premenstrual syndrome is long, but most women only experience a few of these problems such as:
                                </p></div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10">
                            <ul style={{lineHeight:'37px'}}>
                                <li className="tooth-decay-font">Tension or<a className="tag-color" href="what-to-do-when-anxiety-gets-in-your-way"> anxiety</a></li>
                                <li className="tooth-decay-font">Depressed mood</li>
                                <li className="tooth-decay-font">Mood swings and <a className="tag-color" href="how-to-manage-anger">irritability or anger</a></li>

                            </ul>
                            <h1 className="tooth-font">How to deal with PMSing? </h1>
                            <ul style={{lineHeight:'40px'}}>
                                <li className="tooth-font">1) Exercise:</li>
                                <p className="tooth-decay-font">Regular Exercise can help with symptoms such as depression, difficulty concentrating, and fatigue.</p>
                                <li className="tooth-font">2) Choose healthy food:</li>
                                <p className="tooth-decay-font">In the two weeks before your<a className="tag-color" href="how-to-remain-active-in-periods"> period,</a> avoiding foods and drinks containing caffeine, salt, and sugar can lessen many symptoms of PMS. Learn more about women eating healthy.</p>
                                <li className="tooth-font">3) Sleep enough:</li>
                                <p className="tooth-decay-font">Try to sleep about eight hours each night. Depression and anxiety are related to <a className="tag-color" href="how-to-get-better-sleep">lack of sleep</a> and can intensify PMS symptoms such as moodiness.</p>
                                <li className="tooth-font">4) Don’t smoke:</li>

                                <p className="tooth-decay-font"> Researchers have found <a className="tag-color" href="/how-does-smoking-effects-woman's-health">women who smoked</a> reported more or worse PMS symptoms than women who did not smoke.</p>
                            
                            </ul><br/>
                            <p className="tooth-decay-font">It is important to consider PMSing as normal. It can happen to any woman but it’s crucial to follow the mentioned steps to balance the level of your emotions.</p>


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
export default PMSComponent;