/**
 * Created by 47166 on 2017/8/14.
 */
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Index from './index';
import Login from './login'
import Register from './register'
import store from './redux/store'

let listener = store.subscribe(() => {
  console.log(store.getState())
})

const RouterConfig = ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={Index} />
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
    </Router>
  )
}


export default RouterConfig
