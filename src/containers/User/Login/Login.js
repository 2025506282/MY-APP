import React, { Component } from 'react'
import {
  Form, Icon, Input, Button, Checkbox
} from 'antd'
import { connect } from 'react-redux'
import '../User.scss'
import { Link,Redirect } from 'react-router-dom'
import { login } from '@/reducers/user/action'
class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit.bind(this)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { isLoginSuccess } = this.props
    console.log(this.props)
    if(isLoginSuccess) {
      return <Redirect to='/'/>
    } else {
      return (
        <Form onSubmit={this.handleSubmit} className="user-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Mail" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                min: 4, max: 20, message: 'The password must between 4 to 20!',
              }, {
                pattern: new RegExp(/^[A-Za-z0-9]+$/, "g"), message: 'Only input number or alpha!',
              }],
              validateFirst: true
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            <div className="login-top">
              <Checkbox>Remember me</Checkbox>
              <Link to="/register">Forgot password</Link>
            </div>
  
            <Button type="primary" htmlType="submit" className="user-submit">
              Log in
            </Button>
            Or&nbsp;&nbsp;<Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      )
    }
  }
}

const Login = Form.create({ name: 'login' })(LoginForm);
export default connect(state=>(state), { login })(Login)