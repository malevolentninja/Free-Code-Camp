
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
  


### 4. Complete "My First Async I/O"

### 5. Complete "Filtered LS"

### 6. Complete "Make it Modular"

### 7. Complete "HTTP Client"
  
  
 Free Code Camp course only required completion of the first Seven Levels. 
 However I wish to further my learning, therefore I have included my work for the other six levels. 
 
### 8. "HTTP Collect"

### 9. "Juggling Async"

### 10. "Time Server"

### 11. "HTTP File Server"

### 12. "HTTP Uppercaserer"

### 13. "HTTP JSON API Server"
  
  
