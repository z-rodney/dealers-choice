const router = require("express").Router()
const { db } = require('../db/seed')
//const apiRoutes = require('./apiRoutes')
//import models from /db

//routes go here

router.use('/api', require('./apiRoutes'))

module.exports = router
