import RedditES6 from './RedditES6'
import ExtractImages from './ExtractImages'
import RenderImages from './RenderImages'

RedditES6.load()
  .then(ExtractImages)
  .then(RenderImages)
