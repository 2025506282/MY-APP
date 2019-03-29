const express = require('express')
const router = express.Router()
const mailController = require('../controllers/mail/mail')
router.post('/send',mailController.sendCode)
module.exports = router