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
        <div>
        <form onSubmit={(e)=>formSubmit(e)}>
            <div className='row'>            
                    <div className="form-group col-lg-6 col-md-6">
                        <textarea className="form-control plockr-app-form" placeholder="Diagnosis" value={reasonDiagnosis} name='reasonDiagnosis' onChange={handleChange}></textarea>
                    </div><br />
                    <div className="form-group col-lg-6 col-md-6">
                        <textarea className="form-control plockr-app-form" placeholder="Remarks" name='remarks' value={remarks} onChange={handleChange}></textarea>
                    </div><br /> 
                    <div className="form-group col-lg-6 col-md-6">
                <textarea className="form-control plockr-app-form" placeholder="Patient Mobile Number" rows="2" value={phone} name='phone' onChange={handlePhoneChange}></textarea>
                </div><br></br>
                    <div className='col-md-6'>
                    <button type="submit" className="btn profile-button pstion_sb">Submit</button>
                    </div>
                    <div className='col-md-6'>
                    <button  className="btn profile-button2 display-inline">
                    <Link to="/plockr-dashboard">Cancel</Link></button>
               </div>    
            </div>
         </form>
         <style jsx>{`
         .sendReport{
             margin:"10px";
         }
         form{
             margin:2rem
         }
         `}</style>
         </div>
    )
}
export default ReportDetails