const Sequelize = require("sequelize")
const dbUrl = process.env.DATABASE_URL || 'postgres://localhost/starter-plants'
//initialize your db, don't forget to include the possible heroku database URL
const db = new Sequelize(dbUrl)
const {STRING, TEXT} = Sequelize

const Plant = db.define('plant', {
  name: {
    allowNull: false,
    type: STRING
  },
  imgUrl: STRING
})

const Detail = db.define('detail', {
  description: TEXT,
  size: STRING,
  wateringFrequency: STRING,
  light: STRING
})
//export your db

module.exports = {
  db,
  Plant,
  Detail
}
