# Finish Working with NodeJs

### 11. "HTTP File Server"

Write an HTTP server that serves the same text file for each request it receives.
- Your server should listen on the port provided by the first argument to your program.
- You will be provided with the location of the file to serve as the second command-line argument. 
- You must use the fs.createReadStream() method to stream the file contents to the response.
- http.createServer() takes a callback that is called once for each connection received by your server. The callback function has the signature: ```sh function callback (request, response) { /* ... */ }```

A typical Node HTTP server looks like this:
```sh
var http = require('http')
var server = http.createServer(function (req, res) {
  // request handling logic...
})
server.listen(8000)
```
My Solution: 
```sh
const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
```

### 12. "HTTP Uppercaserer"
- Write an HTTP server that receives only POST requests 
- converts incoming POST body characters to upper-case 
- returns it to the client.
- Your server should listen on the port provided by the first argument to your program.

There is a simple npm called 'through2-map' which works as an API, enabling the creation of a 'transform stream' using only a single function. It works like Array#map() for streams: 
```sh
var map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```
The incoming data from inStream is converted to a string
- the characters are reverse
- the result is passed through outStream. 

My Solution: 
```sh
const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
```

### 13. "HTTP JSON API Server"

Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

/api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:
```sh
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```
Add second endpoint for the path '/api/unixtime' 
- which accepts the same query string 
- but returns UNIX epoch time in milliseconds 
- (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime' 
For example:
```sh
{ "unixtime": 1376136615474 }```
- Your server should listen on the port provided by the first argument to your program.
  
The request object from an HTTP server has a url property that you will need to use to "route" your requests for the two endpoints.

You can parse the URL and query string using the Node core 'url' module. url.parse(request.url, true) will parse content of request.url and provide you with an object with helpful properties.

For example, on the command prompt, type:
```sh
$ node -pe "require('url').parse('/test?q=1', true)"
```
Documentation on the url module can be found by pointing your browser here: {rootdir:/node_apidoc/url.html}

Your response should be in a JSON string format. Look at JSON.stringify() for more information.

You should also be a good web citizen and set the Content-Type properly:
```sh
res.writeHead(200, { 'Content-Type': 'application/json' }) ```
- The JavaScript Date object can print dates in ISO format, e.g. new Date().toISOString(). 
- It can also parse this format if you pass the string into the Date constructor. 
- Date.getTime() will also come in handy.

My Solution:
```sh
const http = require('http')
const url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true)
  const time = new Date(parsedUrl.query.iso)
  let result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
```

