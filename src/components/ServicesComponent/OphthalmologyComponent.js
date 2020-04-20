import React, { Component } from 'react'
import '../ServicesComponent/dentist.css'
import LandingFooter from '../LandingComponent/LandingFooter'
import LandingHeader from '../LandingComponent/LandingHeader'
import { Helmet } from "react-helmet"
export default class OphthalmologyComponent extends Component {
    render() {
        return (
            <div>
                <div>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/ophthalmology" />
                    <title>Best Eye Clinic, Hospital & Specialists in Gurgaon, Plunes.</title>
                    <meta name='keywords' content='eye hospital in gurgaon, eye specialist in gurgaon, eye clinic in gurgaon, ophthalmologist in gurgaon, cataract surgery in gurgaon, lasik eye surgery in gurgaon, lasik surgery in gurgaon, Ophthalmology'></meta>
                    <meta name="description" content="Find out the best Ophthalmologists in Gurgaon. Treatment includes Cataract Eye Surgery, Injuries and trauma, Refractive errors. Get Free Consultation. Free app Download, Plunes.">
                    </meta>
                </Helmet>
                <LandingHeader />
                <br></br>
                <div className="row">
                    <div className="col-sm-1"></div>

                    <div className="col-sm-11">
                        <ul class="breadcrumb">
                            <li><a href="/" title='Home'>Home</a></li>
                            <li className="header-font2" ><a className="breadcrumb-text" href="/ophthalmology" title='Ophthalmology'>Ophthalmology</a></li>

                        </ul>
                    </div>

                </div>


                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-3">
                        <img className="dentist-image1" src="/OPHTHAMOLOGIST.png" alt=".." />
                    </div>
                    <div className="col-sm-7 view-more-align">
                        <h1 className="header-font">Ophthalmology</h1>
                        <p className="peragraph-text">Ophthalmology is a branch of medicine and surgery which deals with the diagnosis and treatment of eye disorders.
</p>
                        <p className="peragraph-text">An ophthalmologist is a medical or osteopathic doctor who specializes in eye and vision care. Ophthalmologists differ from optometrists and opticians in their levels of training and in what they can diagnose and treat.
</p>
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
                            <h3 className="header-font">1. Ophthalmology Consultation:
</h3>
                            <p className="peragraph-text">Before undergoing any eye surgery or treatment, the patient attends an ophthalmology consultation. <br></br>
                                The ophthalmologist will discuss any of the patients concerns and will examine the eyes.
                                
</p>
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">2. Cataract Eye Surgery:</p>
                            <p className="peragraph-text">
                                Cataract surgery is a procedure to remove the lens of an eye and in most cases, replace it with an artificial lens.
</p>
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">3. Oculoplasty:</p>
                            <p className="peragraph-text">Plastic surgery of the eye and for short sightedness (such as the tear ducts or eyelids)
                            
</p>
                        </div>
                        <div className="col-sm-2">
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">4. Prosthetic Eye:</p>
                            <p className="peragraph-text">
                                An ocular prosthesis, artificial eye or glass eye is a type of prosthesis that replaces short sightedness
</p>
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">5. Micro Incision Surgery:</p>
                            <p className="peragraph-text">
                                It is a procedure to remove the lens of an eye and in most cases, replace it with an artificial lens
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
                            <p className="header-font">7. Orbital Tumor Removal: </p>
                            <p className="peragraph-text">This procedure includes the process of removing tumors around the eye that may compromise your vision or eyesight.
</p>
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">8. EyePCL Treatment:</p>
                            <p className="peragraph-text">
                                Implantable Phakic contact Lens (EyePCL) is like a soft contact lens, single piece posterior chamber phakic iol, which can be inserted into the eye through sub 2.8mm incision to correct vision of the eye.
</p>
                        </div>
                        <div className="col-sm-3">
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

