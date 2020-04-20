import React from "react";
import DashboardHeader from '../DashboardComponent/DashboardHeader'
import '../LandingComponent/Landing.css';
import ConfirmBookingContainer from '../ConfirmBooking/ConfirmBookingContainer'


class ConfirmBookingComponent extends React.Component {
    constructor(props){
        super(props);
        this.roots = props.root;
        // console.log(this.props, 'Confirm Booking')
      
        
    }

    render (){
        // console.log(this.props)
        // console.log(this.props, 'confirm')
        return (
            <div className = 'container'>
                    <DashboardHeader root = {this.root}/>
                    <ConfirmBookingContainer root = {this.root} />
            </div>
        )
    }
}

export default ConfirmBookingComponent;