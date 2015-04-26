'use strict'
import jsonp from 'jsonp'

class RedditES6 {
  constructor() {
    this.url = 'https://www.reddit.com/r/gifs/top.json?jsonp=callbackFunction'
  }
  load() {
    return new Promise((res, rej) => {
      jsonp(this.url, { param: 'jsonp' }, (err, data) => {
        if (err) { return rej(err) }

        res(data.data.children)
      })
    })
  }
}

export default new RedditES6()
