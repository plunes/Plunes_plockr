import React, { Component } from 'react';
import axios from 'axios';
import '../PrescriptionBuilderComponent/PrescriptionBuilderComponent.css'
import AvatarEditor from 'react-avatar-editor'

class SendPrescriptionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patientMobileNumber: '',
            patientDetails: {},
            prescriptionDocDetails: this.props.doctor.prescription,
            patientName: '',
            date: '',
            disable: false,
            otherFields: [],
            patientAge : '',
            patientGender: '',
            docId : '',
            showLogoText : true
        }
        this.myRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleNumberSubmit = this.handleNumberSubmit.bind(this);
        this.handlePrescriptionSubmit = this.handlePrescriptionSubmit.bind(this);
        this.getage =  this.getage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            prescriptionDocDetails : nextProps.doctor.prescription,
            docId: nextProps.doctor._id
        })
    }

    getage(DOB) {
        console.log(DOB);
        var today = new Date();
        var birthDate = new Date(DOB);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
        this.setState({
            patientAge : age
        })
    }

    handlePrescriptionSubmit(e) {
        e.preventDefault();
        let array = [];
        let state = this.state;
        var obj = {};
        // console.log(this.state, 'state');
        for (var key in state) {
            if (key !== 'showLogoText' && key !== 'docId' && key !== 'patientGender'  && key !== 'patientMobileNumber' && key !== 'patientAge' && key !== 'patientDetails' && key !== 'prescriptionDocDetails' && key !== 'patientName' && key !== 'date' && key !== 'disable' && key !== 'otherFields') {
               let data = {
                   [key] : state[key]
               }
               array.push(data)
            }
        }
        obj['patientName'] = this.state.patientName;
        obj['patientGender'] = this.state.patientGender;
        obj['patientAge'] = this.state.patientAge;
        obj['date'] = this.state.date;
        obj['fields'] = array
        let data = {};
        let userDoc = JSON.parse(localStorage.getItem('docDetails'));
        // console.log(obj, 'userDoc' )
        let id = userDoc._id;
        if(this.state.prescriptionDocDetails.userType === 'Doctor'){
            data = {
                patientId : this.state.patientDetails._id,
                userId : id,
                prescriptionData: obj
            }
        }else{
            data = {
                patientId : this.state.patientDetails._id,
                userId : id,                
                prescriptionData: obj,
                doctorId : this.state.docId
            }
        }
        let token = localStorage.getItem('auth')
        axios.post('https://plunes.co/v4/prescription/test', data, { headers: { "Authorization": `Bearer ${token}` } })
            .then((res) => {
                if(res.data.success){
                    this.props.handleSentPrescription(true)
                    this.setState({
                        patientMobileNumber : '',
                        patientDetails: {},
                        patientAge: '',
                        patientName : '',
                        patientGender: ''
                    })
                    let state = this.state;
                    for (var key in state) {
                        if (key !== 'docId' && key !== 'patientGender' && key !== 'patientMobileNumber' && key !== 'patientAge' && key !== 'patientDetails' && key !== 'prescriptionDocDetails' && key !== 'patientName' && key !== 'date' && key !== 'disable' && key !== 'otherFields') {
                            this.setState({
                                [key] : ''
                            })
                        }
                        this.setState({
                            showLogoText : true
                        })
                    }
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }

    handleNumberSubmit(e) {
        e.preventDefault();
        axios.get('https://plunes.co/v4/user?mobileNumber=' + this.state.patientMobileNumber)
            .then(res => {
                if (res.status === 201) {
                    if(res.data.user.birthDate){
                        let date = res.data.user.birthDate.split('/');
                        let month = date[1].toString();
                        let day = date[0].toString();
                        let year = date[2].toString();
                        let dobString = month + '/' + day + '/' + year;
                        this.getage(dobString);
                    }
                    this.setState({
                        patientDetails: res.data.user,
                        patientName : res.data.user.name,
                        patientGender: res.data.user.gender,
                        disable: true
                    })
                }
            })
            .catch((e)=> {
                this.setState({
                    patientDetails : {},
                    patientMobileNumber : ''
                })
                alert('Phone Number is not registered')
            })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    async componentDidMount() {
        this.setState({
            prescriptionDocDetails: this.props.doctor.prescription,
            docId: this.props.doctor._id
        }, () => {
        if(this.state.prescriptionDocDetails.hasOwnProperty('logoText') && this.state.prescriptionDocDetails.logoText.length > 0){
            this.setState({
                showLogoText : false
            })
        }
        })
        let d = new Date();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        this.setState({
            date: day.toString() + '/' + month.toString() + '/' + year.toString()
        })
    }

    render() {
        return (
            <div>
            <div className='container-fluid'>
                <div className='row'>
                    <form onSubmit={this.handleNumberSubmit} style={{width: "100%"}}>
                        <div className='row'>           
                          <div className='col-sm-2'></div>
                            <div className='col-sm-6 enter-patient-no'>
                                <span className="form-group">
                                    <input className="show-prescription-input" type="nunmber" name='patientMobileNumber' value={this.state.patientMobileNumber || ''}  placeholder='Enter Patient Number' className="form-control" onChange={this.handleChange} />
                                </span>
                            </div>
                            <div className='col-sm-4'>
                                <span>  
                                    <button className="send-prescription-button" type='submit'  className='saveButton'>Submit</button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='createBuilder'>
                    <div className='row age send-prescription-div'>
                        <div className='col'>
                            {
                                this.state.showLogoText ? <div>
                                <img className='imageClass' src={this.state.prescriptionDocDetails.logoUrl} alt='No Image'></img>
                            </div> : <div className="send-prescription-logo" ><b>{this.state.prescriptionDocDetails.logoText}</b></div>
                            }
                            
                            <br></br>
                            <div>
                                Experience : {this.state.prescriptionDocDetails.experience} Years</div>
                        </div>
                        <div className='col'>
                            <div>
                                {this.state.prescriptionDocDetails.doctorName}
                            </div>
                            <div>
                                {this.state.prescriptionDocDetails.qualification}
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.handlePrescriptionSubmit} >
                        <div className='row age line-height'>
                            <div className='col'>
                                <div>
                                    <span>Name : </span>
                                    <span><input className='noBorder' value={Object.entries(this.state.patientDetails).length > 0 ? this.state.patientName : ''} name='patientName' onChange={this.handleChange}></input></span>
                                </div>
                                <div>
                                    <span>Gender :</span>
                                    <span><input className='noBorder' value={Object.entries(this.state.patientDetails).length > 0 ? this.state.patientGender : ''} name='patientGender' onChange={this.handleChange}></input></span>
                                </div>
                            </div>
                            <div className='col '>
                                <div>
                                    <span>Age : </span>
                                    <span><input className='noBorder' value={this.state.patientAge || ''} name='patientAge' onChange={this.handleChange}></input></span>
                                </div>
                                <div>
                                    <span>Date : {this.state.date}</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        {
                            this.state.prescriptionDocDetails.otherFields.map((item, index) => (
                                <div className='row age' key={index}>
                                    <div className='col-md-3'>{item} :</div>
                                    <div className='col-md-9'><textarea id='one' className='prescriptionField' name={item} onChange={this.handleChange} value={this.state[item]} ></textarea></div>
                                </div>
                            ))
                        }
                        <div className='row age'>
                            <div className='col'></div>
                            <div className='col'></div>
                            <div className='col'>
                                {this.state.prescriptionDocDetails.doctorName}
                                {/* <img className='imageClass' src={this.state.prescriptionDocDetails.signatureUrl} alt='No Image'></img> */}
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className='row justify-content-center'>
                            <button type='submit' className='saveButton' disabled={!this.state.disable}>Send</button>
                        </div>
                    </form>
                </div></div>
            </div>
        );
    }
}

export default SendPrescriptionComponent;