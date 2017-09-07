var http = require('http')
var fs = require('fs')
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    console.log('im hereeee');
    fs.readFile('./views/index.html', 'utf8', function (errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/cars') {
    fs.readFile('./views/cars.html', 'utf8', function (errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/stylesheets/style.css') {
    fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/css'})
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/images/tesla.jpg') {
    fs.readFile('./images/tesla.jpg', function (errors, contents) {

      response.writeHead(200, {'Content-Type': 'image/jpg'})
      response.write(contents)
      response.end()
    })
  } else {
    response.writeHead(404)
    response.end('File not found!!')
  }
})
server.listen(7077)
