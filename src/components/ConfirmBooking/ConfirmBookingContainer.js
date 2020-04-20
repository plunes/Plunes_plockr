import React from "react";
import '../LandingComponent/Landing.css';
import './ConfirmBookingComponent.css'


class ConfirmBookingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.root = props.root
        this.state = {
            data: this.root.selectedDocDetails,
            counter: [],
        }
    }

    componentWillMount() {
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";


        for (var i = 0; i < 40; i++) {
            var nextDate = new Date();
            nextDate.setDate(nextDate.getDate() + i);
            var currentMonth = month[nextDate.getMonth()].slice(0, 3);
            var currentDate = nextDate.getDate();
            var currentDay = weekday[nextDate.getDay()].slice(0, 3);
            this.state.counter.push({
                month: currentMonth,
                date: currentDate,
                day: currentDay
            })
        }
    }

    render() {
        console.log(this.props.confirmData, 'confirmData')
        return (
            <div className='row confirmBookingContainer'>
                <div className='col-md-2'>
                </div>
                <div className='col-md-6 bookingContainer'>
                    <div className='row rowHeading'>
                        <h2>Confirm Your Booking</h2>
                    </div>
                    <div className='row profileDetails'>
                        <div className='col-md-2 '>
                            <img src="./profile.jpg" className="imgAvatar" alt="prf" />
                        </div>
                        <div className='col-md-6'>
                            <h5>
                                {this.state.data.name}
                            </h5>
                            <p>{this.state.data.clinicName}</p>
                            <p style={{ fontSize: '12px' }}>{this.state.data.location}</p>
                        </div>
                    </div>
                    <div className='row borderBottom' >
                    </div>
                    <div className='row slotsHeading'>
                        <h6>
                            Available Slots
                        </h6>
                    </div>
                    <div className='row'>
                        <div className="scrollmenu">
                            {
                                this.state.counter.map((pdata) => {
                                    return <li><div>{pdata.month}</div><div>{pdata.date}</div><div>{pdata.day}</div></li>

                                })
                            }
                        </div>
                    </div>
                    <div className='row docTime'>
                        <div className='col'>
                            <h6 style = {{paddingLeft: '10px'}}>
                                Morning
                            </h6>
                            <div className='docTimeSlot'>
                                <p className = 'time'>
                                    09:00 AM - 12:00 PM
                                </p>
                            </div>
                        </div>
                        <div className='col'>
                        <h6 style = {{paddingLeft: '10px'}}>
                                Evening
                            </h6>
                            <div className='docTimeSlot'>
                                <p className = 'time'>
                                    09:00 AM - 12:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row appointmentClass'>
                        <div className='col'>
                        <h6 style = {{paddingLeft: '10px'}}>
                                Available Slots
                            </h6>
                            <div className='appointmentTimeSlot'>
                                <p className = 'time'>
                                    09:00 AM - 12:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row borderBottom' >
                    </div>
                    <div className='row finalAmount'>
                        <p>
                            Make a payment of 632/- to confirm the booking.
                        </p>
                    </div>
                    <div className='row payNow'>
                        <button type='button' className='btn btn-success'>
                            Pay Now
                        </button>
                    </div>
                    <div className='row refundClass'>
                        <p>
                            100% Payments Refundable. T&C Apply.
                        </p>
                    </div>
                </div>
                <div className='col-md-4'>
                </div>
            </div>
        )
    }
}

export default ConfirmBookingContainer;