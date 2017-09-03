import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import http from '../public/preRequest'

const FormItem = Form.Item

class RegisterBox extends Component {
  constructor (props) {
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let errorObj = this.props.form.getFieldsError()
    for (var key in errorObj) {
      if (errorObj[key]) {
        return message.error('信息有误，请确认无误后再进行操作')
      }
    }
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values)
      }
    });
  }

  testPassword = (...args) => {
    let form = this.props.form
    form.validateFields(['repeatPassword'], (err, values)=> {
      if (!err && values.repeatPassword && values.repeatPassword !== form.getFieldsValue(['password']).password) {
        form.setFields({
          repeatPassword: {
            value: values.repeatPassword,
            errors: [new Error(`两次密码输入不一致`)]
          }
        })
      }
    })
  }

  testUserName = (...args) => {
    let form = this.props.form
    form.validateFields(['userName'], (err, values)=> {
      if (!err) {
        http(window.interface.register, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: values.userName
          })
        }).then((data) => {
          if (JSON.parse(data).data) {
            form.setFields({
              userName: {
                value: values.userName,
                errors: [new Error('该用户名已存在')]
              }
            })
          }
        })
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {
            getFieldDecorator('userName', {
              rules: [
                {
                  required: true,
                  message: '请输入你的用户名!'
                }
              ]
            })(
              <Input onBlur={(event) => this.testUserName(event)} placeholder="用户名" prefix={<Icon type="user" style={{fontSize: 13}} />} />
            )
          }
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '请输入你的密码!'
                }
              ]
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
            )
          }
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('repeatPassword', {
              rules: [
                {
                  required: true,
                  message: '请输入你的密码!'
                }
              ]
            })(
              <Input onBlur={this.testPassword.bind(this, 1, 2)} prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="重复密码" />
            )
          }
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            注 册
          </Button>
        </FormItem>
      </Form>
    )
  }
}


export default Form.create()(RegisterBox);
