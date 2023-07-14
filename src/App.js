/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ProjectPage from 'pages/ProjectPage';
import ProjectDetailPage from 'pages/ProjectDetailPage';
import TeamPage from 'pages/TeamPage';
import DiscussProjectPage from 'pages/DiscussProjectPage';
import NotFoundPage from 'pages/NotFoundPage';

import 'assets/css/styles.css';
import PrivacyPolicyPage from 'pages/PrivacyPolicyPage';
import TermsAndConditionsPage from 'pages/TermsAndConditions';
import CancellationAndRefundPage from 'pages/CancellationPage';
import ShippingAndDeliveryPage from 'pages/ShippingAndDeliveryPage';
import ContactUsPage from 'pages/ContactUsPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/project" component={ProjectPage} />
      <Route exact path="/project/:id" component={ProjectDetailPage} />
      <Route exact path="/team" component={TeamPage} />
      <Route exact path="/discuss-project" component={DiscussProjectPage} />
      <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route exact path="/terms-and-conditions" component={TermsAndConditionsPage} />
      <Route exact path="/cancellation-and-refund" component={CancellationAndRefundPage} />
      <Route exact path="/shipping-and-delivery" component={ShippingAndDeliveryPage} />
      <Route exact path="/contact-us" component={ContactUsPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
