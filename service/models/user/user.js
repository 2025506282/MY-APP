const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    email: String,
    password: String,
    create_time: Number
})
const User = mongoose.model('User', userSchema)
module.exports = User