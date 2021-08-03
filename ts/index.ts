import * as handler from './handler'

addEventListener('fetch', (event) => {
  event.respondWith(handler.handleRequest(event.request))
})
