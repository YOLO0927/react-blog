/**
 * Created by 47166 on 2017/8/14.
 */
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Login from './login'
import Register from './register'

const RouterConfig = ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/">
        <Route path="index" component={App} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
      </Route>
    </Router>
  )
}


export default RouterConfig
