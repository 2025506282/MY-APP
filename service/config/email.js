const config = {
    service: 'QQ',
    auth: {
        user: '2025506282@qq.com',
        pass: 'zqexghznktztefai'// 这个不是QQ密码，而是授权密码POP3/SMTP服务
    },
    subject: '邮箱验证码',
    from: '2025506282@qq.com',
    code: {
        codeLength: 4,
        random: [1,2,3,4,5,6,7,8,9],
        expires: 1000 * 60 // 过期时间10分钟
    }
}
module.exports = config