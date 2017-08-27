import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item

class LoginBox extends Component {
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
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住我</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登 录
          </Button>
        </FormItem>
      </Form>
    )
  }
}


export default Form.create()(LoginBox);
