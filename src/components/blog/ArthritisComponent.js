import React, { Component } from 'react';
import '../ServicesComponent/TeethWhiteningComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class ArthritisComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/Mental-healthComponent" />
                    <title>Arthritis: Lifestyle tips for managing symptoms </title>
                    <meta name='keywords' content='arthritis, lifestyle tips, arthritis tips, arthritis symptoms'></meta>
                    <meta name="description" content="Can lifestyle changes help you manage your rheumatoid arthritis (RA) symptoms? Arthritis is not a particular illness; it is an informal way of referring to joint or joint pain.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="container-fluid dental-margin">

                    <h1 className="key-benefits">Arthritis: Lifestyle tips for managing symptoms </h1>
                    <div className="row">

                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/blog07.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">Can lifestyle changes help you manage your rheumatoid arthritis (RA) symptoms? 
"Arthritis" is not a particular illness; it is an informal way of referring to joint or joint pain.

<br/><br/>There are over 100 different types of arthritis and related conditions. Arthritis can and do people of all ages, sexes and races and it is the leading cause of disability. Its vital to keep in check the common arthritis joint symptoms include swelling, pain, stiffness and decreased range of motion.

<br/><br/>This article shows you 4 simple lifestyle tips that will help you deal with chronic joint pain & fatigue RA symptoms.


                             </p>
                            <h1 className="what-is-it">1)  Don't pass over sleep.</h1>
                            <p className="dental-problem">Sleep is essential to your physical & mental well-being. It is essential to sleep at-least 7-8 hours in a day. Researchers have said people with arthritis should keep their sleep cycle in check as your body is also regenerating & repairing itself during sleep. </p>

                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10">
                            <h1 className="tooth-font">2) Eat an anti-inflammatory diet.</h1>
                            <p className="tooth-decay-font">In addition to base your diet on fruits, vegetable try adding foods that contain omega-3s, such as salmon & olive oil. These foods have an anti-inflammatory effect. It can also lower overall inflammation levels in your body. </p>
                            <br></br>
                            <h2 className="tooth-font">3) Learn how to manage your stress.  </h2>
                            <p className="tooth-decay-font">Stress can increase RA symptoms, so that's why you need to find ways that work to manage it. There are numerous stress management techniques. Some common ones are deep breathing & meditation.</p>
                            <br></br>
                            <h2 className="tooth-font">4) Make room for moderate exercise. </h2>
                            <p className="tooth-decay-font">The golden ticket when it comes to living well with rheumatoid arthritis is regular, low-impact exercise.

        <br/>Exercises can significantly alleviate RA symptoms.

        <br/>Arthritis pain if handled carefully can be treated with time. With the implementation of the above steps, it is ensured that the symptoms can be minimized to a curable level.   

  </p>
                            <br></br>
                           </div></div>


            </div>  </div>
                <LandingFooter />
            </div>
        );
    }
}
export default ArthritisComponent;