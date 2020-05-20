import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import DashboardComponent from './components/DashboardComponent/DashboardComponent';
import LoginComponent from './components/LoginComponent/LoginComponent'
import ForgotPasswordComponent from './components/LoginComponent/ForgotPassword'
import PlockrMainComponent from './components/PlockrAppComponent/PlockrMainComponent'
import PlockrAppComponent from './components/PlockrAppComponent/PlockrAppComponent'
import PlockrProfileEditComponent from './components/PlockrAppComponent/PlockrProfileEditComponent'
import SendReportsComponent from './components/PlockrAppComponent/SendReportsComponent'
import MyComponent from './components/PlockrAppComponent/MyComponent'
import PrescriptionBuilderComponent from './components/PrescriptionBuilderComponent/PrescriptionBuilderComponent'
import PrescriptionDashboardComponent from './components/PrescriptionBuilderComponent/PrescriptionDashboardComponent'
import PlockrUploaderComponent from './components/PlockrAppComponent/UploaderComponent';
import CovidComponent from './components/LandingComponent/CovidComponent';
import DicomViewer from "./components/DicomViewer/index"
import { ToastProvider } from 'react-toast-notifications'
import NotFoundPage from './components/LandingComponent/404';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const App = () => (
      <div className='container-fluid'>
        <ToastProvider>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/auth" />
            <Route exact path='/auth/:auth?' component={PlockrMainComponent} />
            <Route exact path='/login' component={() => (<LoginComponent root={this.root} />)} />
            <Route exact path='/forgot_password' component={() => (<ForgotPasswordComponent root={this.root} />)} />
            <Route exact path='/dashboard' component={() => (<DashboardComponent root={this.root} />)} />
            <Route exact path='/dicom_viewer' component={() => (<DicomViewer />)} />
            <Route exact path='/plockr-dashboard' component={() => (<PlockrAppComponent />)} />
            <Route exact path='/plockr-uploader' component={() => (<PlockrUploaderComponent />)} />
            <Route exact path='/plockr_profile_edit' render={(props) => <PlockrProfileEditComponent {...props} />} />
            <Route exact path='/send_reports' render={(props) => <SendReportsComponent {...props} />} />
            <Route exact path='/mycomponent' component={() => (<MyComponent />)} />
            <Route exact path='/prescription_builder' component={() => (<PrescriptionBuilderComponent />)} />
            <Route exact path='/prescription-dashboard' render={(props) => <PrescriptionDashboardComponent {...props} />} />
            <Route exact path='/covid19-test' component={() => (<CovidComponent />)} />
            <Route path='*' component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
        </ToastProvider>
      </div>
    )
    return (
      <Switch>
        <App />
      </Switch>
    )
  }
}