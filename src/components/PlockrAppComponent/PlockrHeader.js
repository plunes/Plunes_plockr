import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import './plockrhader.css'



class PlockrHeader extends Component {


    render() {
        return (
            <div className='container-fluid'>
                <header className="backgrou_headr">
            <div className="navbar navbar-expand-md navbar-light row">
                <div className='col-md-3'>
                    <Link 
                    to="/plockapp">
                  <img className="logo-img-sizeing" src="/logo.png" alt=".." />
                   </Link>
                </div>
                <div className='col-md-5'>
                </div>
              
            </div>
            </header>
        </div>
    

            );
        }
    }

    export default withRouter(PlockrHeader);