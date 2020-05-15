import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'
import Modal from 'react-modal';
import ReportDetails from "../Functional/ReportDetails"
import NotifFunc from '../Functional/NotifFunc';

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
            phone: '',
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
            mobileNumber: '',
            test: '',
            specialities: [],
            error:false,
            success:false
        }
        this.handleLogout = this.handleLogout.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlePhoneChange = (e)=>{
        let str = e.target.value
        console.log(str.substring(0,3)," str.substring(0,2) in handlePhoneChange ")
        if(str.substring(0,3)==='+91'){
            
        }else{
            str = '+91'+e.target.value
        }
        this.setState({
                phone:str
        })
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
        axios.post('https://devapi.plunes.com/v5/user/logout', "", { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } })
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

    handleSubmit(data) {
        let body = {
            userId: this.state.userId,
            self: false,
            mobileNumber: this.state.phone,
            reportId: this.state.reportId,
           // reportDisplayName: this.state.reportName,
            problemAreaDiagnosis: this.state.reasonDiagnosis,
            precautions: this.state.precautions,
            remarks: this.state.remarks
            // consumptionDiet: this.state.consumptionDiet,
            // specialityId: this.state.speciality,
            // patientMobileNumber: this.state.patientMobileNumber.trim(),
            // problemAreaDiagnosis: this.state.problemAreaDiagnosis,
            // avoidDiet: this.state.avoidDiet,
            // precautions: this.state.precautions,
            // medicines: this.state.medicines,
            // reportName: this.state.reportName,
            // test: this.state.test,
           
        }
        console.log(body, 'body before Submit')
        let token = localStorage.getItem('auth')
        axios.post('https://devapi.plunes.com/v5/report/sendReport', body, { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } })
            .then(res => {
                console.log(res)
                this.setState({
                    modalIsOpen: true,
                    // success:{
                    //     message:"Report Sucessfully sent"
                    // }
                })
            })
            .catch((error) => {
                console.log(error,"error in api")
                console.log(error.response,"error.response in api")
                if(!!error.response.data){
                    this.setState({
                        error:{
                            message:error.response.data.error?error.response.data.error:'Some error from the api'
                        }
                    })
                }else{
                    console.log("No response body from api")
                }
                
                console.log(error.response,"error in Catch Block")
                // alert('Not Sent!!! Please Check Plunes Patient Phone Number ....')
            }
            )
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    closeModal = ()=>{
        this.setState({
            modalIsOpen:false
        })
    }

    render() {
        console.log(this.state,"state in ProfileEditComponent")
        const { showLogin, remarks, reasonDiagnosis, phone, reportId } = this.state;
        if (showLogin) {
            return <Redirect to={{
                pathname: "/plockrapp",
            }} />;
        } else {
            return (
                <div className='container-fluid'>
                    <NotifFunc
                    error = {this.state.error}
                    success={this.state.success}
                    clearError = {()=>this.setState({error:false, success:false})}
                    />
                    <div className='row profile-row-align '>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={()=>console.log()}
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
                                    <span type='button' className="btn model-button2" onClick={()=>this.setState({modalIsOpen:false})}>OK</span>
                                </div>
                                <div className='col'>
                                </div>
                            </div>
                        </Modal>
                        <div className='col-md-7'>
                            <ReportDetails 
                                remarks = {remarks}
                                phone= {phone}
                                reasonDiagnosis = {reasonDiagnosis}
                                reportId = {reportId}
                                handleChange = {this.handleChange}
                                handleSubmit  = {this.handleSubmit}
                                handlePhoneChange = {this.handlePhoneChange}
                            />
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default PlockrProfileEditComponent;