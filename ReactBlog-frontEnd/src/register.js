import React, { Component } from 'react';
import RegisterComponent from './components/Register'
import { Link, hashHistory } from 'react-router'
import { Row, Col } from 'antd'
import './css/login.css'
import logo from '../images/logo.png'

const form = {
  userName: '',
  password: '',
  remember: false
}

const Register = () => {
  const wrapStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#f1f1f1'
  }
  const logoStyle = {
    display: 'inline-block',
    margin: '50px 50px',
    width: '130px',
    cursor: 'pointer'
  }

  const toIndex = () => {
    hashHistory.push('/')
  }

  const registerSubmit = (userInfo) => {
    console.log(userInfo)
  }

  return (
    <div style={wrapStyle}>
      <img onClick={toIndex} style={logoStyle} src={logo} alt="随记"/>
      <div className="center pd30" id="loginBox">
        <Row style={{fontSize: '18px'}} className="title">
          <Col className="textRight" span={10}>
            <Link style={{padding: '10px'}} to="login">登录</Link>
          </Col>
          <Col className="textCenter" span={4}>
            <strong>·</strong>
          </Col>
          <Col className="textLeft" span={10}>
            <Link style={{padding: '10px'}} className="active" to="register">注册</Link>
          </Col>
        </Row>
        <RegisterComponent onSubmit={registerSubmit} />
      </div>
    </div>
  )
}



export default Register
