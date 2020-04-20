import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import LandingPage from './components/LandingComponent/LandingPage';
import RegistrationComponent from './components/RegistrationComponent/RegistrationComponent';
import DashboardComponent from './components/DashboardComponent/DashboardComponent';
import SolutionResultComponent from './components/SolutionSearchComponent/SolutionResultComponent'
import ConfirmBookingComponent from './components/ConfirmBooking/ConfirmBookingComponent'
import EnquiryComponent from './components/EnquiryComponent/EnquiryComponent'
import EnquiryResultComponent from './components/EnquiryComponent/EnquiryResultComponent'
import LoginComponent from './components/LoginComponent/LoginComponent'
import ForgotPasswordComponent from './components/LoginComponent/ForgotPassword'
import DentistComponent from './components/ServicesComponent/DentistComponent'
import ENTComponent from './components/ServicesComponent/ENTComponent'
// import AyurvedaComponent from './components/ServicesComponent/AyurvedaComponent'
import DailyYogaComponent from './components/blog/DailyYogaComponent'
import PMSComponent from './components/blog/PMSComponent'

// import AllergiesTypeComponent from './components/ServicesComponent/AllergiesTypeComponent'
// import EarInfectionComponent from './components/ServicesComponent/EarInfectionComponent'
// import AntiAgingComponent from './components/ServicesComponent/AntiAgingComponent'
// import ArthritisComponent from './components/ServicesComponent/ArthritisComponent'
// import SmokingWomanComponent from './components/ServicesComponent/SmokingWomanComponent'
// import CoughandColdComponent from './components/ServicesComponent/CoughandColdComponent'
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
import BlogComponent from './components/blog/BlogComponent';
import IvfComponent from './components/ServicesComponent/IvfComponent'
import PrivacypolicyComponent from './components/ServicesComponent/PrivacypolicyComponent'
import TeethWhiteningComponent from './components/blog/TeethWhiteningComponent'
import AcneComponent from './components/blog/AcneComponent'
import HighBloodPressureComponent from './components/blog/HighBloodPressureComponent'
import HyperthyroidismComponent from './components/blog/HyperthyroidismComponent'
import HairLossComponent from './components/blog/HairLossComponent'
import VitamincBenefitsComponent from './components/blog/VitamincBenefitsComponent'
import PcosComponent from './components/blog/PcosComponent'
import LovePetsComponent from './components/blog/LovePetsComponent'
import OutcomesonPregnancyComponent from './components/blog/OutcomesonPregnancyComponent'
import RootCanalComponent from './components/blog/RootCanalComponent'
import DentalComplicationsComponent from './components/blog/DentalComplicationsComponent'
import PlockrMainComponent from './components/PlockrAppComponent/PlockrMainComponent'
import PlockrAppComponent from './components/PlockrAppComponent/PlockrAppComponent'
import PlockrProfileEditComponent from './components/PlockrAppComponent/PlockrProfileEditComponent'
import SendReportsComponent from './components/PlockrAppComponent/SendReportsComponent'
import MyComponent from './components/PlockrAppComponent/MyComponent'
import IntoductoryblogComponent from './components/blog/IntoductoryblogComponent'
import SavetoothblogComponent from './components/blog/SavetoothblogComponent'
import PrescriptionBuilderComponent from './components/PrescriptionBuilderComponent/PrescriptionBuilderComponent'
import PrescriptionDashboardComponent from './components/PrescriptionBuilderComponent/PrescriptionDashboardComponent'
import PlockrUploaderComponent from './components/PlockrAppComponent/UploaderComponent';
import SelectedBlog from './components/blog/SelectedBlog'
import MentalhealthComponent from './components/blog/MentalhealthComponent'
import BlogPost from './components/blog/genericBlogComponent';
import CovidComponent from './components/LandingComponent/CovidComponent';
import ThankyouComponent from './components/LandingComponent/ThankyouComponent';
import NotFoundPage from './components/LandingComponent/404';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const App = () => (
      <div className='container-fluid'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={() => (<LandingPage root={this.root} />)} />
            <Route exact path='/signup' component={() => (<RegistrationComponent root={this.root} />)} />
            <Route exact path='/login' component={() => (<LoginComponent root={this.root} />)} />
            <Route exact path='/forgot_password' component={() => (<ForgotPasswordComponent root={this.root} />)} />
            <Route exact path='/dashboard' component={() => (<DashboardComponent root={this.root} />)} />
            <Route exact path='/solutionResult' component={() => (<SolutionResultComponent root={this.root} />)} />
            <Route exact path='/confirmBooking' component={() => (<ConfirmBookingComponent root={this.root} />)} />
            <Route exact path='/enquiry' component={() => (<EnquiryComponent root={this.root} />)} />
            <Route exact path='/enquiryresult' component={() => (<EnquiryResultComponent root={this.root} />)} />
            <Route exact path='/profile' component={() => (<DermatologyComponent root={this.root} />)} />
            <Route exact path='/dentist' component={() => (<DentistComponent />)} />
            <Route exact path='/ent' component={() => (<ENTComponent />)} />
            {/* <Route exact path='/ayurveda' component={() => (<AyurvedaComponent/>)}/> */}
            <Route exact path='/dermatology' component={() => (<DermatologyComponent />)} />
            <Route exact path='/ophthalmology' component={() => (<OphthalmologyComponent />)} />
            <Route exact path='/neurology' component={() => (<NeurologyComponent />)} />
            <Route exact path='/gynae' component={() => (<GynaeComponent />)} />
            <Route exact path='/psychiatry' component={() => (<PsychiatryComponent />)} />
            <Route exact path='/key-benefits-of-daily-yoga' component={() => (<DailyYogaComponent />)} />
            {/*<Route exact path='/anti-aging' component={() => (<AntiAgingComponent />)}/> 
            <Route exact path='/allergies-types-causes-and-healthy-tips' component={() => (<AllergiesTypeComponent />)}/> 
            <Route exact path='/Smoking-woman' component={() => (<SmokingWomanComponent />)}/> 
            <Route exact path='/ear-infection' component={() => (<EarInfectionComponent />)}/> 
            <Route exact path='/cough-and-cold' component={() => (<CoughandColdComponent />)}/> 
            <Route exact path='/arthritis' component={() => (<ArthritisComponent />)}/>  */}
            <Route exact path='/radiology' component={() => (<RadiologyComponent />)} />
            <Route exact path='/orthopedics' component={() => (<OrthopedicsComponent />)} />
            <Route exact path='/physiotherapy' component={() => (<PhysiotherapyComponent />)} />
            <Route exact path='/pediatrics' component={() => (<PediatricsComponent />)} />
            <Route exact path='/pathology' component={() => (<PathologyComponent />)} />
            <Route exact path='/careers' component={() => (<CareersComponent />)} />
            <Route exact path='/about-us' component={() => (<AboutusComponent />)} />
            <Route exact path='/plockr' component={() => (<PlockrComponent />)} />
            <Route exact path='/register' component={() => (<RegisterComponent />)} />
            <Route exact path='/contact-us' component={() => (<ContactusComponent />)} />
            <Route exact path='/terms-of-use' component={() => (<TermsOfUseComponent />)} />
            <Route exact path='/blog/:page?' component={BlogComponent} />
            <Route exact path='/ivf' component={() => (<IvfComponent />)} />
            <Route exact path='/privacy' component={() => (<PrivacypolicyComponent />)} />
            {/* <Route exact path='/dentalcomplications' component={() => (<DentalComplicationsComponent/>)}/> */}
            <Route exact path='/rootcanal' component={() => (<RootCanalComponent />)} />
            <Route exact path='/teethwhitening' component={() => (<TeethWhiteningComponent />)} />
            <Route exact path='/plockrapp' component={() => (<PlockrMainComponent />)} />
            <Route exact path='/plockr-dashboard' component={() => (<PlockrAppComponent />)} />
            <Route exact path='/plockr-uploader' component={() => (<PlockrUploaderComponent />)} />
            <Route exact path='/plockr_profile_edit' render={(props) => <PlockrProfileEditComponent {...props} />} />
            <Route exact path='/send_reports' render={(props) => <SendReportsComponent {...props} />} />
            <Route exact path='/mycomponent' component={() => (<MyComponent />)} />
            {/* <Route exact path='/mentalhealth' component={() => (<MentalhealthComponent/>)}/> */}
            {/* <Route exact path='/savetooth' component={() => (<SavetoothblogComponent/>)}/> */}
            <Route exact path='/prescription_builder' component={() => (<PrescriptionBuilderComponent />)} />
            <Route exact path='/prescription-dashboard' render={(props) => <PrescriptionDashboardComponent {...props} />} />
            <Route exact path='/selected-blog' render={(props) => <SelectedBlog {...props} />} />
            <Route path='/pet-love-benefits' component={() => (<LovePetsComponent />)} />
            <Route path='/an-era-of-a-new-healthcare' component={() => (<IntoductoryblogComponent />)} />
            <Route path='/mental-health-quick-counselling' component={() => (<MentalhealthComponent />)} />
            <Route path='/save-your-tooth-best-dentist' component={() => (<SavetoothblogComponent />)} />
            <Route path='/dental-complications-and-healthy-suggestions' component={() => (<DentalComplicationsComponent />)} />
            <Route path='/how-electronic-gadgets-effects-pregnancy' component={() => (<OutcomesonPregnancyComponent />)} />
            <Route path='/dental-care-root-canal-treatment' component={() => (<RootCanalComponent />)} />
            <Route path='/teeth-whitening-complete-guide' component={() => (<TeethWhiteningComponent />)} />
            <Route path='/myths-and-reality-of-pcos' component={() => (<PcosComponent />)} />
            <Route path='/hyperthyroidism' component={() => (<HyperthyroidismComponent />)} />
            <Route path='/hair-loss-treatment' component={() => (<HairLossComponent />)} />
            <Route path='/vitamin-c-benefits' component={() => (<VitamincBenefitsComponent />)} />
            <Route path='/how-to-get-rid-of-acne' component={() => (<AcneComponent />)} />
            <Route path='/symptoms-and-treatments-high-blood-pressure' component={() => (<HighBloodPressureComponent />)} />
            <Route path='/prementrual-syndrome-preventionsand-guide' component={() => (<PMSComponent />)} />
            <Route exact path='/post/:uriTag' component={BlogPost} />
            <Route exact path='/covid19-test' component={() => (<CovidComponent />)} />
            <Route exact path='/covid19-test-booked' component={() => (<ThankyouComponent />)} />
            <Route path='*' component={NotFoundPage} />
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