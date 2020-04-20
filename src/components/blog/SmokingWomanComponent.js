import React, { Component } from 'react';
import '../ServicesComponent/TeethWhiteningComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";
class SmokingWomanComponent extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <Helmet>
                        <link rel="canonical" href="https://www.plunes.com/Mental-healthComponent" />
                        <title>What does smoking do to the health of a woman? </title>
                        <meta name='keywords' content='home remedies, home remedies for hair growth, hair growth, hair loss'></meta>
                        <meta name="description" content="It's an established fact that smokers are more likely than those who don't smoke to have several health issues and illnesses. Some of the health problems that are caused by smoking are severe, while some diseases develop over time.">
                        </meta>
                    </Helmet>
                    <div>
                        <LandingHeader />
                    </div>
                    <div className="container-fluid dental-margin">
                        <h1 className="key-benefits">What does smoking do to the health of a woman? </h1>
                        <div className="row">
                            <div className="col-sm-5">
                                <img className="dentalcompli-img" src="/blog19.png" alt=".." />
                            </div>
                            <div className="col-sm-6">
                                <p className="dental-problem">It's an established fact that smokers are more likely than those who don't smoke to have several health issues and illnesses. Some of the health problems that are caused by smoking are severe, while some diseases develop over time.
                               <br /> <br />Cigarettes do damage to all smokers in different ways, certainly. For both men and women the effects of smoking are somehow distinct. But some of the ill effects of smoking are more in women, such as ectopic pregnancy, early menopause, increased risk of reproductive conditions and disorders.
                               </p>
                            </div>
                            <div className="col-sm-1">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-10">
                                <h1 className="what-is-it">Reproductive problems</h1>
                                <p className="dental-problem">
                                    Women smokers are more likely to encounter the following problems than women who do not smoke:</p>
                                <ul className="line-height">
                                    <li className="dental-problem"> More sporadic periods</li>
                                    <li className="dental-problem">Distressing periods</li>
                                    <li className="dental-problem">Low estrogen levels</li>
                                    <li className="dental-problem">Early menopause (maybe with worse symptoms) </li>
                                    <li className="dental-problem">Complication in pregnancy </li>
                                </ul><br/>
                                <h1 className="tooth-font">Pregnancy and Smoking</h1>
                                <p className="tooth-decay-font">Compounds found in tobacco make their way through the bloodstream from pregnant females to the fetus. Tobacco's toxic chemicals are likely to cause serious risks to both the unborn baby and the mother-to-be. </p>
                                <br></br>
                                <h2 className="tooth-font">Cervical Cancer and Smoking</h2>
                                <p className="tooth-decay-font">It is recommended that sexually active females receive daily pelvic exams and pap smears. The need is even more for the females who smoke. Several studies suggest that smoking can lead to cervical cancer. Smoking females have an 80 percent (approximately) higher risk of developing cervical cancer.</p>
                                <br></br>
                                <h2 className="tooth-font">Breast Cancer and Smoking</h2>
                                <p className="tooth-decay-font">A study published by the American Cancer Society found that breast cancer risk in female smoking is at least 25 per cent higher. With the number of cigarettes smoked per day, the risk is escalating. The risk of breast cancer for women who smoke up to two or more cigarettes each day rises by 75 per cent.
                                <br /><br /> Quitting smoking decreases the risks associated with multiple illnesses and health complications. It also increases person overall health.<br /><br /> Those causes are necessary to quit smoking as an excellent choice for achieving better health and better quality of life.
                                </p>
                                <br></br>
                             </div></div>
                        </div>  
                        </div>
                <LandingFooter />
            </div>
        );
    }
}
export default SmokingWomanComponent;