const { db, Plant, Detail } = require('./db')

Plant.hasOne(Detail)
Detail.belongsTo(Plant)

const plants = [
  {name: 'Aloe Vera',
  imgUrl: 'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/aloe-vera-white-pot_sunwand24-ss_edit.jpg?itok=Y7HnaYk3'},

  {name: 'Jade Plant',
  imgUrl: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/1/7/1/shutterstock_1346551367.jpg.rend.hgtvcom.616.462.suffix/1578422274012.jpeg'},

  {name: 'Pothos',
  imgUrl: 'https://www.whiteflowerfarm.com/mas_assets/cache/image/5/b/b/7/23479.Jpg'},

  {name: 'Snake Plant',
  imgUrl: 'https://secure.img1-ag.wfcdn.com/im/94864537/compr-r85/3809/38091101/35-artificial-foliage-plant-in-pot.jpg'},

  {name: 'ZZ Plant',
  imgUrl: 'https://www.easternleaf.com/v/vspfiles/photos/808380-03-2.jpg?v-cache=1556729985'}
]

const details = [
  {
    description: '',
    wateringFrequency: '',
    light: '',
  }
]

const syncAndSeed = async () => {
  await db.sync({force: true});
  Promise.all([
    Plant.bulkCreate(plants)
  ])
}

module.exports = {
  db,
  Plant,
  Detail,
  syncAndSeed
}
