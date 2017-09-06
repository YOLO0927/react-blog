import React, { Component } from 'react';
import { Link } from 'react-router'
import Header from './header'
import logo from '../images/logo.svg';
import './css/index.less';

class Index extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Let me go to <Link to="/login">login page</Link></p>
        {this.props.children}
      </div>
    );
  }
}

export default Index;
