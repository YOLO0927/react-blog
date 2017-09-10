import React from 'react';
import { Link } from 'react-router';
import Header from './header';
import './css/index.less';

const Index = () => (
  <div className="App">
    <Header />
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p>Let me go to <Link to="/login">login page</Link></p>
  </div>
);

export default Index;
