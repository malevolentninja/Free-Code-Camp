# Continue working with Nodejs Servers

## Tasks: 
### Complete 8. "HTTP Collect"

- Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument.
- Collect all data from the server (not  
  just the first "data" event) 
- then write two lines to the console (stdout).  
   
- The first line you write should just be an integer representing the number  
  of characters received from the server. 
- The second line should contain the complete String of characters sent by the server.  

#### Two options : 
  1. Collect data across multiple "data" events and append the results  
  together prior to printing the output. Use the "end" event to determine  
  when the stream is finished and you can write the output.  
   
  2. Use a third-party package to abstract the difficulties involved in  
  collecting an entire stream of data. Two different packages provide a  
  useful API for solving this problem (there are likely more!): bl (Buffer  
  List) and concat-stream; take your pick!  

I went with option 2.

install bl:
```sh
npm install bl
```

```sh 
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})

```

### 9. "Juggling Async"

This problem is the same as the previous problem (HTTP COLLECT): 
 - You need to use http.get()
 - However, this time you will be provided with three URLs as the first three command-line arguments 
   
- You must collect the complete content provided to you by each of the URLs  
- print it to the console (stdout)
- just the data as a String; one line per URL.
- The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments

#### Plan: 
1. queue results and keep track of the urls content returned (how much)
2. count call backs (could use async module for ease but won't for challenge

```sh
const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
  results[index] = data.toString()
  count++
  
  if (count ===3) {
    printResults()
   }
  }))
 })
}

for (let = 0; i < 3; i++) {
  httpGet(i)
}
```


### 10. "Time Server"

Write a TCP time server!  
   
- Your server should listen to TCP connections on the port provided by the first argument to your program. 
- For each connection you must write thecurrent date & 24 hour time in the format:  
     "YYYY-MM-DD hh:mm"  
   
-followed by a newline character. 
- Month, day, hour and minute must be zero-filled to 2 integers. For example:  
   
     "2013-07-06 17:42"  
   
  After sending the string, close the connection. 


```sh 
const net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  const d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

```

### 11. "HTTP File Server"

### 12. "HTTP Uppercaserer"

### 13. "HTTP JSON API Server"
  
  
