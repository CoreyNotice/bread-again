// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})
// // 404 Page
// app.get('*', (req, res) => {
//   res.send('Wrong page homie')
// })

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)


// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})


