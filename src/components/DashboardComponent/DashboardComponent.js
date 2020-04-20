import React from 'react';
import DashboardHeader from '../DashboardComponent/DashboardHeader'
import DashboardContainer from '../DashboardComponent/DashboardContainer'
import LandingHeader from '../LandingComponent/LandingHeader'
import './Dashboard.css'
class DashboardComponent extends React.Component {
        constructor(props){
        super(props);
        this.root = props.root;    
    }
    render() {
        // const { latitude, longitude } = this.state
        return<div className = 'container-fluid'>
                <DashboardHeader root = {this.root}/>
                <LandingHeader root={this.root}/>
                <DashboardContainer root = {this.root}/>
               </div>
    }
}
export default DashboardComponent