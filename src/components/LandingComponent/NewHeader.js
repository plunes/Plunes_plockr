import React, { Component } from 'react';
import logo from "../../images/logo.png"
import './Landing.css';


class NewHeader extends Component {
    render() {
        return (
          <React.Fragment>
          <nav className="navbar custom_ha navbar-expand-lg custom-navbar">
          <div className="container">
              <a className="navbar-brand logo_size col-lg-3 col-md-6 col-6" href="#">
                  <img src={logo} />
              </a>
             <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <i className="fa fa-bars" aria-hidden="true"></i>
             </button>
               <div className="collapse navbar-collapse col-lg-9 back_color_mo" id="collapsibleNavbar">
                   <ul className="navbar-nav ml-auto Three_butn dr_lis_mobile">
                     <li className="nav-item">
                      <div className="dropdown drp_part">
                <button type="button" className="btn dropdown-toggle cus_bu" data-toggle="dropdown" >
                  Download the App
                    </button>
                  <ul className="dropdown-menu" role="tree" aria-expanded="true" aria-hidden="false">
                  <li><a href="https://apps.apple.com/us/app/plunes/id1463747553/" title="app store">
                    <img className="ios" src="/ios.png" alt=".." />
                    <span className="ios-img-header">iOS</span></a>
                  </li>
                    <hr width="70%"></hr>
                  <li>
                    <a href="https://play.google.com/store/apps/details?id=com.plunes&hl=en_IN/" title="play store">
                      <img className="android" src="/Android.png" alt=".." />
                      <span className="ios-img-header">Android</span></a>
                  </li>
                </ul>
              </div>
                    </li>
                     <li className="nav-item">
                       <a className="nav-link login mobile_hs" href="/login">Login Hospitals / Doctors</a>
                     </li>  
                   </ul>
               </div>  
          </div>
  </nav>
    {
        // <div className='container-fluid newHeaderCont'>
      //            <nav className="navbar navbar-expand-lg navbar-light newNavbar" style={{backgroundColor : '#D7F4F7'}}>
      //   <a className="navbar-brand" href="/" title="home">
      //     <img className="logo-img-sizeing" src="/logo.png" alt=".." /></a>
      //   <div className="text-right toggleBtn"><button className="navbar-toggler navbar-toggler-newhead" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      //     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   </div>
      //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul className="navbar-nav ml-auto">
      //       <li className="nav2 nav-item downApp">
      //         <div className="dropdown ">
      //           <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" >
      //             Download the App
      //               </button>
      //             <ul className="dropdown-menu" role="tree" aria-expanded="true" aria-hidden="false">
      //             <li><a href="https://apps.apple.com/us/app/plunes/id1463747553/" title="app store">
      //               <img className="ios" src="/ios.png" alt=".." />
      //               <span className="ios-img-header">iOS</span></a>
      //             </li>
      //               <hr width="70%"></hr>
      //             <li>
      //               <a href="https://play.google.com/store/apps/details?id=com.plunes&hl=en_IN/" title="play store">
      //                 <img className="android" src="/Android.png" alt=".." />
      //                 <span className="ios-img-header">Android</span></a>
      //             </li>
      //           </ul>
      //         </div>
      //         <div className="nav333">
      //         </div>
      //       </li>
      //     </ul>
      //   </div>
        
      //   </nav>
      // </div>
      
    }
    </React.Fragment>
      );
    }
}

export default NewHeader;