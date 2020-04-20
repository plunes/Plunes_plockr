import React, { Component } from 'react';
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import Modal from 'react-modal';
import { Redirect } from 'react-router'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class CovidComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            mobileNumber: '',
            message: '',
            modalIsOpen: false,
            showThanks: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }
    componentDidMount() {
        this.setState({
            name: '',
            mobileNumber: '',
            message: ''
        })
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        })
    }


    async handleSubmit(e) {
        e.preventDefault()
        let body = {
            "name": this.state.name,
            "mobileNumber": this.state.mobileNumber,
            "message": this.state.message
        }
        let response = await axios.post("https://plunes.co/v4/notification/covidInfo", body)
            .then((res) => {
                // console.log(data);
                if (res.data.success) {
                    this.setState({
                        // modalIsOpen: true,
                        name: '',
                        mobileNumber: '',
                        message: '',
                        // showThanks : true

                    })
                    window.location.href = '/covid19-test-booked'
                }

            })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { showThanks } = this.state;

        if (showThanks) {
            return <Redirect to='/covid19-test-booked' />;
        }
        return (
            <div>
            <div className='container-fluid LandingContainer'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/covid19-test" />
                    <title>Plunes COVID-19 test - Symptoms, Prevention Guide, Book Now</title>
                    <meta name='keywords' content='Corona test, COVID test, Corona test in India, COVID test in India'></meta>
                    <meta name="description" content="Plunes have covered the ICMR approved lab & hospitals to test COVID 19 test in Gurgaon providing you with a door step service.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div></div>
                <div className = 'row covidTestForm'>
                    <div className='col-md-1'>
                    </div>
                    <div className='col-md-4'>
                    <img src="/covid2.png" alt="" className="covid2Img"></img>
                    </div>
                    <div className='col-md-1'>
                    </div>
                    <div className='col-md-4'>
                    <form onSubmit={this.handleSubmit}>
                                <div>
                                    <h4 className="covidH1">COVID-19 Test Form</h4>
                                    <h5 className="covidH2">Please fill your details</h5>
                                </div>
                                <div>
                                    <input onChange={this.handleChange} name='name' placeholder='Name' className="covidTestInput" value={this.state.name} required />
                                </div>
                                <div>
                                    <input onChange={this.handleChange} name='mobileNumber' placeholder='Mobile Number' className="covidTestInput" value={this.state.mobileNumber} required></input>
                                </div>
                                <div>
                                    <input onChange={this.handleChange} name='message' placeholder='Address' className="covidTestInput" value={this.state.message} required></input>
                                </div>
                                <button type='submit' className="bookCovidTest">Book</button>
                                <h5 className="covidH2 callOr">Call / Whatsapp: 7701805081</h5>
                            </form>
                    </div>
                    <div className='col-md-2'>

                    </div>
                </div>

                {/* <div className='covidTestForm'>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-4'>
                            <img src="/covid2.png" alt="" className="covid2Img"></img>
                        </div>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-4'>
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <h4 className="covidH1">COVID-19 Test Form</h4>
                                    <h5 className="covidH2">Please fill your details</h5>
                                </div>
                                <div>
                                    <input onChange={this.handleChange} name='name' placeholder='Name' className="covidTestInput" value={this.state.name} required />
                                </div>
                                <div>
                                    <input onChange={this.handleChange} name='mobileNumber' placeholder='Mobile Number' className="covidTestInput" value={this.state.mobileNumber} required></input>
                                </div>
                                <div>
                                    <input onChange={this.handleChange} name='message' placeholder='Address' className="covidTestInput" value={this.state.message} required></input>
                                </div>
                                <button type='submit' className="bookCovidTest">Book</button>
                            </form>
                        </div>
                        <div className='col-sm-2'></div>
                    </div>
                </div> */}
                <div className="WhyCovitTestHere">
                <div className="WhyCovidTest1">LET’s FIGHT CORONAVIRUS TOGETHER!</div><br></br>
                <h5 className="CovidContentH2">PLUNES Provides Online Booking of COVID-19 Test</h5><br></br>

                <div className="WhyCovidHeading"><u><h5 className="CovidContentH2"><b>Why Book Through Us?</b></h5></u></div><br></br>
                <div className="row">
                    <div className="col-sm-4 col-md-1 col-4 text-right">
                        <img src="./covidform1.svg" alt="" className="formImg"></img>
                    </div>
                    <div className="col-sm-8 col-md-11 col-8">
                        <b>FREE sample collection form Home</b><br></br>
                        PLUNES is helping the community to carry out COVID-19 tests based on the ICMR protocols. 
                        A certified professional will visit & collect your sample from your preferred location.
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-1 col-4 text-right">
                        <img src="./covidform2.png" alt="" className="formImg"></img>
                    </div>
                    <div className="col-sm-8 col-md-11 col-8">
                        <b>ICMR Approved Labs</b><br></br>
                        As per the ICMR guidelines for COVID-19 testing, a lab test should only be offered when prescribed by a qualified physician.
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-1 col-4 text-right">
                        <img src="./covidform3.svg" alt="" className="formImg"></img>
                    </div>
                    <div className="col-sm-8 col-md-11 col-8">
                        <b>Book a Consultation</b><br></br>
                        Having COVID-19 symptoms? You can directly book a consultation among the best-qualified physicians in Gurgaon at up to 50% OFF negotiated prices.
                    </div>
                </div>

                <div className="WhyCovidHeading"><u><h5 className="CovidContentH2"><b>What is COVID-19?</b></h5></u></div><br></br>
                <div>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. <b><u>Common symptoms</u></b> are like: 
                    <b> cough, fever, and in more severe cases, difficulty breathing.</b> 
                </div><br></br>
                <div>Remember to protect yourself by often washing your hands,
                     avoid touching your face, and also avoid the close contact (1 meter or 3 feet) with someone who is unwell.
                </div><br></br>
                <div className="WhyCovidHeading"><h5 className="CovidContentH2"><u><b>Prevention Guidelines:</b></u></h5></div><br></br>
                <div>How to avoid getting infected with COVID-19;</div><br></br>
                <div>A) Practice social distancing</div>
                <ul>
                    <li>Stay at home as much as possible</li>
                    <li>Avoid touching surfaces like door handles, chair, table tops etc.</li>
                    <li>Avoid gatherings at public places</li>
                    <li>Avoid physical contact like holding hands, hugs or handshake</li>
                    <li>Maintain a safe distance of at least 3 feet when you are in public area</li>
                </ul> 
                <br></br>
                <div>B) Practice a proper hygiene</div>
                <ul>
                    <li>Frequently wash your hands with soap</li>
                    <li>Keep using hand sanitizer where there is no soap</li>
                    <li>Prefer to sneeze/cough into your bent elbow rather than your palm </li>
                </ul>
                <br></br>
                <div className="WhyCovidHeading"><u><h5 className="CovidContentH2"><b>How it Works?</b></h5></u></div>
                <ul>
                    <li>To book for a home sample collection you need to get a valid prescription and Form 44 by a qualified physician,</li>
                    <li>Trained professionals wearing a safety shield bodysuit be sent to collect samples at your mentioned location.</li>
                    <li>As directed by Government, partnered labs have the rights to share your COVID-19 report with authorized government bodies, if needed.</li>
                    <li>As per the guidelines shared by Govt of India. Concerned Lab will share your reports within 48 hours.</li>
                </ul>
                <div className="WhyCovidHeading"><u><h5 className="CovidContentH2"><b>Important Links</b></h5></u></div>
                <ul>
                    <li><a href="https://icmr.nic.in/node/39071">https://icmr.nic.in/node/39071</a></li>
                    <li><a href="https://www.mohfw.gov.in/">https://www.mohfw.gov.in/</a></li>
                    <li><a href="https://www.mygov.in/covid-19/">https://www.mygov.in/covid-19/</a></li>
                    <li><a href="https://ncdc.gov.in/index4.php?lang=1&level=0&linkid=127&lid=432">https://ncdc.gov.in/</a></li>
                </ul>
                </div>

                <div>
                    <LandingFooter />
                </div>
            </div>
            </div>
       
        );
    }
}

export default CovidComponent;