# HTTP Collect

- Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument.
- Collect all data from the server (not  
  just the first "data" event) 
- then write two lines to the console (stdout).  
   
- The first line you write should just be an integer representing the number  
  of characters received from the server. 
- The second line should contain the complete String of characters sent by the server.  

### Two options : 

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
