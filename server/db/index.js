const Sequelize = require("sequelize")
const dbUrl = process.env.DATABASE_URL || 'postgres://localhost/starter-plants'
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

Plant.hasOne(Detail)
Detail.belongsTo(Plant)


module.exports = {
  db,
  Plant,
  Detail
}
