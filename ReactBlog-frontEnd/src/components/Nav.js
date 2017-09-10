import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Affix } from 'antd';
import '../css/nav.less';

class Nav extends Component {
  constructor (props) {
    super(props);
    this.user = props.userInfo.user;
  }

  render () {
    return (
      <Affix className="nav-box">
        <div>{this.user.name}</div>
      </Affix>
    );
  }
}

Nav.propTypes = {
  userInfo: PropTypes.object.isRequired
};

export default Nav;
