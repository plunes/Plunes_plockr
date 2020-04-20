import React, { Component } from 'react'
import '../ServicesComponent/dentist.css'
import LandingFooter from '../LandingComponent/LandingFooter'
import LandingHeader from '../LandingComponent/LandingHeader'
import { Helmet } from "react-helmet";

export default class ENTComponent extends Component {
    render() {
        return (

            <div>
                <div>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/dentist"/>
                    <title>Best ENT Specialists in Gurgaon, India's First Utility Network, Plunes</title>
                    <meta name='keywords' content='ent, ent treatments, ear surgery, snoring surgery, ent doctors, ent specialists'></meta>
                    <meta name="description" content="Search for the desired ENT procedure such as cataract, nasal endoscopy, ear micro surgery etc & avail upto 50% discount.">
                    </meta>
                </Helmet>
                <LandingHeader />
                <br></br>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-11">
                        <ul className="breadcrumb">
                            <li><a href="/" title='Home'>Home</a></li>
                            <li className="header-font2"><a className="breadcrumb-text" href="/ent" title='ENT'>ENT</a></li>
                        </ul>
                    </div>
                </div>
                   
                        <div className="row">
                        <div className="col-sm-1">
                    </div>
                            <div className="col-sm-3">
                                <img className="dentist-image" src="/ent.png" alt=".." />
                            </div>
                            <div className="col-sm-7 view-more-align">
                                <h1 className="header-font">ENT</h1>
                                <h3 className="peragraph-text">A complete ENT examination includes inspection of the face, ears, nose, throat and neck. Commonly performed for patients with complaints of hearing loss, ringing in the ears, or balance disorders. 
                                </h3>
                                <p className="peragraph-text">An ENT Doctor is a medical specialist who is concerned with the diagnosis & treatment of disorders of the head & neck, including particularly the ears, nose, and throat. </p>
                            </div>
                            <div className="col-sm-1">
                            </div>
                        </div>
                     </div>
                    <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-11">
                            <h1 className="header-font align-text">Procedure</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">1. Nasal Endoscopy:</h2>
                            <p className="peragraph-text">Nasal endoscopy is a procedure to look at the nasal and sinus passages. It's done with an endoscope. </p>
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">2. Ear Microsurgery:</h2>
                            <p className="peragraph-text">
                            The microscope enlarges the view of the ear structures sufficiently so the surgeon can perform the treatment needed very delicately. 
                              </p>
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">3. Tympanoplasty:</h2>
                            <p className="peragraph-text">It is the surgical operation performed for the reconstruction of the eardrum (tympanic membrane) and/or the small bones of the middle ear.</p>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">4. Snoring Surgery:</h2>
                            <p className="peragraph-text">
                            When snoring is present without obstructive sleep apnea, it is called primary snoring.
                              </p>
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">5. Salivary Gland Surgery:</h2>
                            <p className="peragraph-text">
                            Your salivary glands make saliva, which helps your body digest food and keeps your mouth moist. Most of your saliva comes from your parotid, submandibular, and sublingual glands.                            </p>
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">6. Neck Tumour:</h2>
                            <p className="peragraph-text">A lump on the neck, also known as the neck mass.. </p>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-3">
                            <h3 className="header-font">7. Ear Drum Repair:</h3>
                            <p className="peragraph-text">Eardrum repair is a surgical procedure used to fix a hole or tear in the eardrum.</p>
                        </div>
                        <div className="col-sm-3">
                            <h3 className="header-font">8. Vocal Cord Treatment:</h3>
                            <p className="peragraph-text">
                            Treatment may include voice therapy, bulk injections, surgery or a combination of treatments. </p>                        </div>
                        <div className="col-sm-3">
                            <h3 className="header-font">9. Vocal cord Repositioning:</h3>
                            <p className="peragraph-text">In this procedure, a surgeon moves a window of your own tissue from the outside of your voice box inward, pushing the paralyzed vocal cord toward the middle of your voice box.
                          </p>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div> <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">10. Ear Lobe Correction:
                                </h2>
                            <p className="peragraph-text">
                            Earlobe repair ideals with the correction, repair, and reshaping of earlobes per ear that have been split, stretched, or are oversized                             </p>
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">11. Split Earlobe Repair:
                                </h2>
                            <p className="peragraph-text">
                            Torn earlobes are caused when earrings get caught and rip completely through the earlobe.                             </p>
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">12. Stretched Earlobe Repair:
                                </h2>
                            <p className="peragraph-text">
                            Stretched earlobe repair is usually recommended when the use of ear stretchers have enlarged the holes in the ear.                            </p>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div> <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">13. Tonsillectomy:</h2>
                            <p className="peragraph-text">
                            Tonsillectomy is a surgical procedure in which both palatine tonsils are fully removed from the back of the throat. The procedure is mainly performed for recurrent throat infections and obstructive sleep apnea.                            </p>
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">14. Congenital Ear Problem Treatment:</h2>
                            <p className="peragraph-text">Treatment for congenital ear anomalies which is based on the type of anomaly being treated.
                            </p>
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">15. Eardrum Rupture Treatment:</h2>
                            <p className="peragraph-text">Surgery used to repair or replace the three tiny bones behind the eardrum.
                           </p>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div> <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">16. Nosebleed Treatment:</h2>
                            <p className="peragraph-text">Minimally invasive surgery can isolate and repair a blood vessel that is the cause of bleeding.
                             </p>
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">17. Nasal Septum Surgery:</h2>
                            <p className="peragraph-text">
                            Surgical procedure to correct a deviated septum.                            </p>
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">18. Sinusitis Treatment:</h2>
                            <p className="peragraph-text">Sinus surgery using a nasal endoscope is recommended procedure for people with chronic sinusitis.
                           </p>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div> <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-3">
                            <h2 className="header-font">19. Vertigo Treatment:
                                </h2>
                            <p className="peragraph-text">
                            Most of the time, vertigo resolves without treatment, as the brain can compensate for changes to the inner ear to restore someone's balance.                            </p>
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">20. Cochlear Implants:</p>
                            <p className="peragraph-text">A cochlear implant is a small, complex electronic device that can help to provide a sense of sound to a person who is profoundly deaf or severely hard-of-hearing.
                             </p>
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">21. Immunotherapy:
                                </p>
                            <p className="peragraph-text">
                            Immunotherapy, also called biologic therapy, is a type of cancer treatment that boosts the body's natural defences to fight cancer. It uses substances made by the body or in a laboratory to improve, target, or restore immune system function.                            </p>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div> <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">22. Foreign Body Removal Ear:</p>
                            <p className="peragraph-text"> Most ear and nose foreign bodies can be removed by a skilled physician in the office with minimal risk of complications. </p>
                        </div>
                       </div>
                       <div>
                       <div><LandingFooter/></div>
                    </div>
                </div>
            </div>
        )
    }

}
