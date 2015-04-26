'use strict'

export default (urls) => {
  var body = document.body
  body.innerHTML = urls.map((url) => `<img src="${url}">`).join('')
}
