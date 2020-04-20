import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'
import Modal from 'react-modal';
// import MDBFileupload from 'mdb-react-fileupload';
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

class PlockrProfileComponent extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.user.specialities)
        this.state = {
            name: this.props.user ? this.props.user.name : 'General user',
            email: this.props.user ? this.props.user.email : 'generaluser@plunes.com',
            userId: localStorage.getItem('uploaderUserId'),
            patientMobileNumber: this.props.user ? this.props.user.mobileNumber : '',
            problemAreaDiagnosis: '',
            reasonDiagnosis: '',
            consumptionDiet: '',
            avoidDiet: '',
            precautions: '',
            medicines: '',
            remarks: '',
            file: null,
            showLogin: false,
            modalIsOpen: false,
            speciality: '',
            reportName: '',
            test:'',
            specialities : this.props.user ? this.props.user.specialities : [],
            imgUrl: this.props.user ? this.props.user.imageUrl : 'https://profile-image-plunes.s3.amazonaws.com/profilephotos/default_img.png'
        }
        this.handleLogout = this.handleLogout.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const data = new FormData();
        data.append('file', this.state.file)
        axios.post("https://plunes.co/v4/upload", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    let body = {
                        userId: this.state.userId,
                        self: false,
                        specialityId: this.state.speciality,
                        patientMobileNumber: this.state.patientMobileNumber,
                        problemAreaDiagnosis: this.state.problemAreaDiagnosis,
                        reasonDiagnosis: this.state.reasonDiagnosis,
                        consumptionDiet: this.state.consumptionDiet,
                        avoidDiet: this.state.avoidDiet,
                        precautions: this.state.precautions,
                        medicines: this.state.medicines,
                        remarks: this.state.remarks,
                        reportName: this.state.reportName,
                        test: this.state.test,
                        reportUrl: "https://plunes.co/v4/" + res.data.path
                    }
                    let token = localStorage.getItem('auth')
                    axios.post('https://plunes.co/v4/report', body, { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } })
                        .then(res => {
                            this.setState({
                                modalIsOpen: true
                            })
                        })
                }
            })
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

    render() {
        const { showLogin } = this.state;
        if (showLogin) {
            return <Redirect to={{
                pathname: "/plockrapp",
            }} />;
        } else {
            return (
                <div className='container-fluid'>
                    <div className="container-fluid">
                        <div className="navbar navbar-expand-lg navbar-light ">
                            <a href="/"> <img className="logo-img-sizeing" src="/logo.png" alt=".." /></a>
                        </div>
                    </div>
                    <div className='row profile-row-align'>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel="Example Modal">
                            <h2 style={{ fontSize: '11px' }} ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                            <div>
                                <h1 className="form-model-align">Form Successfully Submitted</h1>
                            </div>
                            <a type='button' className="btn model-button2" href='/plockrapp'>OK</a>
                        </Modal>
                        <div className='col-sm-3'>
                        </div>
                        <div className='col-sm-6'>
                            <div className='row'>
                                <div className='col-sm-2'>
                                    <img src={this.state.imgUrl} height='auto' width='100px' alt='No image available'/>
                                </div>
                                <div className='col-sm-10'>
                                    <h1>{this.state.name}</h1>
                                    <p>{this.state.email}</p>
                                </div>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group ">
                                    <select className="form-control plockr-app-form" onChange={this.handleChange} name='speciality' required >
                                        <option value=''>Speciality</option>
                                        {
                                            this.state.specialities.map((speciality, index) => (
                                            <option value={speciality.id} key={index}>{speciality.name}</option>
                                            ))
                                        }
                                    </select>
                                </div><br></br>
                                <div className="form-group">
                                    <textarea className="form-control plockr-app-form" placeholder="Report Name" rows="2" name='reportName' onChange={this.handleChange} ></textarea>
                                </div><br></br>
                                <div className="form-group">
                                    <textarea className="form-control plockr-app-form" placeholder="Problem Area (Diagnosis)" rows="2" name='problemAreaDiagnosis' onChange={this.handleChange} ></textarea>
                                </div><br></br>
                                <div className="form-group">
                                    <textarea className="form-control plockr-app-form" placeholder="Diagnosis" rows="2" name='reasonDiagnosis' onChange={this.handleChange}></textarea>
                                </div><br></br>
                                <div className="form-group">
                                    <textarea className="form-control plockr-app-form" placeholder="Medicine" rows="2" name='medicines' onChange={this.handleChange}></textarea>
                                </div><br></br>
                                <div className="form-group">
                                    <textarea className="form-control plockr-app-form" placeholder="Test" rows="2" name='test' onChange={this.handleChange}></textarea>
                                </div><br></br>
                                <div className="form-group">
                                    <textarea className="form-control plockr-app-form" placeholder="Consumption (Diet)" rows="2" name='consumptionDiet' onChange={this.handleChange}></textarea>
                                </div><br></br>
                                <div className="form-group">
                                    <textarea className="form-control plockr-app-form" placeholder="Avoid (Diet)" rows="2" name='avoidDiet' onChange={this.handleChange}></textarea>
                                </div><br></br>
                                <div className="form-group">
                                    <textarea className="form-control plockr-app-form" placeholder="Precautions" rows="2" name='precautions' onChange={this.handleChange}></textarea>
                                </div><br></br>
                                <div className="form-group">
                                    <textarea className="form-control plockr-app-form" placeholder="Remarks" rows="2" name='remarks' onChange={this.handleChange}></textarea>
                                </div><br></br>
                                <div className='form-group '>
                                    {/* <div class="upload-btn-wrapper"> */}
                                    {/* <button class="btn-file">Choose</button> */}
                                    {/* <label className="lable2">(.doc, .docx, .pdf, .jpeg only)</label> */}
                                    <input type="file" name='file' onChange={this.handleChange} title="Choose a file please" id='fileinput' required />
                                    <label >(.doc, .docx, .pdf, .jpeg only)</label>
                                    {/* <img style={{ width: "100%" }} src={this.state.file} /> */}
                                    {/* </div> */}
                                </div>
                                <button type="submit" className="btn profile-button">Submit</button>
                                <a class="btn profile-button2" href='/plockrapp'>Cancel</a>
                            </form>
                        </div>
                        <div className='col-sm-3'>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default PlockrProfileComponent;