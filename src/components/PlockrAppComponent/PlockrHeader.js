import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './plockrhader.css'



class PlockrHeader extends Component {


    render() {
        return (
            <div className='container-fluid'>
                <header className="backgrou_headr">
            <div className="navbar navbar-expand-md navbar-light row">
                <div className='col-md-3'>
                    <a href="/plockrapp" title='Home'> <img className="logo-img-sizeing" src="/logo.png" alt=".." /></a>
                </div>
                <div className='col-md-5'>
                </div>
                {/* <div className='col-md-2 text-right'>
                    <a href="/prescription_builder">
                        <button type="button" className="btn builder-button">Download PLOCKR</button>
                    </a>
                </div>
                <div className='col-md-2'>
                    <button type="button" className="btn logout" onClick={this.handlelogout}>Logout</button>
                </div> */}
            </div>
            </header>
        </div>
       


            );
        }
    }

    export default withRouter(PlockrHeader);