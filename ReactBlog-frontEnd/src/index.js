/**
 * Created by 47166 on 2017/8/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router'
import Router from './router'
import './css/index.less';

ReactDOM.render((
  <Router history={hashHistory} />
), document.getElementById('root'));
