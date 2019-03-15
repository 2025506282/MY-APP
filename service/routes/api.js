const express = require('express')
const router = express.Router()
router.post('/api',function(req, res){
    res.send('api')
})