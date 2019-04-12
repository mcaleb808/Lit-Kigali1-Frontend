import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home/Home';
import Login from './Auth';
import ResetPassword from './ForgotPassword/ResetPassword';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ForgotPasswordMessage from './ForgotPassword/ForgotPasswordMessage';
<<<<<<< HEAD
import Auth from './Auth';
import ConfirmedEmailMessage from './Auth/ConfirmedEmailMessage';
=======
import ProfileView from './Profile/ProfileView';
>>>>>>> feat: implement follow a user feature

const Routes = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/forgot-password" component={ForgotPassword} />
    <Route exact path="/auth" component={Auth} />
    <Route exact path="/forgot-password-message" component={ForgotPasswordMessage} />
    <Route exact path="/users/:userId/reset/:resetCode" component={ResetPassword} />
<<<<<<< HEAD
    <Route
      exact
      path="/users/:userId/confirm_email/:confirmationCode"
      component={ConfirmedEmailMessage}
    />
=======
    <Route exact path="/profiles/:username" component={ProfileView} />
>>>>>>> feat: implement follow a user feature
  </div>
);

export default Routes;
