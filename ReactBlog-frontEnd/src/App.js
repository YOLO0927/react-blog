import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import Router from './router';
import './css/app.less';

ReactDOM.render((
  <Router history={hashHistory} />
), document.getElementById('root'));
