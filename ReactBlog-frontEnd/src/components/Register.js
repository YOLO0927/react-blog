import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item

class RegisterBox extends Component {
  constructor (props) {
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.props.form.getFieldsValue())
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values)
      }
    });
  }

  testPassword = (...args) => {
    console.log(args)
    let form = this.props.form
    form.validateFields(['repeatPassword'], (err, values)=> {
      if (values.repeatPassword && values.repeatPassword !== form.getFieldsValue(['password'])) {
        form.setFields({
          repeatPassword: {
            value: values.repeatPassword,
            errors: [new Error(`两次密码输入不一致`)]
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
              <Input placeholder="用户名" prefix={<Icon type="user" style={{fontSize: 13}} />} />
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
