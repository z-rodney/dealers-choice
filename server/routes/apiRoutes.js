const router = require("express").Router()
const { db, Plant, Detail } = require('../db')

router.get('/plants', async (req, res, next) => {
  try {
    const plants = await Plant.findAll();
    res.send(plants)
  } catch(err) {
    next(err)
  }
})

module.exports = router
