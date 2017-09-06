# JSON APIs and AJAX

### 1. Trigger Click Events with jQuery

- Implement a click event handler
- Bind the click event to the button with the ID of getMessage
- Be sure to close your functions with });

``` sh
<script>
  $(document).ready(function() {
    // Only change code below this line.
    $("#getMessage").on("click", function () {
    });
    // Only change code above this line.
  });
</script>
```

``` sh
<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
```


### 2. Change Text with Click Events

- Clicking the "Get Message" button should give the element with the class message the text "Here is the message".
```sh
<script>
  $(document).ready(function() {
    $("#getMessage").on("click", function(){
      // Only change code below this line.
      $(".message").html("Here is the message");
      // Only change code above this line.
    });
  });
</script>
```
```sh
<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
```


### 3. Get JSON with the jQuery getJSON method

- request data form an external source
- APIs (Application programming Interfaces)
- JSON is common format
- get JSON from freeCodeCamp's Cat Photo API

- You should have a click handler on the getMessage button to trigger the AJAX request.
- You should have at least one closing set of brackets and parenthesis.
- Each callback function should have a closing set of brackets and parenthesis.
- You should be making use of the getJSON method given in the description to load data from the JSON file.
- Don't forget to make the .html change the contents of the message box so that it contains the result of the getJSON.

```sh
<script>
  $(document).ready(function() {
    $("#getMessage").on("click", function(){
      // Only change code below this line.
      $.getJSON("/json/cats/json", function(json) {
        $(".message).html(JSON.stringify(json));
          });
      
      // Only change code above this line.
    });
  });
</script>
```
```sh
<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
```

### 4. Convert JSON Data to HTML
- now want to display the data from a JSON API into html
- loop JSON and add more html to the variable
```sh
<script>
  $(document).ready(function() {
    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {
        var html = "";
        // Only change code below this line.
        
        json.forEach(function(val) {
  var keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
        // Only change code above this line.
        $(".message").html(html);
      });
    });
  });
</script>
```
```sh
<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
   </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
```

### 5. Render images from Data sources
- use imageLink to display the images 
```sh
<script>
  $(document).ready(function() {
    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {
        var html = "";
        json.forEach(function(val) {
          html += "<div class = 'cat'>";
          // Only change code below this line.
          
          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
          
          // Only change code above this line.
          html += "</div>";
        });
        $(".message").html(html);
      });
    });
  });
</script>
```
```sh
<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
```

### 6.Prefilter JSON
- use .filter method to select particular photos
```sh
<script>
  $(document).ready(function() {
    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {
        var html = "";
        // Only change code below this line.
        
        json = json.filter(function(val) {
  return (val.id !== 1);
});
        
        // Only change code above this line.
        json.forEach(function(val) {
          html += "<div class = 'cat'>"
          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"
          html += "</div>"
        });
        $(".message").html(html);
      });
    });
  });
</script>
```
```sh
<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
```


### 7. Get Geo-location Data
- use navigator.geolocation to access the users current location.
- use position.coords.latitude to display the users' latitudinal location.
- use position.coords.longitude to display the users' longitudinal location.
- display the users' position within the data div element
```sh
<script>
  // Only change code below this line.
  
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
}
  
  // Only change code above this line.
</script>
```
```sh
<div id = "data">
  <h4>You are here:</h4>
  
</div>
```
