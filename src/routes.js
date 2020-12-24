const { Router } = require('express')
const { PlaylistController, SongController } = require('./controllers')

const routes = Router()
routes.get('/', PlaylistController.index)
routes.get('/song/:id', SongController.index)

module.exports = routes
