import React, { Component } from 'react'
import { Alert } from 'antd'

class NoticeComponent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Alert
        closable={true}
        message={this.props.message}
        descripttion={this.props.descripttion}
        type={this.props.type}
        showIcon={this.props.showIcon}
        banner={this.props.isTop}
      />
    )
  }
}

export default NoticeComponent
