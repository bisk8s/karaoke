const _ = require('lodash')
const ytdl = require('ytdl-core')

class SongController {
  static async index (request, response) {
    const id = _.get(request.params, 'id', '')
    const uri = `http://www.youtube.com/watch?v=${id}`

    const video = ytdl.getURLVideoID(uri, { filter: format => format.container === 'mp4' })

    response.render('Song', { video })
  }
}

module.exports = SongController
