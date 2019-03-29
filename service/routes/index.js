const user = require('./user.js')
const mail = require('./mail.js')
module.exports = app => {
    app.use('/api/user', user),
    app.use('/api/mail', mail)
}