const environmentUrls = new Map()

environmentUrls.set('localhost', 'http://localhost:8080')

environmentUrls.set(
  'bookstore-flying-creamy-web.herokuapp.com',
  'https://bookstore-flying-creamy.herokuapp.com'
)

export default environmentUrls.get(window.location.hostname)
