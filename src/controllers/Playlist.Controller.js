const youtubeSearch = require('youtube-search')
const _ = require('lodash')
// const fs = require('fs')
// const youtubedl = require('youtube-dl')

class PlaylistController {
  static async index (request, response) {
    const opts = {
      maxResults: 100,
      key: 'AIzaSyCCps0th9RJDZkeEBeLfsXgdCdOoscPcYM'
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
