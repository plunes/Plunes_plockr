import React, { Component } from 'react'
import '../ServicesComponent/dentist.css'
import LandingFooter from '../LandingComponent/LandingFooter'
import LandingHeader from '../LandingComponent/LandingHeader'
import { Helmet } from "react-helmet";


export default class NeurologyComponent extends Component {
    render() {
        return (
            <div>
                <div>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/neurology" />
                    <title>Best Nurologiest Gurgaon, India's First Utility Network, Plunes</title>
                    <meta name='keywords' content='best neurologist in gurgaon, neuro clinic gurgaon, neuro hospital gurgaon, brain treatment gurgaon, brain tumor operation gurgaon, brain tumor removal gurgaon, neuro specialist doctor gurgaon, Neurology'>
                    </meta>
                    <meta name="description" content="Looking for Best Nurologist in Gurgaon? Plunes provide all access to find the Best Neurologist near you to get consultation & treatment.">
                    </meta>
                </Helmet>
                <LandingHeader />
                <br></br>
                <div className="row">
                    <div className="col-sm-1"></div>

                    <div className="col-sm-11">
                        <ul class="breadcrumb">
                            <li><a href="/" title='Home'>Home</a></li>
                            <li className="header-font2" ><a className="breadcrumb-text" href="/neurology" title='Neurology'>Neurology</a></li>
                        </ul>
                    </div>
                </div>
                  
                        <div className="row">
                        <div className="col-sm-1">
                    </div>
                            <div className="col-sm-3">
                                <img className="dentist-image1" src="/Neurologist.png" alt=".." />
                            </div>
                            <div className="col-sm-7 view-more-align">
                                <h1 className="header-font">Neurology</h1>
                                <p className="peragraph-text">Neurology is the branch of medicine concerned with the study and treatment of disorders of the nervous system.
                                </p>
                                <p className="peragraph-text">A neurologist is a medical doctor who specializes in treating diseases of the nervous system. </p>
                            </div>
                            <div className="col-sm-1">
                            </div>
                        </div>
            <br/>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-11">
                        <h2 className="header-font align-text">Procedure</h2>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-3">
                            <h3 className="header-font">1. Neurology Consultation:
                            </h3>
                            <p className="peragraph-text">Neurology consultation is an appointment with a neurologist for the diagnosis, management, or treatment of conditions that affect the nervous system. </p>
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">2. Laser Hair Reduction:</p>
                            <p className="peragraph-text">
                                It is a procedure to close off an aneurysm. Doctor removes a section of your skull to access the aneurysm and locates the blood vessel that feeds the aneurysm. Then Doctor place a tiny metal clip on the neck of the aneurysm to stop blood flow to it. </p>
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">3. Chemotherapy:</p>
                            <p className="peragraph-text">Chemotherapy uses drugs to kill tumor cells. Chemotherapy drugs can be taken orally in pill form or injected into a vein (intravenously). The chemotherapy drug used most often to treat brain tumors is temozolomide (Temodar), which is taken as a pill.
                            </p>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">4. Brain tumor Surgery:</p>
                            <p className="peragraph-text">
                                It is a surgery to remove brain tumor.
                            </p>
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">5. Epilepsy Surgery:</p>
                            <p className="peragraph-text">
                                Epilepsy surgery is a procedure that removes or alters an area of your brain where seizures originate.
                            </p>
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">6. Laser Treatment:</p>
                            <p className="peragraph-text">
                                Laser interstitial thermal therapy (LITT) is a less invasive surgery that uses a laser to pinpoint and destroy a small portion of brain tissue.
                            </p>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">7. Deep Brain Stimulation:</p>
                            <p className="peragraph-text">Deep brain stimulation involves implanting electrodes within certain areas of your brain. These electrodes produce electrical impulses that regulate abnormal impulses.
                            </p>
                        </div>
                        <div className="col-sm-3">

                            <h2 className="header-font">8. Stereotactic Radiosurgery (SRS): </h2>
                            <p className="peragraph-text">
                                Stereotactic radiosurgery (SRS) uses many precisely focused radiation beams to treat tumors and other problems in the brain, neck, lungs, liver, spine and other parts of the body.
                            </p>
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">9. Brain Cancer Treatment: </p>
                            <p className="peragraph-text">Brain cancer can have a wide variety of symptoms including seizures, sleepiness, confusion, and behavioral changes. Treatment options include surgery, radiation therapy, chemotherapy, targeted biological agents, or a combination of these. Surgical resection (if safe) is generally the first treatment recommendation to reduce pressure in the brain rapidly.
                            </p>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                        <LandingFooter />
                    </div>
                </div>

            </div>
        )
    }
}

