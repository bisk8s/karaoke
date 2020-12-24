const express = require('express')
const path = require('path')
const routes = require('./routes')

// SERVER CONFIG
const PORT = process.env.PORT || 3000

// APP
const app = express()

// render engine
app.set('view engine', 'ejs')

// alter default path from '/views' to '/src/views'
app.set('views', path.join(__dirname, 'views'))

// static files
app.use(express.static('public'))

app.use(routes)
app.listen(PORT)
console.log(`Running server on "http://localhost:${PORT}/`)
