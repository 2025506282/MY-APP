const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mailSchema = new Schema({
    email: String,
    code: String,
    send_time: Number
})
const Mail = mongoose.model('Mail',mailSchema)
module.exports = Mail