const youtubeSearch = require('youtube-search')
const _ = require('lodash')
require('dotenv').config()

class PlaylistController {
  static async index (request, response) {
    // server.js
    const key = process.env.YOUTUBE_API_KEY

    const opts = {
      maxResults: 100,
      key
    }

    const keywords = _.get(request.query, 'keywords', 'melhores')
    youtubeSearch('karaoke+' + keywords, opts, (err, results) => {
      if (err) return console.log(err)

      const songs = _.map(results, (song) => `<li><a href="/song/${song.id}">${song.title}</a></li>`).join('')
      response.render('Playlist', { songs })
    })
  }
}

module.exports = PlaylistController
