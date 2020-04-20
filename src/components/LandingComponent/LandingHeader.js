import React from 'react';
import './Landing.css'

class LandingHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='container-fluid header-position'>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <a className="navbar-brand" href="/" title="home">
          <img className="logo-img-sizeing" src="/logo.png" alt=".." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav2 nav-item downApp">
              <div className="dropdown ">
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" >
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
              <div className="nav333">
              </div>
            </li>
            {/* <li className="nav-item nav2">
              <a className="nav-link nav3" href="/" title='Log in'>Log In</a>
            </li>
            <li className="nav-item nav2">
              <a className="nav-link nav3" href="/" title='Sign up'>Sign Up</a>
            </li> */}
          </ul>
        </div>
      </nav>
     
    </div>
  }
}

export default LandingHeader