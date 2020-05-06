import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'
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

class PlockrProfileEditComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: localStorage.getItem('uploaderUserId'),
            reportId: '',
            patientMobileNumber: '',
            problemAreaDiagnosis: '',
            reasonDiagnosis: '',
            consumptionDiet: '',
            avoidDiet: '',
            precautions: '',
            medicines: '',
            remarks: '',
            showLogin: false,
            modalIsOpen: false,
            speciality: '',
            reportName: '',
            test: '',
            specialities: []
        }
        this.handleLogout = this.handleLogout.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            reportId: this.props.data.id,
            reportName: this.props.data.fileName
        })
        let specialities = JSON.parse(localStorage.getItem('specialities'))
        let speciality = specialities.filter((s) => {
            if (s.name === 'Radiologists' || s.name === 'Pathologists') {
                return true
            } else {
                return false
            }
        })
        this.setState({
            specialities: speciality
        })
    }

    handleLogout(e) {
        e.preventDefault();
        let token = localStorage.getItem('auth');
        axios.post('https://plunes.co/v4/user/logout', "", { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } })
            .then((response) => {
                localStorage.removeItem('auth');
                localStorage.removeItem('isAuth');
                localStorage.removeItem('uploaderUserId');
                this.setState({
                    showLogin: true
                })
            })
            .catch(error => {
                console.log(error, 'error')
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        let body = {
            userId: this.state.userId,
            self: false,
            reportId: this.state.reportId,
            // specialityId: this.state.speciality,
            // patientMobileNumber: this.state.patientMobileNumber.trim(),
            // problemAreaDiagnosis: this.state.problemAreaDiagnosis,
            reasonDiagnosis: this.state.reasonDiagnosis,
            // consumptionDiet: this.state.consumptionDiet,
            // avoidDiet: this.state.avoidDiet,
            // precautions: this.state.precautions,
            // medicines: this.state.medicines,
            remarks: this.state.remarks,
            // reportName: this.state.reportName,
            // test: this.state.test,
        }
        // console.log(body, 'body')
        let token = localStorage.getItem('auth')
        axios.put('https://plunes.co/v4/report', body, { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } })
            .then(res => {
                this.setState({
                    modalIsOpen: true
                })
            })
            .catch((e) => {
                console.log(e)
                alert('Not Sent!!! Please Check Plunes Patient Phone Number ....')
            }
            )
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { showLogin } = this.state;
        if (showLogin) {
            return <Redirect to={{
                pathname: "/plockrapp",
            }} />;
        } else {
            return (
                <div className='container-fluid'>
                    <div className='row profile-row-align '>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel="Example Modal">
                            {/* <h2 style={{ fontSize: '11px' }} ref={subtitle => this.subtitle = subtitle}>Hello</h2> */}
                            <div className='row'>
                                <div className='col-md-2'>
                                </div>
                                <div className='col-md-8'>
                                    <h1 className="form-model-align">Your report has been sent succesfully.</h1>
                                </div>
                                <div className='col-md-2'>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                </div>
                                <div className='col'>
                                    <a type='button' className="btn model-button2" href='/plockr-dashboard'>OK</a>
                                </div>
                                <div className='col'>
                                </div>
                            </div>
                        </Modal>
                        <div className='col-md-2'>
                        </div>
                        <div className='col-md-10'>
                            <form onSubmit={this.handleSubmit}>
                                {/* <div className="form-group selectSpeciality">
                                    <select className="form-control plockr-app-form" onChange={this.handleChange} name='speciality' required >
                                        <option value=''>Speciality</option>
                                        {
                                            this.state.specialities.map((speciality, index) => (
                                                <option value={speciality.id} key={index}>{speciality.name}</option>
                                            ))
                                        }
                                    </select>
                                </div><br></br> */}
                                <div className='row'>
                                   
                                        {/* <div className="form-group">
                                            <textarea className="form-control plockr-app-form" placeholder="Report Name" name='reportName' onChange={this.handleChange} value={this.state.reportName}></textarea>
                                        </div><br></br> */}
                                        <div className="form-group col-lg-6 col-md-6">
                                            <textarea className="form-control plockr-app-form" placeholder="Diagnosis" name='reasonDiagnosis' onChange={this.handleChange}></textarea>
                                        </div><br />
                                        <div className="form-group col-lg-6 col-md-6">
                                            <textarea className="form-control plockr-app-form" placeholder="Remarks" name='remarks' onChange={this.handleChange}></textarea>
                                        </div><br /> 
                                        <div className="form-group col-lg-6 col-md-6">
                                       <textarea className="form-control plockr-app-form" placeholder="123-45-678" rows="2" name='phone' onChange={this.handleChange}></textarea>
                                      </div><br></br>
                                        {/* <div className="form-group">
                                            <textarea className="form-control plockr-app-form" placeholder="Enter Patient's Mobile Number" name='patientMobileNumber' onChange={this.handleChange} required></textarea>
                                        </div><br></br> */}
                                        {/* <div className="form-group">
                                            <textarea className="form-control plockr-app-form" placeholder="Problem Area (Diagnosis)" name='problemAreaDiagnosis' onChange={this.handleChange} ></textarea>
                                        </div><br></br> */}
                                        {/* <div className="form-group">
                                            <textarea className="form-control plockr-app-form" placeholder="Precautions" name='precautions' onChange={this.handleChange}></textarea>
                                        </div><br></br> */}
                                        <div className='col-md-6'>
                                        <button type="submit" className="btn profile-button pstion_sb">Submit</button>
                                        </div>
                                        <div className='col-md-6'>
                                        <a className="btn profile-button2 display-inline" href='/plockr-dashboard'>Cancel</a>
                                        </div>
                                       
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default PlockrProfileEditComponent;