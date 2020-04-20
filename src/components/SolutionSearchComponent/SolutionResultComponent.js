import React from 'react';
import SolutionResultContainer from './SolutionResultContainer'
import DashboardHeader from '../DashboardComponent/DashboardHeader'

class SolutionResultComponent extends React.Component {
    constructor(props){
        super(props);
        this.root = props.root
        // console.log(props, 'solutionnnnnnnnnnnnnnnnnnnn')
        this.state = {
            searchInput : 'Anshul'
        }
        
    }
    render()
    {
        console.log(this.root, 'ProfileComponent')
        return <div className='container' >
                <DashboardHeader root = {this.root}/>
                <SolutionResultContainer root = {this.root} searchInputQuery = {this.state.searchInput}/>
        </div>
    }
}
export default SolutionResultComponent;

