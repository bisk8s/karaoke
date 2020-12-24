const _ = require('lodash')
const ytdl = require('ytdl-core')

class SongController {
  static async index (request, response) {
    const id = _.get(request.params, 'id', '')
    const uri = `http://www.youtube.com/watch?v=${id}`

    const info = await ytdl.getInfo(uri, { filter: format => format.container === 'mp4' })
    const details = info.videoDetails
    const video = _.first(_.filter(info.formats, format => format.container === 'mp4'))
    const related = info.related_videos
    const songs = _.map(related, (song) => `<li><a href="/song/${song.id}">${song.title}</a></li>`).join('')

    response.render('Song', { video, details, songs })
  }
}

module.exports = SongController
