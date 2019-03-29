const nodemailer = require('nodemailer')
const config = require('../../config/email.js')
const moment = require('moment')
const Mail = require('../../models/mail/mail.js')
class Email {
    constructor() {
        this.getCode = this.getCode.bind(this)
        this.sendCode = this.sendCode.bind(this)
    }
    /***
     * 生成随机验证码
     */
    getCode() {
        let code = []
        const arr = config.code.random
        for (let index = 0; index < config.code.codeLength; index++) {
            let randomNumber = arr[parseInt((arr.length - 1) * Math.random())]
            code.push(randomNumber)
        }
        return code.join('')
    }
    /***
     * 发送验证码
     */
    sendCode(req, res, next) {
        let code = this.getCode()
        let transporter = nodemailer.createTransport({
            service: config.service, // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
            auth: config.auth
        })
        let mailOptions = {
            from: config.from,
            to: req.body.email,
            subject: config.subject,
            html: '<h2>您的邮箱验证码是:' + code + '</h2>'
        }
        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                // throw new Error(error)
                res.send({
                    message: error,
                    status: false
                })
                return false
            }
            Mail.findOneAndUpdate({ email: req.body.email }, { code: code, send_time: parseInt(new Date().getTime()/1000) }, { upsert: true, new: true }, (err, result) => {
                if (err) {
                    res.send({
                        message: err,
                        status: false
                    })
                    return false
                }
                res.send({
                    message: null,
                    status: true,
                    model: result
                })
            })
        })
    }
}
module.exports = new Email()