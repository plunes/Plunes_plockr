import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import LandingPage from './components/LandingComponent/LandingPage';
import RegistrationComponent from './components/RegistrationComponent/RegistrationComponent';
import DashboardComponent from './components/DashboardComponent/DashboardComponent'
import SolutionResultComponent from './components/SolutionSearchComponent/SolutionResultComponent'
import ConfirmBookingComponent from './components/ConfirmBooking/ConfirmBookingComponent'
import EnquiryComponent from './components/EnquiryComponent/EnquiryComponent'
import EnquiryResultComponent from './components/EnquiryComponent/EnquiryResultComponent'
import LoginComponent from './components/LoginComponent/LoginComponent'
import ForgotPasswordComponent from './components/LoginComponent/ForgotPassword'
import DentistComponent from './components/ServicesComponent/DentistComponent'
import ENTComponent from './components/ServicesComponent/ENTComponent'
import AyurvedaComponent from './components/ServicesComponent/AyurvedaComponent'
import OphthalmologyComponent from './components/ServicesComponent/OphthalmologyComponent'
import NeurologyComponent from './components/ServicesComponent/NeurologyComponent'
import GynaeComponent from './components/ServicesComponent/GynaeComponent'
import DermatologyComponent from './components/ServicesComponent/DermatologyComponent'
import PsychiatryComponent from './components/ServicesComponent/PsychiatryComponent'
import RadiologyComponent from './components/ServicesComponent/RadiologyComponent'
import OrthopedicsComponent from './components/ServicesComponent/OrthopedicsComponent'
import PhysiotherapyComponent from './components/ServicesComponent/PhysiotherapyComponent'
import PediatricsComponent from './components/ServicesComponent/PediatricsComponent'
import PathologyComponent from './components/ServicesComponent/PathologyComponent'
import CareersComponent from './components/ServicesComponent/CareersComponent'
import PlockrComponent from './components/ServicesComponent/PlockrComponent'
import AboutusComponent from './components/ServicesComponent/AboutusComponent'
import RegisterComponent from './components/ServicesComponent/RegisterComponent'
import ContactusComponent from './components/ServicesComponent/ContactusComponent'
import TermsOfUseComponent from './components/ServicesComponent/TermsOfUseComponent'
import BlogComponent from './components/ServicesComponent/BlogComponent'
import IvfComponent from './components/ServicesComponent/IvfComponent'
import PrivacypolicyComponent from './components/ServicesComponent/PrivacypolicyComponent'
import TeethWhiteningComponent from './components/ServicesComponent/TeethWhiteningComponent'
import RootCanalComponent from './components/ServicesComponent/RootCanalComponent'
import DentalComplicationsComponent from './components/ServicesComponent/DentalComplicationsComponent'
import PlockrMainComponent from './components/PlockrAppComponent/PlockrMainComponent'
import PlockrAppComponent from './components/PlockrAppComponent/PlockrAppComponent'
import PlockrProfileEditComponent from './components/PlockrAppComponent/PlockrProfileEditComponent'
import SendReportsComponent from './components/PlockrAppComponent/SendReportsComponent'
import MyComponent from './components/PlockrAppComponent/MyComponent'
import IntoductoryblogComponent from './components/ServicesComponent/IntoductoryblogComponent'
import SavetoothblogComponent from './components/ServicesComponent/SavetoothblogComponent'
import PrescriptionBuilderComponent from './components/PrescriptionBuilderComponent/PrescriptionBuilderComponent'
import PrescriptionDashboardComponent from './components/PrescriptionBuilderComponent/PrescriptionDashboardComponent'
import PlockrUploaderComponent from './components/PlockrAppComponent/UploaderComponent';
import MentalhealthComponent from './components/ServicesComponent/MentalhealthComponent'
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const App = () => (
      <div className='container-fluid'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={() => (<LandingPage root={this.root}/>)} />
            <Route exact path='/signup' component={() => (<RegistrationComponent root={this.root}/>)}/>
            <Route exact path='/login' component={() => (<LoginComponent root={this.root} />)}/>
            <Route exact path='/forgot_password' component={() => (<ForgotPasswordComponent root={this.root}/>)}/>
            <Route exact path='/dashboard' component={() => (<DashboardComponent root={this.root} />)} />
            <Route exact path='/solutionResult' component={() => (<SolutionResultComponent root={this.root}/>)}/>
            <Route exact path='/confirmBooking' component={() => (<ConfirmBookingComponent root={this.root}/>)}/>
            <Route exact path='/enquiry' component={() => (<EnquiryComponent root={this.root} />)} />
            <Route exact path='/enquiryresult' component={() => (<EnquiryResultComponent root={this.root}/>)}/>
            <Route exact path='/profile' component={() => (<DermatologyComponent root={this.root}/>)}/>
            <Route exact path='/dentist' component={() => (<DentistComponent/>)}/>
            <Route exact path='/ent' component={() => (<ENTComponent/>)}/>
            <Route exact path='/ayurveda' component={() => (<AyurvedaComponent/>)}/>
            <Route exact path='/dermatology' component={() => (<DermatologyComponent/>)}/>
            <Route exact path='/ophthalmology' component={() => (<OphthalmologyComponent/>)}/>
            <Route exact path='/neurology' component={() => (<NeurologyComponent/>)}/>
            <Route exact path='/gynae' component={() => (<GynaeComponent/>)}/>
            <Route exact path='/psychiatry' component={() => (<PsychiatryComponent />)}/> 
            <Route exact path='/radiology' component={() => (<RadiologyComponent />)}/>
            <Route exact path='/orthopedics' component={() => (<OrthopedicsComponent/>)}/>
            <Route exact path='/physiotherapy' component={() => (<PhysiotherapyComponent/>)}/>
            <Route exact path='/pediatrics' component={() => (<PediatricsComponent />)}/>
            <Route exact path='/pathology' component={() => (<PathologyComponent />)}/>
            <Route exact path='/careers' component={() => (<CareersComponent/>)}/>
            <Route exact path='/about-us' component={() => (<AboutusComponent/>)}/>
            <Route exact path='/plockr' component={() => (<PlockrComponent/>)}/>
            <Route exact path='/register' component={() => (<RegisterComponent/>)}/>
            <Route exact path='/contact-us' component={() => (<ContactusComponent/>)}/>
            <Route exact path='/terms-of-use' component={() => (<TermsOfUseComponent/>)}/>
            <Route exact path='/blog' component={() => (<BlogComponent/>)}/>
            <Route exact path='/ivf' component={() => (<IvfComponent/>)}/>
            <Route exact path='/privacy' component={() => (<PrivacypolicyComponent/>)}/>
            <Route exact path='/dentalcomplications' component={() => (<DentalComplicationsComponent/>)}/>
            <Route exact path='/rootcanal' component={() => (<RootCanalComponent/>)}/>
            <Route exact path='/teethwhitening' component={() => (<TeethWhiteningComponent/>)}/>
            <Route exact path='/plockrapp' component={() => (<PlockrMainComponent/>)}/>
            <Route exact path='/plockr-dashboard' component={() => (<PlockrAppComponent/>)}/>
            <Route exact path='/plockr-uploader' component={() => (<PlockrUploaderComponent/>)}/>
            <Route exact path='/plockr_profile_edit' render={(props) => <PlockrProfileEditComponent {...props} />}/>
            <Route exact path='/send_reports' render={(props) => <SendReportsComponent {...props}/>}/>
            <Route exact path='/mycomponent' component={() => (<MyComponent/>)}/>
            <Route exact path='/mentalhealth' component={() => (<MentalhealthComponent/>)}/>
            <Route exact path='/savetooth' component={() => (<SavetoothblogComponent/>)}/>
            <Route exact path='/prescription_builder' component={() => (<PrescriptionBuilderComponent/>)}/>
            <Route exact path='/prescription-dashboard' render={(props) => <PrescriptionDashboardComponent {...props}/>}/>
            <Route  path='/an-era-of-a-new-healthcare' component={() => (<IntoductoryblogComponent/>)} />
            <Route  path='/mental-health-quick-counselling' component={() => (<MentalhealthComponent/>)}/>
            <Route  path='/save-your-tooth-best-dentist' component={() => (<SavetoothblogComponent/>)}/>
            <Route  path='/dental-complications-and-healthy-suggestions' component={() => (<DentalComplicationsComponent/>)}/>
            <Route  path='/dental-care-root-canal-treatment' component={() => (<RootCanalComponent/>)}/>
            <Route  path='/teeth-whitening-complete-guide' component={() => (<TeethWhiteningComponent/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
    return (
      <Switch>
        <App />
      </Switch>
    )
  }
}