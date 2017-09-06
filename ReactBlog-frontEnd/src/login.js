import React, { Component } from 'react';
import LoginComponent from './components/Login'
import { Link, hashHistory } from 'react-router'
import { Row, Col, message } from 'antd'
import http from './public/preRequest'
import { signIn } from './redux/actions'
import store from './redux/store'
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
    http(window.interface.signin, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userInfo.userName,
        password: userInfo.password,
      })
    }).then((data) => {
      let res = JSON.parse(data)
      if (res.data) {
        message.success('登录成功, 即将为您跳转至首页')
        store.dispatch(signIn(res.data))
        setTimeout(() => {
          hashHistory.push('/')
        }, 2000)
      }
    })
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
