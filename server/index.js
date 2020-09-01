const express = require("express")
const app = express();
const { syncAndSeed } = require('./db')
const morgan = require('morgan')
const path = require('path')

app.use(morgan('dev'))

app.use(express.json())

//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!
app.use(express.static(path.join(__dirname,'/public')))

app.get('/', (req, res, next) => {
  res.render('index.html')
})

//require in your routes and use them on your api path
app.use('/api', require('./routes/apiRoutes'))
//404 handler

//500 handler


const port = process.env.PORT || 3035;
const init = async () => {
  await syncAndSeed();
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
}

init();

//listen
