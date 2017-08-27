import React, { Component } from 'react';
import LoginComponent from './components/Login'
import { Link, hashHistory } from 'react-router'
import { Row, Col, message } from 'antd'
import './css/login.css'
import logo from '../images/logo.png'

const form = {
  userName: '',
  password: '',
  remember: false
}

const Login = () => {
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

  const loginSubmit = (userInfo) => {
    console.log(userInfo)
    fetch('http://127.0.0.1:9309/signIn', {
      method: 'POST',
      body: JSON.stringify({
        username: userInfo.userName,
        password: userInfo.password,
      })
    }).then((res) => {
      console.log(res)
      return res.text()
    }).then( (data) => {
      console.log(JSON.parse(data))
      message.success(JSON.parse(data).message, 3)
    } )
  }

  return (
    <div style={wrapStyle}>
      <img onClick={toIndex} style={logoStyle} src={logo} alt="随记"/>
      <div className="center pd30" id="loginBox">
        <Row style={{fontSize: '18px'}} className="title">
          <Col className="textRight" span={10}>
            <Link style={{padding: '10px'}} className="active" to="login">登录</Link>
          </Col>
          <Col className="textCenter" span={4}>
            <strong>·</strong>
          </Col>
          <Col className="textLeft" span={10}>
            <Link style={{padding: '10px'}} to="register">注册</Link>
          </Col>
        </Row>
        <LoginComponent onSubmit={loginSubmit} />
      </div>
    </div>
  )
}



export default Login
