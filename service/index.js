const express = require('express')
const app = new express()
const bodyParse = require('body-parser')
db = require('./mongodb/db.js')
const router = require('./routes/index.js')
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    if (req.method == 'OPTIONS') {
      res.send(200); /让options请求快速返回/
    } else {
      next()
    }
  })
  app.use(bodyParse.json())
  app.use(bodyParse.urlencoded({extended: false}))
  router(app)
  app.listen(9999,function(){
      console.log('server is open')
  })