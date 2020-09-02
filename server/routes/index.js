const router = require("express").Router()
const { db } = require('../db/seed')
//import models from /db


router.use('/api', require('./apiRoutes'))

module.exports = router
