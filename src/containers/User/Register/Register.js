import React, { Component } from 'react'
import {
  Form, Icon, Input, Button
} from 'antd'
import { connect } from 'react-redux'
import { register } from '@/reducers/user/action'
import { sendCode } from '@/reducers/mail/action'
import '../User.scss'
import { Link, withRouter, Redirect } from 'react-router-dom'
function GetCode(props) {
  return (<span onClick={props.getCode} className="get-code">{props.message}</span>)
}

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClickGetCode: false,
      message: 'Get Code!',
      time: 6
    }
    this.handleSubmit.bind(this)
    this.getCode.bind(this)
  }
  /**
   * 获取短信验证码
   */
  getCode = () => {
    this.props.form.validateFields(['email'], (error, value) => {
      if (error) {
        return false
      }
      this.props.sendCode(value)
      this.setState({
        'isClickGetCode': true,
        'message': 'Get Code Again!'
      })
      let timer = null
      timer = setInterval(() => {
        let time = this.state.time - 1
        if (time === 0) {
          this.setState({
            'isClickGetCode': false,
            'time': 6
          })
          clearInterval(timer)
        } else {
          this.setState({
            'time': time
          })
        }
      }, 1000)
    })
  }
  /***
   * 注册
   */
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.register(values)
      }
    })
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
  render() {
    const { getFieldDecorator } = this.props.form;
    const { isRegisterSuccess } = this.props
    if (isRegisterSuccess) {
      return <Redirect to="/" />
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
            {getFieldDecorator('code', {
              rules: [{
                min: 4, max: 4, message: 'The code length is 4!'
              }, {
                required: true, message: 'Please input your code',
              }],
            })(

              <Input addonAfter={
                !this.state.isClickGetCode ? <GetCode message={this.state.message} getCode={this.getCode} />
                  : <span className="time">{this.state.time}s</span>
              } prefix={<Icon type="code" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Please input code from email" />
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
            Or&nbsp;&nbsp;<Link to="/login">Already have account!{JSON.stringify(this.props)}</Link>
          </Form.Item>

        </Form>
      )
    }
  }
}
const mapStateToProps = (state) => {
  return state
}

const Register = Form.create({ name: 'login' })(RegisterForm);
export default withRouter(connect(mapStateToProps, { register, sendCode })(Register))