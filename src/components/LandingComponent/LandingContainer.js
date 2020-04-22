import React from 'react';
import './Landing.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import { Redirect } from 'react-router'
import { Helmet } from "react-helmet";
import Modal from 'react-modal';
// import comp_2 from "../../images/comp_2.mp4"
// import comp_1 from "../../images/comp_1.mp4"
// import comp_3 from "../../images/cvid.webm"
import Consultations from "../../images/Consultations.png"
import Solu from "../../images/Solu.png"

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',    
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class LandingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.root = props.root;
        this.state = {
            mobileNo: '',
            countryCode: '',
            filter: '',
            emailid: '',
            password: '',
            proceduresList: [],
            selectedData: [],
            docList: [],
            showDropdown: false,
            showDiv: false,
            showSelectedProcedures: false,
            showSignup: false,
            name:'',
            email:'',
            mobileNumber: '',
            modalIsOpen : false,
            showModalForm : true
            // redirect: true
        };
        this.baseUrl = 'https://plunes.co/v3/'
        this.data = [];
        this.selectedProcedures = [];
        this.showForm = false;
        this.handleChange = this.handleChange.bind(this);
        this.sendAppLink = this.sendAppLink.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal =  this.closeModal.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    async handleSubmit(e){
        e.preventDefault()
        let body = {
            "name" : this.state.name,
            "mobileNumber" :  this.state.mobileNumber,
            "message" : this.state.message
        }
        let response = await axios.post("https://plunes.co/v4/notification/covidInfo", body)
        .then((res) => {
            // console.log(data);
            if(res.data.success){
                this.setState({
                    showModalForm :  false
                })
            }
            
        })
    }
    openModal(){
        this.setState({
            modalIsOpen : true
        })
    }

    closeModal(){
        this.setState({
            modalIsOpen : false
        })
    }

    async sendAppLink(e) {
        console.log("Inside SendAppLink")
        e.preventDefault()
        let response = await axios.get("https://plunes.co/v4/notification/applink/" + this.state.mobileNo)
            .then(({ data }) => {
                // console.log(data);
                if (data.err) {
                    //message.error(data.msg);
                    console.log(data.err)
                }
                else {
                    console.log(data)
                    // console.log('anshul')
                    // console.log(data)
                    this.setState({
                        mobileNo: '',
                    })

                }
            })
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    render() {
        // const { isAuth } = this.root;
        const { showSignup } = this.state
        if (showSignup) {
            return <Redirect to='/sign-up/' />;
        }
        return <Router>
            <div className="container-fluid LandingContainer">
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com" />
                    <title>India's First Utility Network - Plunes</title>
                    <meta name="description"
                        content="Looking for Hospitals/Doctors Near you? Check out India's First Uitility Network, Book an appointment, with free Consultation.  Download the Free app Plunes." />
                    <meta name="keywords" content="India's first utility network, utility network, plunes, book an appointment, download app, hospitals near you, doctors near you, book instantly, free consultation, dental clinic in gurgaon, orthodontist in gurgaon, gynecologist in gurgaon, gynecology clinic gurgaon, psychologist in gurgaon, psychotherapist in gurgaon, hair transplant clinic in gurgaon, radiologist in gurgaon, ivf in gurgaon, ayurvedic clinic in gurgaon, child specialist in gurgaon, pediatrician in gurgaon, pathology in gurgaon, biopsy test in gurgaon, orthopedics doctor in gurgaon, ent specialist in gurgaon, ent surgeon in gurgaon, eye hospital in gurgaon, ophthalmologist in gurgaon, dermatologist in gurgaon, best neurologist in gurgaon, neuro hospital in gurgaon, corona test, corona test only, corona treatment equipment, corona testing hospitals, covid testing delhi, corona swab test in delhi, covid 19 test in Gurgaon, covid 19 swab test in delhi">
                    </meta>
                </Helmet>
                {/* <!-- <banner-start> --> */}
                <section className="covid_bnr">
                <div className="container-fluid ">
                <div className="covid">
                <div className="row CovidContent">
                    <div className="col-sm-1 col-1"></div>
                    <div className="col-sm-6 col-9 col-lg-6 covid_mar">
                        <p className="covidInfo1">COVID-19 Test now available
                            <br/> with PLUNES!</p>
                        <p className="covidPara">Upto <b>50%</b> off in public interest!</p>
                        <p className="covidPara">Home Collection Available, No Hassle!</p>
                        <p className="covidPara lastPara">24/7 Helpline No. : <b>+91-7701805081</b></p><a href="/covid19-test" className="covidTest">Book now</a></div>
                    <div className="col-sm-5 col-2"></div>
                </div>
            </div>
            </div>
            </section>
          {/* <!-- <banner-end> --> */}

                <section className="network_marg">
                        <div className="container">
                        <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1 className="utility_network">Welcome to India's First Utility Network</h1>
                            <p className="Unique_avail">Experiene our Unique AI & Avail upto 50% off on all your Medical Procedures, <br/>Diagnostics & Appointments</p>
                        </div>
                        </div>
                        </div>
                </section>


                <section className="map_sec">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 video_sec">
                        <div  id="video-container" >
                        <iframe 
                        width="560"
                        height="315" 
                        src="https://www.youtube.com/embed/sITYg1awTPE" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>

                        </iframe>
                         {/* <source src="./video/cvid.webm" type='video/webm;codecs="vp8, opus"'/>
                         <source src="./video/cvid.mp4" type='video/mp4;codecs="avc1.4D401E, mp4a.40.2"'/>    */}
                        </div>
                        {/* <iframe src={comp_2}> </iframe> */}
                        </div>
                        </div>
                    </div>
                </section>



                <section className="mobile_app">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-4 connsultin_im offset-lg-1">
                            <img src={Consultations} className="first_fone" />
                            <img src={Solu} className="second_fone" />
                            </div>
                            <div className="col-lg-7">
                            <div className="book_madical">
                                <p>Book Medical Procedures, Appointments & Tests</p>
                                <h4>Download Plunes <br />App Now!</h4>
                                <a href="#" className="get_link">Get link to download the app</a>
                                <div className="number_of_app">
                                <div class="cntry_cde">+91</div>
                                    <input type="tel" id="phone" name="phone" value={this.state.mobileNo} onChange={(e)=>this.setState({mobileNo:e.target.value})} placeholder="Mobile Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required className="country_nu" />
                                    <a href="#" onClick= {(e)=>this.sendAppLink(e)} className="explore_field">Get App Link</a>
                                </div>
                                <div class="play_store">
                                <a href="https://apps.apple.com/us/app/plunes/id1463747553/"target="_blank" title="app store"> 
                                    <img class="download-play" src="/app-store.png" alt=".."/></a>
                                    <a href="https://play.google.com/store/apps/details?id=com.plunes&amp;hl=en_IN/" target="_blank" title="play store"> 
                                    <img class="download-play2" src="/Play-store.png" alt=".."/></a>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
         </section>


         <section class="why_plunes">
        <div className="container">
          <div className="plunes_brd">
            <hr className="black_bordr" />
            <h2>Why Plunes?</h2>
            </div>
          <div className="row text-center">
            <div className="col-lg-4 col-12 refund_im">
              <div className="bg_colur">
                <a href="#"> <img src="refunpayment.svg"/></a>
              </div>
            <div className="refund_pay">
                <a href="#"><h2>100% Refundable <br/>Payment</h2></a>
                </div>
            </div>
            <div className="col-lg-4 col-6 refund_im">
              <div className="bg_colur">
                <a href="#"><img src="firstconsu.png"/></a>
            </div>
              <div className="refund_pay">
                <a href="#"><h2>First Consultation<br/> Free</h2></a>
                </div>
            </div>
            <div className="col-lg-4 col-6 refund_im">
              <div className="bg_colur">
                <a href="#"><img src="prefeared.svg"/></a>
              </div>
              <div className="refund_pay">
                <a href="#"><h2>Preferred Timing as <br/>Per Your Availability</h2></a>
                </div>
            </div>
          </div>
          
          <div className="row text-center margin_icn mobile_re">
            <div className="col-lg-4 col-6 refund_im">
              <div className="bg_colur">
              <a href="#"><img src="makepart.svg"/></a>
              </div>
              <div className="refund_pay">
                <a href="#"> <h2>Make Partial<br/> Payments</h2></a>
                </div>
            </div>
            <div className="col-lg-4 col-6 refund_im">
              <div className="bg_colur">
                <a href="#"><img src="freetelphonic.png"/></a>
            </div>
              <div className="refund_pay">
                <a href="#"><h2>Free Telephonic <br/>Consultations</h2></a>
                </div>
            </div>
          
          </div>
          </div>
      </section>
         {/* <div className='covid'>
                    <div className="row CovidContent">
                        <div className="col-sm-1 col-1"></div>
                        <div className="col-sm-6 col-9">
                            <p className="covidInfo1">COVID-19 Test now available <br></br> with PLUNES!</p>
                            <p className="covidPara">Upto <b>50%</b> off in public interest!</p>
                            <p className="covidPara">Home Collection Available, No Hassle!</p>
                            <p className="covidPara lastPara">24/7 Helpline No. : <b>+91-7701805081</b></p>
                            <a href="/covid19-test" className="covidTest">Book now</a>
                        </div>
                        <div className="col-sm-5 col-2"></div>
                    </div>
                </div> */}
        
                
                <div className="bg_sect_pro">
                <div class="kno_more text-center">
                <h3>Know more about your Procedure</h3>
                </div>
                    <div className="main-content">
                        <div class="container">
                        <div className="owl-carousel owl-theme" id="owl-demo">
                            <div className="item">
                                <a href="/dermatology" title='Dermatology Procedures'>
                                    <div className="card" >
                                    <div class="trendingBox">
                                        <img className=" card-align" src="/Dermatology.png" alt=".." />
                                        <div class="overlay">
                                           </div>
                                        </div>
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Dermatology Procedures</h2>
                                            <p className="card-text2">Dermatology Consultation <br></br> Laser Hair Reduction <br></br> Botox Treatment</p>
                                            <a href="/dermatology" class="card_a">View more</a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/gynae" title='Gynecology Procedures'>
                                    <div className="card" >
                                    <div class="trendingBox">
                                        <img className="card-align" src="/Gynecology.png" alt=".." />
                                        <div class="overlay">
                                           </div>
                                        </div>
                                        <div className="card-body ">
                                            <h2 className="card-title2">Gynecology Procedures</h2>
                                            <p className="card-text2">Gynecologist Consultation<br></br>Cesarean / C-section <br></br>Ovarian Cyst Removal</p>
                                            <a href="/gynae" class="card_a">View more</a>
                                        </div>
                                    </div></a>
                            </div>
                            <div className="item">
                                <a href="/radiology" title='Radiology Diagnosis'>
                                    <div className="card" >
                                    <div class="trendingBox">
                                        <img className="card-align" src="/Radiologists@2x.png" alt=".." />
                                        <div class="overlay">
                                           </div>
                                        </div>
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Radiology Diagnosis</h2>
                                            <p className="card-text2">MRI, CT Scan, X-ray<br></br> Ultrasound <br></br>Doppler Test</p>
                                            <a href="/radiology" class="card_a">View more</a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/dentist" title='Dentistry Procedures'>
                                    <div className="card" >
                                    <div class="trendingBox">
                                        <img className=" card-align" src="/Dentistry.png" alt=".." />
                                        <div class="overlay">
                                           </div>
                                        </div>
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Dentistry Procedures</h2>
                                            <p className="card-text2">Tooth Removal, Tooth Whitening<br></br>Root Canal Treatment<br></br>Dental Implant, Braces</p>
                                            <a href="/dentist" class="card_a">View more</a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/pathology" title='Pathology Tests'>
                                    <div className="card" >
                                    <div class="trendingBox">
                                        <img className=" card-align" src="/pathology.png" alt=".." />
                                        <div class="overlay">
                                           </div>
                                        </div>
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Pathology Tests</h2>
                                            <p className="card-text2">Complete Blood Count Test<br></br>LIPID Profile<br></br>HIV Test</p>
                                            <a href="/pathology" class="card_a">View more</a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='item'>
                                <a href="/orthopedics" title='Orthopedic Procedures'>
                                    <div className="card" >
                                    <div class="trendingBox">
                                        <img className=" card-align" src="/Ortho.png" alt=".." />
                                        <div class="overlay">
                                           </div>
                                        </div>
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Orthopedic Procedures</h2>
                                            <p className="card-text2">Joint Replacement<br></br>Fracture<br></br>Arthroplasty</p>
                                            <a href="/orthopedics" class="card_a">View more</a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='item'>
                                <a href="/ent" title='ENT Procedures'>
                                    <div className="card" >
                                    <div class="trendingBox">
                                        <img className=" card-align" src="/entproc.png" alt=".." />
                                        <div class="overlay">
                                           </div>
                                        </div>
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">ENT Procedures</h2>
                                            <p className="card-text2">Ear Drum Repair<br></br>Tonsillectomy<br></br>Sinusitis Treatment</p>
                                            <a href="/ent" class="card_a">View more</a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='item'>
                                <a href="/ayurveda" title='Ayurveda Procedures'>
                                    <div className="card" >
                                    <div class="trendingBox">
                                        <img className=" card-align" src="/ayurveda.png" alt=".." />
                                        <div class="overlay">
                                           </div>
                                        </div>
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Ayurveda Procedures</h2>
                                            <p className="card-text2">Dhara Treatment<br></br>Panchkarma Treatment<br></br>Ayurvedic Massage</p>
                                            <a href="/ayurveda" class="card_a">View more</a>
                                        </div>
                                    </div>
                                </a>

                            </div>

                            <div className='item'>
                                <a href="/physiotherapy" title='Physiotherapy Procedures'>
                                    <div className="card" >
                                    <div class="trendingBox">
                                        <img className=" card-align" src="/close-up-physiotherapist-working-with-patient-clinic_1150-15063.png" alt=".." />
                                        <div class="overlay">
                                           </div>
                                        </div>
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Physiotherapy</h2>
                                            <p className="card-text2">Physiotherapy Consultation<br></br>Back Pain/Knee Pain<br></br>Frozen Shoulder</p>
                                            <a href="/physiotherapy" class="card_a">View more</a>
                                        </div>
                                    </div>
                                </a>

                            </div>

                            <div className='item'>
                                <a href="/psychiatry" title='Psychiatry Procedures'>
                                    <div className="card" >
                                    <div class="trendingBox">
                                        <img className=" card-align" src="/Psychology.png" alt=".." />
                                        <div class="overlay">
                                           </div>
                                        </div>
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Psychiatry</h2>
                                            <p className="card-text2">Psychiatric Consultation<br></br>Autism Assessment<br></br>Counseling</p>
                                            <a href="/psychiatry" class="card_a">View more</a>
                                        </div>
                                    </div>
                                </a>

                            </div>

                            <div className='item'>
                                <a href="/ophthalmology" title='Ophthalmology Procedures'>
                                    <div className="card" >
                                    <div class="trendingBox">
                                        <img className=" card-align" src="/Ophthalmology.png" alt=".." />
                                        <div class="overlay">
                                           </div>
                                        </div>
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Ophthalmology</h2>
                                            <p className="card-text2">Ophthalmology Consultation<br></br>Cataract Surgery<br></br>Glaucoma Surgery</p>
                                            <a href="/ophthalmology" class="card_a">View more</a>
                                        </div>
                                    </div>
                                </a>

                            </div>

                            <div className='item'>
                                <a href="/neurology" title='Neurology Procedures'>
                                    <div className="card" >
                                    <div class="trendingBox">
                                        <img className=" card-align" src="/Neurologists@2x.png" alt=".." />
                                        <div class="overlay">
                                           </div>
                                        </div>
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Neurology</h2>
                                            <p className="card-text2">Neurology Consultation<br></br>Chemotherapy <br></br>Brain Tumor Surgery</p>
                                            <a href="/neurology" class="card_a">View more</a>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>
                        <div className="owl-theme">
                            <div className="owl-controls">
                                <div className="custom-nav owl-nav"></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
{/* slider-section-end */}
<section class="we_have">
    <div class="container">
        <div class="plunes_brd">
            <hr class="black_bordr" />
            <h2>We Have</h2>
        </div>
        <div class="row text-center">
            <div class="col-lg-4 col-12 col-md-4">
                <div class="we_hsection">
                    <a href="#"> <img src="procedure.svg" /></a>
                </div>
                <div class="we_content">
                    <a href="#"><h2>20000 +</h2></a>
                    <p>Procedures</p>
                </div>
            </div>
            <div class="col-lg-4 col-6 col-md-4">
                <div class="we_hsection">
                    <a href="#"><img src="doctors.svg" /></a>
                </div>
                <div class="we_content">
                    <a href="#"><h2>1000 +</h2></a>
                    <p>Doctors</p>
                </div>
            </div>
            <div class="col-lg-4 col-6 col-md-4">
                <div class="we_hsection">
                    <a href="#"><img src="hospital.svg" /></a>
                </div>
                <div class="we_content">
                    <a href="#"><h2>300 +</h2></a>
                    <p>Hospitals</p>
                </div>
            </div>
        </div>
    </div>
</section>




                {/* <div className="container download-area">
                    <h1 className="h11">Book instantly from top doctors/hospitals near you</h1>
                    <div className="row">
                        <div className="col-sm-6 ">
                            <img className="download-app-pic" src="/Category.png" alt=".." />
                            <img className="download-app-pic2" src="/mobail.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="download-text"> Download Plunes App Now! </p>
                            <p className="download-text2">Book Medical Procedures, Appointments & Tests </p>
                            <p className="download-text3">Get link to download the app</p>
                            <div className="download-link-app">
                                <form onSubmit={this.sendAppLink}>
                                    <span><input disabled value={this.state.countryCode ? this.state.countryCode : '+91'} onChange={this.handleChange} name='countryCode' className="number-text2" maxLength="3" data-fv-numeric="true" data-fv-numeric-message="Please enter your numbers" data-fv-phone-country11="IN" required="required" data-fv-notempty-message="This field cannot be left blank." placeholder="+91" data-fv-field="data[User][mobile]"></input></span>
                                    <span><input id="UserMobile" value={this.state.mobileNo} className="number-text" maxLength="10" data-fv-numeric="true" data-fv-numeric-message="Please enter your numbers" data-fv-phone-country11="IN" required="required" data-fv-notempty-message="This field cannot be left blank." placeholder="Mobile No " name='mobileNo' onChange={this.handleChange}></input></span>
                                    <button type='submit' className="btn btn-primary button-view button-align">Get App Link</button>
                                </form>
                            </div>
                            <span> <a href="https://apps.apple.com/us/app/plunes/id1463747553/" title="app store"> <img className="download-logo" src="/app-store.png" alt=".." /></a></span>
                            <span><a href="https://play.google.com/store/apps/details?id=com.plunes&hl=en_IN/" title="play store"> <img className="download-logo2" src="/Play-store.png" alt=".." /></a></span>
                        </div>
                    </div>
                </div><br></br> */}
                {/* <div className='container-fluid why-plunes'>
                    <h1 className="header"> Why Plunes?</h1>
                    <div className='row'>
                        <div className='col-sm-1 why-plunes'></div>
                        <div className='col-sm-6'>
                            <ul className="why-plunes-align">
                                <li><img className="why-plunes-img" src='/payment-refundable.png' alt=".."></img><span className="pencil">100% Refundable Payment </span></li>
                                <li><img className="why-plunes-img" src='/availability.png' alt=".."></img><span className="pencil">Preferred Timing as Per Your Availability</span></li>
                                <li><img className="why-plunes-img" src='/free-telephonic.png' alt=".."></img><span className="pencil">Free Telephonic Consultations</span></li>
                            </ul>
                        </div>
                        <div className='col-sm-4'>
                            <ul className="pencil-ul why-plunes-align">
                                <li><img className="why-plunes-img" src='/first_consultation.png' alt=".."></img><span className="pencil">First Consultation Free</span></li>
                                <li><img className="why-plunes-img" src='/partial-payments.png' alt=".."></img><span className="pencil">Make Partial Payments</span></li>
                            </ul>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                </div> */}
                {/* <div>
                    <hr width="70%"></hr>
                </div> */}
                {/* <div>
                    <div>
                        <p className="header2"></p>
                    </div>
                    <div className="container-fluid download-area">
                        <div className="container-fluid middle-container">
                            <div className="row" >
                                <div className=" col-sm-4">
                                    <div className="item bootstrap-card">
                                        <div className="card ">
                                          
                                            <img className="card-item-top" src="/physiotherapy.png" alt=".." />
                                        
                                            <div class="card-body">
                                                <h3 className="card-title ">Physiotherapy</h3>
                                                <p className="card-text">Physiotherapy Consultation <br></br>Back Pain/Knee Pain <br></br>Frozen Shoulder</p>
                                                <a href="/physiotherapy" className="btn btn-primary button-view" title='Physiotherapy Consultation'>view more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="item bootstrap-card" >
                                        <div className="card">
                                            <img className="card-item-top" src="/PSYCHIATRISTS.png" alt=".." />
                                            <div className="card-body ">
                                                <h3 className="card-title ">Psychiatry</h3>
                                                <p className="card-text">Psychiatric Consultation<br></br>Autism Assessment <br></br> Counseling</p>
                                                <a href="/psychiatry" className="btn btn-primary button-view" title='Psychiatric Consultation'>view more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="item bootstrap-card">
                                        <div className="card">
                                           
                                            <img className="card-item-top" src="/OPHTHAMOLOGIST.png" alt=".." />
                                           
                                            <div className="card-body ">
                                                <h3 className="card-title">Ophthalmology</h3>
                                                <p className="card-text">Ophthalmology Consultation<br></br>Cataract Surgery <br></br>Glaucoma Surgery</p>
                                                <a href="/ophthalmology" className="btn btn-primary button-view" title='Ophthalmology Consultation'>view more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" >
                                <div className=" col-sm-4">
                                    <div className="item bootstrap-card">
                                        <div className="card">
                                            
                                            <img className="card-item-top" src="/Neurologist.png" alt=".." />
                                        
                                            <div className="card-body">
                                                <h3 className="card-title">Neurology</h3>
                                                <p className="card-text">Neurology Consultation <br></br>Chemotherapy <br></br>Brain Tumor Surgery</p>
                                                <a href="/neurology" className="btn btn-primary button-view" title='Neurology Consultation'>view more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="item bootstrap-card">
                                        <div className="card">
                                            
                                            <img className="card-item-top" src="/PEDIATRICIAN.png" alt=".." />

                                            <div className="card-body">
                                                <h3 className="card-title">Pediatry</h3>
                                                <p className="card-text">Pediatric Consultation <br></br>Vaccination <br></br>Heart Murmur Treatment</p>
                                                <a href="/pediatrics" className="btn btn-primary button-view" title='Pediatric Consultation'>view more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="item bootstrap-card">
                                        <div className="card">
                                            <img className="card-item-top" src="/ivf.png" alt=".." />
                                            <div className="card-body ">
                                                <h3 className="card-title ">IVF</h3>
                                                <p className="card-text">Laparoscopic IVF <br></br>Ovarian Reserve Assessment<br></br>Semen Analysis</p>
                                                <a href="/ivf" className="btn btn-primary button-view" title='Laparoscopic IVF'>view more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="h13">Long gone are the days of waiting in the queue!</h2>
                            <div className="row">
                                <h3 className="header2">Save Time, Save Money!</h3>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </Router >
    }
}
export default LandingContainer
