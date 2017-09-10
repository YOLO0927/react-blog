import React from 'react';
import { Router, Route } from 'react-router';
import PropTypes from 'prop-types';
import Index from './index';
import Login from './login';
import Register from './register';

const RouterConfig = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={Index} />
    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
  </Router>
);


RouterConfig.propTypes = {
  history: PropTypes.string.isRequired
};

export default RouterConfig;
