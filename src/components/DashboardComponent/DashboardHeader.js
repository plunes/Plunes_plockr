import React from 'react';
import './Dashboard.css'
class DashboardHeader extends React.Component {
    constructor(props) {
    super(props);
    this.root = props.root;
  }
  render() {
    return <div className="container-fluid">
      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light  ">
          <a class="navbar-brand" href="#"><img className="logo" src="/logo.png"  alt='No image available'/></a>
          <div>
            <input class="dashbord-input" name="search" placeholder="search" autoComplete="off" id="mytInput" onChange={this.onSearchQuery} />
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav2 nav-item active">
                <div>
                  <a class=" nav-link " href="#">
                    <img className="sol-img" src="/solution.png" alt='No image available'></img><span className="top-img">solution</span>
                  </a>
                </div>
              </li>
              <li class="nav-item nav2">
                <a class="nav-link " href="/log-in/"><img className="sol-img" src="/Enquiry.png" alt='No image available'/>Enquiry</a>
              </li>
              <li class="nav-item nav2">
                <a class="nav-link " href="/sign-up/"><img className="sol-img" src="/Notification1.png" alt='No image available'/></a>
                </li>
                <li>
                <div class="dropdown">
                  <button class="btn dropdown-toggle dropdown-align" type="button" data-toggle="dropdown">
                    <img className="sol-img2" src="/image.png"  alt='No image available'/> john doe</button>
                  <ul class="dropdown-menu profile-font">


                    
                    <li><span><img className="dash-dropdown" src="/d1.png"/><a href="#">View profile</a> </span></li><hr width="80%"/>
                    <li><span><img className="dash-dropdown" src="/dasAppo.png"/><a href="#">Appointments</a></span></li><hr width="80%"/>
                    <li><span><img className="dash-dropdown" src="/Settings.png"/><a href="#">Settings</a></span></li><hr width="80%"/>
                    <li><span><img className="dash-dropdown" src="/Help.png"/><a href="#">Help</a></span></li><hr width="80%"/>
                    <li><span><img className="dash-dropdown" src="/about-us.png"/><a href="#">About Us</a></span></li><hr width="80%"/>
                    <li><span><img className="dash-dropdown" src="/Logout.png"/><a href="#">Log out</a></span></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    }
  }

export default DashboardHeader