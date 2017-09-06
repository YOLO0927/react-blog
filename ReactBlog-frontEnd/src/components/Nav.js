import React, { Component } from 'react'
import { Affix } from 'antd'
import '../css/nav.less'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.user = props.userInfo.user
  }

  render () {
    return (
      <Affix className="nav-box">
        <div>{this.user.name}</div>
      </Affix>
    )
  }
}

export default Nav
