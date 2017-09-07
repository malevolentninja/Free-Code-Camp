
# Start a NodeJS Server

Free Code Camp recommend using c9.io but instead I have decided to use my local machine.

## Key commands

* To print instructions 
```sh
learnyounode print     
```
 * To execute  program in a test environment 
 ```sh
 learnyounode run program.js     
 ```
* To verify program 
```sh
learnyounode verify program.js  
```
* For help 
```sh
learnyounode help    
```

## Setup

* Create a workspace

```sh
mkdir nodeJSserver
```

* move to the workspace

```sh
cd nodeJSserver
```

* Update npm

```sh
npm install -g npm.
```
* Install learnyounode

```sh
npm install -g learnyounode
```

## Tasks

### 1. Complete "Hello World"

* create a new file with .js extension

```sh
program.js
```

* Write a program that prints the text "HELLO WORLD" to the console  
  (stdout)
  
  ```sh
  console.log("Hello World")
  ```
  
* run file
```sh
node program.js
```
  
* verify

  ```sh
  learnyounode verify program.js
  ```
  
  ### 2. Complete "Baby Steps"
  
  * Write a program that accepts one or more numbers as command-line arguments  
  and prints the sum of those numbers to the console (stdout)
  
 ```sh
  // node and path to program are the first two elements (0 and 1)

var count = process.argv.length;
var sum = 0;
for ( var i = 2, i < process.argv.length;i++){
  sum += Number(process.argv[i]);
}
console.log(sum)
```
  
### 3. Complete "My First I/O"
* Write a program that uses a single synchronous filesystem operation to
read a file and print the number of newlines (\n) it contains to the
console (stdout), similar to running cat file | wc -l.



```sh
var new = process.argv[2];
var fs = require('fs');
var file = fs.readFileSync(new).toString().split('\n');
console.log(file.length -1)


```


### 4. Complete "My First Async I/O"

```sh
  var new = process.argv[2];
var fs = require('fs');
fs.readFile(new, function doneReading(err, fileContents) {
    if (err){
        console.log('Error')
    } else {
        var number = fileContents.toString().split('\n').length -1;
    console.log(number);
    }

});
```


### 5. Complete "Filtered LS"

* Create a program that prints a list of files in a given directory,
filtered by the extension of the files. You will be provided a directory
name as the first argument to your program (e.g. '/path/to/dir/') and a
file extension to filter by as the second argument.


First solution
```sh
var fs = require('fs');
 var path = require('path')
 fs.readdir(process.argv[2], function (err, list) {
 list.forEach(function (file) {
  if (path.extname(file) === '.' + process.argv[3])
    console.log(file)
    });
    });

```


### 6. Complete "Make it Modular"


* Create a program that prints a list of files in a given directory,
filtered by the extension of the files. 
* The first argument is the directory name and the second argument is the extension filter. 
* Print the list of files (one file per line) to the console. 
* You must use asynchronous I/O.

* You must write a module file to do most of the work. The module must
export a single function that takes three arguments: the directory name,
the filename extension string and a callback function, in that order. 
* The filename extension argument must be the same as what was passed to your
program. 
* Don't turn it into a RegExp or prefix with "." or do anything except pass it to your module where you can do what you need to make your filter work.

* The callback function must be called using the idiomatic node(err, data)
convention. 
* This convention stipulates that unless there's an error, the first argument passed to the callback will be null, and the second will be your data. 
* In this exercise, the data will be your filtered list of files, as an Array.
* If you receive an error, e.g. from your call to fs.readdir(), the callback must be called with the error, and only the error, as the first argument.

* You must not print directly to the console from your module file, only from your original program.

* In the case of an error bubbling up to your original program file, simply check for it and print an informative message to the console.

These four things are the contract that your module must follow:

1. Export a single function that takes exactly the arguments described.
2. Call the callback exactly once with an error or some data as described.
3. Don't change anything else, like global variables or stdout.
4. Handle all the errors that may occur and pass them to the callback.

The benefit of having a contract is that your module can be used by anyone
who expects this contract. So your module could be used by anyone else who
does learnyounode, or the verifier, and just work.

program.js
```sh

var mymodule = require('./findfile');
mymodule(process.argv[2], process.argv[3], function callback(err, data) {
  if (err) {
   return callback(err);
   }
  data.forEach(function(file) {
  console.log(file);
  });
  });

```

findfile.js
```sh
 var fs = require('fs')  
    var path = require('path')  
    module.exports = function (dir, filterStr, callback) {  
      fs.readdir(dir, function (err, list) {  
        if (err)  
          return callback(err)  

        list = list.filter(function (file) {  
          return path.extname(file) === '.' + filterStr  
        })  

        callback(null, list)  
      })  
    }
```


### 7. Complete "HTTP Client"
  
  * Write a program that performs an HTTP GET request to a URL provided to you
as the first command-line argument. Write the String contents of each
"data" event from the response to a new line on the console (stdout).

```sh
var http = require('http')  
     http.get(process.argv[2], function (response) {  
       response.setEncoding('utf8')  
       response.on('data', console.log)  
       response.on('error', console.error)  
     })

```
  
  
  
  
 Free Code Camp course only required completion of the first Seven Levels. 
 However I wish to further my learning, therefore I have included my work for the other six levels. 
 
### 8. "HTTP Collect"




### 9. "Juggling Async"

### 10. "Time Server"

### 11. "HTTP File Server"

### 12. "HTTP Uppercaserer"

### 13. "HTTP JSON API Server"
  
  
