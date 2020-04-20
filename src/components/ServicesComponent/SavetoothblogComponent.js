import React, { Component } from 'react';
import '../ServicesComponent/TeethWhiteningComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class SavetoothblogComponent extends Component {
    render() {
        return (
            <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/Save-toothblogComponent" />
                    <title>Dentist in Gurgaon-Save Tooth, Plunes, Tooth Scaling, Whitening & more</title>
                    <meta name='keywords' content='Dentist in Gurgaon, Plunes, Tooth Scaling, Tooth whitening '></meta>
                    <meta name="description" content="Check out the leading Dentist in Gurgaon. know the ways for finding the dentist for tooth extraction, tooth whitening, tooth scaling etc available at Plunes.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="container-fluid dental-margin">

                    <h1 className="key-benefits">Save Your Tooth with the Best Dentist in Gurgaon</h1>

                    <div className="row">

                        <div className="col-sm-5">
                            <img className="dentalcompli-img" src="/blog7.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="dental-problem">Any pain or dirt in the tooth can simply affect your smile and overall well-being. For all your dental and oral health you need to consult a dentist. It is that branch of study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity. Dentists are specialists in treating, and preventing oral health. They also provide proper guidance for the promotion of oral health.<br></br>
                                Plunes has the most advanced AI that can help you in connecting with the best dentist in Gurgaon at the most affordable rates in a location near you. We can help you in finding the dentists for the procedure like:</p>
                            <h1 className="what-is-it">Tooth extraction in Gurgaon</h1>
                            <p className="dental-problem">if there is decay or cavity in the tooth than that tooth needs to be extracted. Only a specialist with the best equipment can complete this task.</p>

                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10">
                            <h1 className="tooth-font">Tooth whitening in Gurgaon</h1>

                            <p className="tooth-decay-font">crystal shiny pearl-like teeth are a dream and getting this set of teeth is a dream come true. It enhances your look and overall personality. It is a process whereby with the help of a chemical all the stains from the tooth surface are removed and the natural colour of the tooth is restored.</p>

                            <br></br>
                            <h1 className="tooth-font">RCT in Gurgaon </h1>
                            <p className="tooth-decay-font">it is a treatment sequence for the infected pulp of the tooth that can help in the elimination of infection and protection of the contaminated tooth from future attacks of germs and microbes.</p>
                            <br></br><h1 className="tooth-font">Tooth scaling in Gurgaon</h1>
                            <p className="tooth-decay-font">tooth scaling or polishing is a procedure whereby the teeth are cleaned. They are not polished but only the layers of yellow deposits, cavity, or calcium deposits are removed to give you shiny clean teeth.</p>
                               <br></br>
                               <h1 className="tooth-font">Soft tissue graft </h1>
                              <p className="tooth-decay-font">it is a procedure to take care of receding gums. The gums are taken from the roof and stitched to the area where the gum recession has occurred.
                             </p><br></br>
                              <h1 className="tooth-font"> Bone graft</h1>
                                < p className="tooth-decay-font">  in case of any gum disease if your bone gets destroyed then this procedure can help you. Here the dentist uses a fragment of synthetic bones to replace the destroyed bone.
                               </ p> <br></br><h1 className="tooth-font"> Flap surgery</h1>
                                    < p className="tooth-decay-font">here the dentist makes an incision on the gums to remove the tartar. Even if there is any irregularity on the surface of bone it is smoothed. The gap between the tooth and gum is also removed.
                                 </p><br></br>
                                 <h1 className="tooth-font">Smile makeovers </h1>
                                 <p className="tooth-decay-font">
                              it is a procedure where the appearance of the smile is improved through cosmetic or surgical means. It also includes the procedure of veneers and composite bonding. In the two processes, a thin tooth material or shell is fixed on the tooth to change the appearance, colour, shape, and size. The treatment also comprises of advanced treatment of traditional bridges, cantilever bridges, and Maryland bonded bridges.
                                 </p><br></br>
                                 <h1 className="tooth-font"> Crown</h1>
                                 < p className="tooth-decay-font">if the tooth has been damaged or decayed the dentist can hide it with the help of a cap. The cap so used can be of gold, acrylic resins, porcelain or ceramic.
                             <br></br><br></br>
                                Plunes is aware and connected with all the renowned and trustworthy dentists in Gurgaon, and thus can help you connect with the best dentist for any dental service that you need.</p>
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



                </div>
                </div>
                <LandingFooter />
            </div>
        );
    }
}
export default SavetoothblogComponent;