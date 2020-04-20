import React, { Component } from 'react';
import '../ServicesComponent/CareersComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";
import axios from 'axios'
import Modal from 'react-modal';

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
class CareersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            mobileNo: '',
            file: null,
            email: '',
            modalIsOpen: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({ modalIsOpen: true });
    }
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    handleChange(e) {
        if (e.target.name === 'file') {
            this.setState({
                file: e.target.files[0]
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('file', this.state.file)
        axios.post("https://plunes.co/v4/upload", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    let userData = {
                        name: this.state.fullname,
                        email: this.state.email,
                        mobileNumber: this.state.mobileNo,
                        filename: res.data.filename
                    }
                    axios.post('https://plunes.co/v4/notification/resume', userData)
                        .then(res => {
                            this.setState({
                                modalIsOpen: true
                            })
                            document.getElementById('fileinput').value = null;
                            this.setState({
                                fullname: '',
                                mobileNo: '',
                                email: ''
                            })
                        })
                }
            })
    }
    render() {
        return (
            <div className='container-fluid  '>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/careers/" />
                    <title>Careers at Plunes India's First Utility Network </title>
                    <meta name='keywords' content='dream job, we are looking for you, plunes, career'></meta>
                    <meta name="description" content="Check out the Careers at Plunes Get your dream job.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className='container-fluid '>
                    <div className='row justify-content-center'>
                        <h1 className="ploker-header">CAREER</h1>
                    </div>
                    <div className='row career-align'>
                        <div className='col-md-1'>
                        </div>
                        <div className='col-sm-5'>
                            <img className="career-img" src="/careers.png" alt=".." />
                        </div>
                        <div className='col-sm-4'>
                            <div className='row'>
                                <div className='row'>
                                    <h2 className="we-believe">We believe that Dream Job is not a myth!</h2>
                                    <h3 className="we-believe-in">We believe in creating a world that inspires ease of life!</h3>
                                </div>
                                <div className='row'>
                                    <p className="career-pera">
                                        It isn’t every organization that seeks to change the face of the business world. This takes exceptional technology along with exceptional people. That’s where you come in!<br></br><br></br>
                                        We are seeking talented individuals who thrive on innovation, focus and teaming up. If this rings a bell then we are looking for you!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-1'>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <h2 className="what-we-have">What we have for you</h2>
                    </div>
                    <hr width="7%"></hr>
                    <div className="row career-grid">
                        <div className="col-sm-1 ">
                        </div>
                        <div className="col-sm-2 full-life-alin col">
                            <img className="img-width1" src="/building_green.png" alt=".." />
                            <p className="img-font2">Full-of-life <br></br>Office</p>
                        </div>
                        <div className="col-sm-2 grid-box-align col">
                            <img className="img-width" src="/people.png" alt=".." />
                            <p className="img-font2">Working with a <br></br>talented team
                            </p>
                        </div>
                        <div className="col-sm-2 grid-box-align col">
                            <img className="img-width" src="/earth.png" alt=".." />
                            <p className="img-font2">The satisfaction<br></br> of building something<br></br> Phenomenal
                            </p>
                        </div>
                        <div className="col-sm-2 grid-box-align col">
                            <img className="img-width" src="/largest.png" alt=".." />
                            <p className="img-font2">Largest pool of <br></br>ESOPs reserved for<br></br> employees
                            </p>
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <h2 className="career-header">Our 5-stage Recruitment Process</h2>
                    </div>
                    <hr width="7%"></hr>
                    <div className="row careers-grid2">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-2 col">
                            <img className="img-width2" src="/mssg.png" alt=".." />
                            <p className="img-font">Review
                            </p>
                            <p className="careers-content">
                                We review all the awesome applications to screen for a variety of criteria.
                            </p>
                        </div>
                        <div className="col-sm-2 col">
                            <img className="img-width2" src="/tele.png" alt=".." />
                            <p className="img-font">Telephonic Interview
                            </p>
                            <p className="careers-content">
                                We conduct initial introduction so that we can know how amazing you are.
                            </p>
                        </div>
                        <div className="col-sm-2 col">
                            <img className="img-width2" src="/notepad.png" alt=".." />
                            <p className="img-font">Task
                            </p>
                            <p className="careers-content">
                                We give a small but relevant task to judge your technical caliber.
                            </p>
                        </div>
                        <div className="col-sm-2 col">
                            <img className="img-width2" src="/f2f_green.png" alt=".." />
                            <p className="img-font" >F2F Interview
                            </p>
                            <p className="careers-content">
                                You made it through the toughest. Let’s meet for coffee!
                            </p>
                        </div>
                        <div className="col-sm-2 col ">
                            <img className="img-width2" src="/offer.png" alt=".." />
                            <p className="img-font">Offer
                            </p>
                            <p className="careers-content">
                                We make the job offer to the selected one who is the best fit for the role.
                            </p>
                        </div>
                        <div className="col-sm-1 col">
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <h1 className="what-we-have">Current Openings</h1>
                    </div>
                    <hr width="7%"></hr>
                    <div className="container-fluid">
                        <div className="row careers-grid3">
                            <div className="col-sm-3">
                                <div className="box">
                                    <p className="box-text">Software Engineer</p>
                                    <p className="box-content">Gurugram | 1-8 Years</p>
                                    <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn career-button">View job details</button>
                                </div>
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModal"><p className="softwareeng">Software Engineer</p></h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <ul>
                                                    <li className="ablity">Bachelor's degree in Computer Science, similar technical field of study, or equivalent practical experience.</li>
                                                    <br></br><li className="ablity">Experience in software development using one or more general purpose programming languages, including but not limited to C/C++, C#, JavaScript, Node.JS, React, GOLANG, AWS, Machine Learning & Artificial Intelligence.</li>
                                                    <br></br><li className="ablity">Experience working with two or more from the following: web or mobile application development (IOS/Android), Unix/Linux environments, Database Management, natural language processing, Security software development, Algorithm & Data Structure.</li>
                                                    <br></br><li className="ablity">You will be getting once in a lifetime opportunity to work on 3D software modeling that will change the course of the health-tech industry and will provide instant health solutions to millions of people.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="box">
                                    <p className="box-text">Business Development Executive</p>
                                    <p className="box-content">Gurugram | 1-3 Years</p>
                                    <button type="button" data-toggle="modal" data-target="#example" className="btn career-button">View job details</button>
                                </div>
                                <div class="modal fade" id="example" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="example"><p className="business">Business Development Executive</p></h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <ul>
                                                    <br></br><li className="ablity">Conduct market research to identify selling possibilities and evaluate customer needs.</li>
                                                    <br></br><li className="ablity"> Actively seek out new sales opportunities through cold calling, networking and social media.</li>
                                                    <br></br><li className="ablity">Set up meetings with potential clients and ultimately meeting them.</li>
                                                    <br></br><li className="ablity">Prepare and deliver appropriate presentations on products and services.</li>
                                                    <br></br><li className="ablity">Create frequent reviews and reports with sales and financial data.</li>
                                                    <br></br><li className="ablity">Participate on behalf of the company in exhibitions or conferences.</li>
                                                    <br></br><li className="ablity">Negotiate/close deals and handle complaints or objections.</li>
                                                    <br></br><li className="ablity">Collaborate with team members to achieve better results.</li>
                                                    <br></br><li className="ablity">Gather feedback from customers or prospects and share with internal teams.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="box">
                                    <p className="box-text">Marketing Intern</p>
                                    <p className="box-content">Gurugram | Internship</p>
                                    <button type="button" data-toggle="modal" data-target="#exampleModal3" className="btn career-button">View job details</button>
                                    <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModal3"><p className="markwareeng">Marketing Intern</p></h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <ul>
                                                        <br></br><li className="ablity">Bachelors/Master's degree in a related field, or equivalent.</li>
                                                        <br></br><li className="ablity">Want to gain client-facing experience in marketing (offline & online), internet products or startups.</li>
                                                        <br></br><li className="ablity">Capable of working in an entrepreneurial capacity and/or managing a product's launch from beginning to end.</li>
                                                        <br></br><li className="ablity">Leadership qualities, team player, Skilled in MS office. Excellent communication skills.</li>
                                                        <br></br><li className="ablity">Proven ability to develop New, Creative, Innovative & Phenomenal ways to execute the Business and distribution strategies.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="box">
                                    <p className="box-text">Business Development Intern</p>
                                    <p className="box-content">Gurugram | Internship</p>
                                    <button type="button" data-toggle="modal" data-target="#Modal4" className="btn career-button">View job details</button>
                                </div>
                                <div class="modal fade" id="Modal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel"><p className="bus-int">Business Development Intern</p></h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <ul>
                                                    <li className="ablity">Conduct market research to identify selling possibilities and evaluate customer needs. </li>
                                                    <br></br><li className="ablity">Actively seek out new sales opportunities through cold calling, networking and social media.</li>
                                                    <br></br><li className="ablity">Set up meetings with potential clients and ultimately meeting them.</li>
                                                    <br></br><li className="ablity">Prepare and deliver appropriate presentations on products and services.</li>
                                                    <br></br><li className="ablity">Collaborate with team members to achieve better results.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row box-align">
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-10">
                            <p className="if-u"><b>If you don’t find any relevant position here, don’t worry. We are always looking for talent. Send us our resume and we will be happy to review it.</b></p>
                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <div className="row justify-content-center ">
                        <h3 className="career-header">Submission Form</h3>
                    </div>
                    <hr width="7%"></hr>
                    <div className="container career-table-align">
                        <form onSubmit={this.handleSubmit}>
                            <table width="100" className="table table-bordered table-responsive-sm">
                                <tr>
                                    <th className="career-td"><h6>Name</h6></th>
                                    <th ><input className="form-control-contactus" value={this.state.fullname} name="fullname" placeholder="Enter Name" onChange={this.handleChange} required /></th>
                                </tr>
                                <tr>
                                    <td className="career-td">Phone Number</td>
                                    <td><input className="form-control-contactus" value={this.state.mobileNo} name="mobileNo" placeholder="Mobile Number" onChange={this.handleChange} required />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="career-td">Email Id</td>
                                    <td> <input className="form-control-contactus" value={this.state.email} name="email" placeholder="Enter Email Id" onChange={this.handleChange} required />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="career-td">Attach Resume</td>
                                    <td>
                                        <input type="file" name='file' onChange={this.handleChange} title="Choose a file please" id='fileinput' required />
                                        <label className="lable">(.doc, .docx, .pdf, .jpeg only)</label>
                                    </td>
                                </tr>
                            </table>
                            <button type="submit" className="btn carers-button">Submit</button>
                        </form>
                    </div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal">
                        <div>
                            <h3 className="form-model-align">Your Application has <br></br>been submitted</h3>
                        </div>
                        <button className="btn modle-button" onClick={this.closeModal}>close</button>
                    </Modal>
                    <div className="row justify-content-center">
                        <h2 className="career-header">Employment Policy</h2>
                    </div>
                    <hr width="7%"></hr>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <p className="if-u">Plunes's policy is to provide equal employment opportunities to all applicants and employees without regard to race, color, religion, creed, gender, gender identity or expression, age, national origin or ancestry, citizenship, disability, sexual orientation, marital status, pregnancy, veteran status, membership in the uniformed services, genetic information, or any other basis protected by applicable law. Plunes follows all legal and government regulations including those set forth by The Government of India.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <h1 className="career-header">Disclaimer</h1>
                    </div>
                    <hr width="7%"></hr>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <p className="if-u">Our careers site is only for individuals seeking a position with Plunes Technologies Pvt. Ltd. Staffing and recruiting agencies and individuals being represented by an agency are not authorized to use this site or to submit profiles, applications, or resumes, and any such submissions will be considered unsolicited. Plunes does not accept unsolicited resumes or applications from agencies. Please do not forward resumes to our job alias, Plunes employees, or any other company location. Plunes is not responsible for any fees related to unsolicited resumes/applications.
                        <br></br>
                                Any offer (s) of employment are contingent upon a satisfactory background and criminal records check, which will be conducted in accordance with local legal regulations.</p>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </div>
                <LandingFooter />
            </div>
        );
    }
}
export default CareersComponent;