// const nodemailer = require('nodemailer')
// const email = require('../../utils/email.js')
const UserModel = require('../../models/user/user.js')
const MailModel = require('../../models/mail/mail.js')
const config = require('../../config/email.js')
const EXPIRES = 'code is expires，please get again!'
const EMAIL_EXIST = 'this email has been reigstered!'
const CODE_WRONG = 'code is wrong!'
const REGISTER_SUCCESS = 'register successed'
const REGISTER_FAIL = 'register failed'
const LOGIN_SUCCESS = 'login successed'
const LOGIN_FAIL = 'login failed'
class User {
    async login(req, res, next) {
        try {
            const user = await UserModel.findOne({ email: req.body.email, password: req.body.password })
            if (user) {
                res.send({
                    status: true,
                    message: LOGIN_SUCCESS,
                    model: user
                })
            } else {
                res.send({
                    status: false,
                    message: LOGIN_FAIL,
                    model: user
                })
            }
        } catch (err) {

        }
    }
    async register(req, res, next) {
        try {
            const mail = await MailModel.findOne({ email: req.body.email })
            const code = await MailModel.findOne({ email: req.body.email, code: req.body.code })
            if (mail && code) {
                if (parseInt((new Date().getTime() / 1000)) - mail.send_time < config.code.expires) {
                    const user = await UserModel.findOne({ email: req.body.email })
                    if (user) {
                        res.send({
                            status: false,
                            message: EMAIL_EXIST
                        })
                    } else {
                        const user = await UserModel.create(req.body)
                        res.send({
                            status: true,
                            message: REGISTER_SUCCESS,
                            model: user
                        })
                    }
                } else {
                    res.send({
                        status: false,
                        message: EXPIRES
                    })
                }
            } else if (mail && !code) {
                res.send({
                    status: false,
                    message: CODE_WRONG
                })
            } else {
                res.send({
                    status: false,
                    message: EXPIRES
                })
            }
        } catch (err) {
            res.send({
                status: false,
                message: REGISTER_FAIL
            })
            console.log(err)
        }
    }
}
module.exports = new User()