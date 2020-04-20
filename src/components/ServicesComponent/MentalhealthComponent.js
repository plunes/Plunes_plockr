import React, { Component } from 'react';
import '../ServicesComponent/TeethWhiteningComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class IntoductoryblogComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/Mental-healthComponent" />
                    <title> Professional Guidance for Seeking Mental Health, Plune</title>
                    <meta name='keywords' content='Mental Health, Plunes, Psychologist in Gurgaon'></meta>
                    <meta name="description" content="Get professional guidance for those who Seeking Mental Health at an affordable rate. Plunes offer Advanced AI help to find psychotherapists in Gurgaon & know some different psychologists in Gurgaon.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="container-fluid dental-margin">

                    <h1 className="key-benefits">Seeking Mental Health?: Quick Counselling </h1>

                    <div className="row">

                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/blog6.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">Mental health is often neglected and hidden for reasons like fear of rejection from society or lack of understanding. However, at Plunes we help or users in finding the best psychologist in Gurgaon. We have a strict policy regarding the privacy and confidentiality of our users. Our advanced AI helps you in connecting with the best psychotherapist in Gurgaon at the most affordable rates.
                             </p><br></br>
                            <h1 className="what-is-it">1. Child psychologist in Gurgaon</h1>
                            <p className="dental-problem">it is not hidden that even the kids these days are highly stressed and thus even they need continuous healing therapies so that they are on the right track and cannot think of taking adverse steps. Regular sessions with a psychologist help them to cope up with their stress and anxieties.</p>

                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10">
                            <h1 className="tooth-font">2. Marriage counsellor in Gurgaon </h1>
                            <p className="tooth-decay-font">maintaining a healthy married relationship in this era is not easy and requires a lot of effort. Balancing your life as a married couple can be overwhelming and the couple may seek divorce. However, marriage is a sacred institution and thus with the help of a marriage counsellor, the couples can resolve their issues and maintain a healthy relationship. Premarital counselling is specialized counselling that offers help to people who are thinking of long-term commitment. Divorce counselling is also required to understand the causes of separation and realize the changes that will follow after divorce. Not only does a married couple needs counselling but any adult who feels stressed and toxic can take the help of a counsellor for getting free from the toxins and the negativity. Similarly, students also need such session for the acute stress and mad race that they face in their day-to-day life. </p>
                            <br></br>
                            <h2 className="tooth-font">3. Conduct disorder </h2>
                            <p className="tooth-decay-font">at times it is observed that an individual does not behave as per the appropriate age and thus needs therapy for this mental disorder.</p>
                            <br></br>
                            <h2 className="tooth-font">4. Psychological assessment </h2>
                            <p className="tooth-decay-font">there is a various spectrum to this assessment like learning disability, autism, intellectual functioning, cognitive abilities, personality disorders, neuropsychological assessment, and intelligence test. These entire tests are done so that it can be ascertained that the person is behaving as per the set norms or needs help. The above disabilities can affect a person’s logic, reasoning, learning and much more.</p>
                            <br></br>
                            <h2 className="tooth-font">5. Sleep induction </h2>
                            <p className="tooth-decay-font">maintaining a healthy married relationship in this era is not easy and requires a lot of effort. Balancing your life as a married couple can be overwhelming and the couple may seek divorce. However, marriage is a sacred institution and thus with the help of a marriage counsellor, the couples can resolve their issues and maintain a healthy relationship. Premarital counselling is specialized counselling that offers help to people who are thinking of long-term commitment. Divorce counselling is also required to understand the causes of separation and realize the changes that will follow after divorce. Not only does a married couple needs counselling but any adult who feels stressed and toxic can take the help of a counsellor for getting free from the toxins and the negativity. Similarly, students also need such session for the acute stress and mad race that they face in their day-to-day life. </p>

                            <p className="tooth-decay-font">the person.
Even people in their adolescent years need help to understand their behaviour, feelings, change in their bodies and much more. It requires that someone talks to them and ask them to express their feelings. All these counselling helps people to express their feelings and rejuvenate themselves.
<br></br><br></br>We empathize with the users who are in need of help and in real time we help them in getting the required help. There are no questions asked or any judgment made. Thus the users feel comfortable and can reach out to us for seeking help.
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
export default IntoductoryblogComponent;