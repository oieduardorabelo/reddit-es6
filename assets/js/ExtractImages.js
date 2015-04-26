'use strict'

export default (posts) => {
  return posts
    .filter((post, index) => !post.data.over_18 && index <= 3)
    .map((post) => post.data.url)
    .filter((url) => /gifv?$/.exec(url))
    .map((url) => url.replace(/v$/, ''))
}
