import React, { Component } from 'react';
import {
  Form, Icon, Input, Button
} from 'antd';
import '../User.scss'
import { Link } from 'react-router-dom'
class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClickGetCode: false
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isClickGetCode) {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  }
  /***
   * 当鼠标移出重复密码框时，判断是否
   */
  handleConfirmBlur = (e) => {
    const value = e.target.value
    this.setState({
      confirmDirty: this.state.confirmDirty || !!value
    })
  }
  /***
   * 与第一次输入password进行比较,第一行password先输入
   */
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('Two password that you enter is inconsistent')
    } else {
      callback()
    }
  }
  /***
   * 与第一次输入password进行比较，第二行password先输入
   */
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['rePassword'], { force: true })
    }
    callback()
  }
  /***
   * 判断是否可以点击get code按钮
   */
  changeState = () => {
    const form = this.props.form
    form.validateFields(['email'], (error, values) => {
      if (error === null) {
        this.setState({
          'isClickGetCode': true
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
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
          {!this.state.isClickGetCode ?
            <Button className="user-submit" onClick={this.changeState.bind(this)}>
              Get code to check!
            </Button>
            : getFieldDecorator('code', {
              rules: [{
                min: 4, max: 4, message: 'The code length is 4!'
              }, {
                required: true, message: 'Please input your code',
              }],
            })(
              <Input prefix={<Icon type="code" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Please input code from email" />
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
            }, {
              validator: this.validateToNextPassword,
            }],
            validateFirst: true
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('rePassword', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.compareToFirstPassword
            }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onBlur={this.handleConfirmBlur} type="password" placeholder="Confirm Password" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="user-submit">
            Register
          </Button>
          Or&nbsp;&nbsp;<Link to="/login">Already have account!</Link>
        </Form.Item>
      </Form>
    );
  }
}
const Register = Form.create({ name: 'login' })(RegisterForm);
export default Register