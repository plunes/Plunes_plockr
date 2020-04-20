import React from "react";
import './ProfileComp.css'
import SolutionResultContainer from "../SolutionSearchComponent/SolutionResultContainer";
// import {  } from "../";
// import Appreciate from './Appreciate'
import ConfirmBookingComponent from '../ConfirmBooking/ConfirmBookingComponent'
import { Redirect } from 'react-router';
import axios from "axios";


class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props, 'profileComponentDoc')
         this.root = props.root;

        // this.root.docDetail = props.data;
        // this.root = props.root;
        // console.log(this.root);
        // this.root = props.root
        // this.root.doctorDetail = this.props.data;

        this.state = {
            confirmBooking: false,
            // data: this.props.data
        }
        this.baseUrl = 'https://plunes.co/v3/'
        this.onClick = this.onClick.bind(this)
    }



    onClick(){
        // const {professionalId} = this.props.data;
        // console.log(this.props.data , 'DocProfileComponent')
        // this.root.selectedDocDetails = this.props.data;


        // this.setState({
        //     confirmBooking : true
        // });
    }
   
    render() {
        // const { finalPrice, rating, actualPrice, name, location, clinicName } = this.props.data;
    // console.log(this.state.data, "aaaaaaaaaaaaaaa")
        const {confirmBooking} = this.state
        if(confirmBooking){
            return <Redirect to={{
                pathname: "/confirmBooking",
                // state: ''
             }}/>
        }

        
        return (
            <div className='row'>
                {/* <div className='profileContainer'>
                    <div className='row'>
                        <div className='col-md-1 profileImageDiv'>
                            <img src="./profile.jpg" className="imgAvatar" alt="prf" />
                        </div>
                        <div className='col-md-5 nameDiv'>
                            <h3 className='name'>{name}</h3>
                            <h5 className='clinicName'>{clinicName}</h5>
                        </div>
                        <div className='col-md-5 rightSideContent '>
                            <div className='priceName'>
                                <span><i style={{ fontSize: '18px', color: '#707070' }} class="fa">&#xf156;</i><strike style={{ fontWeight: '500', color: '#707070' }}>{actualPrice}</strike></span>
                                <span style={{ fontWeight: '500' }}><i style={{ fontSize: '18px' }} class="fa">&#xf156;</i>{finalPrice}</span>
                            </div>
                            <div className='saveClass'>
                                <span style={{ color: '#01D35A', fontSize: '15px' }} >Save 33%</span>

                            </div>
                            <div className='locationClass'>
                                {location}
                            </div>
                            <div className='buttonClass'>
                                <button type="button" className="btn btn-light" style={{marginRight:'10px'}}>
                                    Details
                                </button>
                                <span style={{width:'10px'}}>

                                </span>
                                <button type="button" className="btn btn-success" onClick = {this.onClick}>
                                    Book
                                </button>
                            </div>

                        </div>
                    </div>
                </div
                <div className='col-md-3'>

                </div>
                <div className='bottomBorder'>
                </div> */}
            </div>
        )
    }
}


export default ProfileComponent;