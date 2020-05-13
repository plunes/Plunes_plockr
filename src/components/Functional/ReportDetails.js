import React from "react"
import { Link } from "react-router-dom"
import {
    isValidPhoneNumber,
  } from 'react-phone-number-input';
  import {  useToasts } from 'react-toast-notifications'
// import validator from 'validator'
const ReportDetails = (props)=>{
    const  { remarks, reasonDiagnosis, phone, handleChange, handleSubmit, handlePhoneChange, reportId } = props
      console.log(reportId,'reportId in ReportDetails')
    const { addToast } = useToasts()
   const formSubmit =(e) =>{
       e.preventDefault()
       if(reasonDiagnosis==="" || remarks==="" || phone==='') {
        addToast("Enter all the details", {appearance: 'error', autoDismiss:true}) 
       }else if(!isValidPhoneNumber(phone)){
        addToast("Invalid patient mobile number", {appearance: 'error', autoDismiss:true}) 
       }else if(!!!reportId){
        addToast("Select a report to Send", {appearance: 'error', autoDismiss:true}) 
       }
       else{
           handleSubmit({
               patientMobileNumber:phone.substr(3,phone.length),
               remarks,
               reasonDiagnosis
           })
       }
   }
    return(
        <form onSubmit={(e)=>formSubmit(e)}>
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
                        <textarea className="form-control plockr-app-form" placeholder="Diagnosis" value={reasonDiagnosis} name='reasonDiagnosis' onChange={handleChange}></textarea>
                    </div><br />
                    <div className="form-group col-lg-6 col-md-6">
                        <textarea className="form-control plockr-app-form" placeholder="Remarks" name='remarks' value={remarks} onChange={handleChange}></textarea>
                    </div><br /> 
                    <div className="form-group col-lg-6 col-md-6">
                <textarea className="form-control plockr-app-form" placeholder="Patient Mobile Number" rows="2" value={phone} name='phone' onChange={handlePhoneChange}></textarea>
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
                    <Link to="/plockr-dashboard"
                    className="btn profile-button2 display-inline"
                    >
                Cancel
                    </Link>
               </div>    
            </div>
         </form>
    )
}
export default ReportDetails