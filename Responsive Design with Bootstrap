Responsive Design with Bootstrap

Bootstrap is a popular responsive CSS framework.


Use Responsive Design with Bootstrap Fluid Containers

Bootstrap figures out how wide your screen is and respond accordingly, making it responsive design. This removes the need to design a separate mobile verion of your website.s

Bootstrap can be added by the following code at the top of your HTML:
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
Nest HTML in div element with the class container-fluid.:
<div class="container-fluid">
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. "></a>

<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor"> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality"> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Crazy</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
</div>


Make Images Mobile Responsive

Add a new image below the existing one with src attribute https://bit.ly/fcc-running-cats
Add img-responsive class to image in bootstrap:
 <a href="#"><img class="img-responsive" src="https://bit.ly/fcc-running-cats" > </a>


Center Text with Bootstrap

center our heading element to make it look better: text-center  to h2 element
<h2 class="text-center"> </h2>
Don't forget about multiple classes
<h2 class="red-text text-center">your text</h2>


Create a Bootstrap Button

Bootstrap has it's own style for butotn elements, these look better than HTML.
Create a new button element below your large kitten photo.
Give it the class btn and the text of "Like".
<button class= "btn"> Like </button>


Create a Block Element Bootstrap Button

Button elements which have the class of btn tend to be only as wide as the text they contain:
<button class="btn">Submit</button>
Adding a class of btn-block ensures the button stretches to fill the screen: <button class="btn btn-block">Submit</button>.


Taste the Bootstrap Button Color Rainbow

btn-primary class is the main color. It has uses including highlighting actions you want your user to take. btn and btn-block classes are still needed.
 <button class="btn btn-block btn-primary">Like</button>


Call out Optional Actions with Button Info

btn-info calls attention to optional actions the user can take.
it will still need btn-block and btn classes
<button class="btn btn-block btn-info">Info</button>


Warn your Users of a Dangerous Action

btn-danger class notfies user the button performs a destructive action e.g. deletion. Still need btn and btn-block classes
<button class="btn btn-block btn-danger"> Delete </button>


Use the Bootstrap Grid to Put Elements Side By Side

Bootstrap's grid is responsive = elements into rows and specification of the elements relative width is easy. Most of the classes can be applied to div element.

It has a grid format.
Single set of .col.md-* grid classes you can create a basic grid systems that starts out stacked on mobile devices(xs-s) then horizontal on desktop devices (m).
This works in any .row div
.col-md-1 .col-md-1
.col-md-8 (=8* .col-md-1)
.col-md-4 (=4* .col-md-1)
.col-md-6 (=6* .col-md-1)
md refers to medium and * refers to a number specifying how many columns wide the element should be.
xs refers to extra small.

Put the Like, Info and Delete buttons side-by-side by nesting all three of them within one <div class="row"> element, then each of them within a <div class="col-xs-4"> element:
<div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button> </div>

    <div class="col-xs-4">
  <button class="btn btn-block btn-info">Info  </button>
</div>

  <div class="col-xs-4">
  <button class="btn btn-block btn-danger">Delete</button>
</div>
</div>


Ditch Custom CSS for Bootstrap

Bootstrap built in styles are more conventional.


Use Spans for Inline Elements

spans are use to creat inline elements
block-level element takes the whole width whereas inline button element only takes a small portion of the page.

Span element = collect several elements together, styling them all slightly differently.
<p>Things cats: <span class="text-danger"> love</span></p>


Create a Custom Heading

Title and relax the cat image in the same row.
       <h2 class="text-primary text-center">CatPhotoApp</h2>
     </div>
     <div class="col-xs-4">
       <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat"></a>
     </div>
   </div>


Add Font Awesome Icons to our Buttons

Font Awesome is a convenient library of icons.
They are vector graphics save in .svg file format, just like fonts you can specify size.
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>

i element used making things italic but now more commonly used for icons e.g.
<i class="fa fa-info-circle"></i>

Add thumbs-up icon to like button.
<button class="btn btn-block btn-primary">Like <i class="fa fa-thumbs-up"></i></button>


Add Font Awesome Icons to all of our Buttons

info-circle  and trash icons can be added through using the i element.

Info-Circle: <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i>Info</button>

Trash: <button class="btn btn-block btn-danger">Delete <i class="fa fa-trash"></i></button>


Responsively Style Radio Buttons

Bootstrap col-xs-* classes can be used on form elements.
This enables even spread across the page.
Nest radio buttons within <div class="row"> element with <div class="col-xs-6">
Code answer:
imary"><i class="fa fa-thumbs-up"></i> Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
    </div>
  </div>


 Responsively Style Checkboxes

Nest all your checkboxes in a <div class="row"> element. Then nest each of them in a <div class="col-xs-4"> element.
Answer:
<div class="row">
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
      </div>
    </div>

      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Loving</label> </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Lazy</label> </div>
      <div class="col-xs-4">
    <label><input type="checkbox" name="personality"> Crazy</label>
      </div>

    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
    </div>
  </form>
</div>


Style Text Inputs as Form Controls

fa-paper-plane (paper plane icon)
<i class="fa fa-paper-plane"></i>

form-control gives submit button the classes btn btn-primary:

<input class="form-control" type="text" placeholder"cat photo URL" required>
<button class="btn btn-primary" type="submit"> submit <i class="fa fa-paper-plane"></i>


Line up Form Elements Responsively with Bootstrap

input and button on the same line.
<div class="row">
<div class="col-xs-7">
<input type="text" class="form-control" placeholder="cat photo URL" required>
</div>
<div class="col-xs-5">
<button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>
      </div>
    </div>
  </form>
</div>

LAST OF CAT APP STUFF FOR NOW.


Create a Bootstrap Headline

Building jQuery playground
To start with, create an h3 element, with the text jQuery Playground.

Color your h3 element with the text-primary Bootstrap class, and center it with the text-center Bootstrap class.s
<h3 class="text-primary text-center"> jQuery Playground </h3


House our page within a Bootstrap Container Fluid Div

Making sure all the content is mobile responsive.
Let's nest your h3 element within a div element with the class container-fluid:
<div class="container-fluid">
<h3 class="primary-text text-center"> jQuery Playground </h3>
</div>


Create a Bootstrap Row

Bootstrap row for inline elements. Create div element below h3 with tag row.
<div class="row"> </div>


Split your Bootstrap Row

Split into two columns through two div elements with class col-xs-6.
<div class="col-xs-6"> </div>
<div class="col-xs-6"> </div>


Create Bootstrap Wells

Well class creates visual sense of depth for columns. Make two div elements with col-xs-6 have well class within.
<div class="col-xs-6">
    <div class="well">
    </div>
</div>
<div class="col-xs-6">
    <div class="well">
    </div>
</div>


Add Elements within your Bootstrap Wells

This is as deep as we'll need to go. Now we can add our button elements.
Nest three button elements within each of your well div elements.

<div class="col-xs-6">
    <div class="well">
        <button> </button>
        <button> </button>
        <button> </button>
    <div>
</div>
<div class="col-xs-6">
    <div class="well">
        <button> </button>
        <button> </button>
        <button> </button>
    <div>
</div>


Apply the Default Bootstrap Button Style

Bootstrap has another button class called btn-default.
Apply both the btn and btn-default classes to each of your button elements.
    <button class="btn btn-default"> </button>
    <button class="btn btn-default"> </button>
    <button class="btn btn-default"> </button>


Create a Class to Target with jQuery Selectors

Not every class needs to have corresponding CSS.
Sometimes we create classes just for the purpose of selecting these elements more easily using jQuery.Give each of your button elements the class target:
<button class="btn btn-default target"> </button>
    <button class="btn btn-default target"> </button>
    <button class="btn btn-default target"> </button>


Add ID Attributes to Bootstrap Elements

id must be unique and specific element , once per page.
Give unique id to each of div elements of class well.

<div class="col-xs-6">
    <div class="well" id="left-well">
        <button> </button>
        <button> </button>
        <button> </button>
    <div>
</div>
<div class="col-xs-6">
    <div class="well" id="right-well">
        <button> </button>
        <button> </button>
        <button> </button>
    <div>
</div>


Label Bootstrap Wells

To be clear labelling is important not just for you but also the user.
Above your left-well, inside its col-xs-6 div element, add a h4 element with the text #left-well:
<div class="col-xs-6">
    <h4> #left-well </h4>
    <div class="well" id="left-well">
        <button> </button>
        <button> </button>
        <button> </button>
    <div>
</div>

Above your right-well, inside its col-xs-6 div element, add a h4 element with the text #right-well:
<div class="col-xs-6">
    <h4> #right-well </h4>
    <div class="well" id="right-well">
        <button> </button>
        <button> </button>
        <button> </button>
    <div>
</div>


Give Each Element a Unique ID

To help use jQurty and target each button serperately via the unique id.
Each button needs to have a unique ID from target1 to target 6.
#left-well needs target 1 to target 3 whereas #right-well needs target4 to target6:
<div class="col-xs-6">
    <h4> #left-well </h4>
    <div class="well" id="left-well">
        <button id="target 1"> </button>
        <button id="target 2"> </button>
        <button id="target 3"> </button>
    <div>
</div>

<div class="col-xs-6">
    <h4> #right-well </h4>
    <div class="well" id="right-well">
        <button id="target4"> </button>
        <button id="target 5"> </button>
        <button id="target 6"> </button>
    <div>
</div>


Label Bootstrap Buttons

Label buttons just like the wells - each button element should have text corresponding to its id's selector:
<div class="col-xs-6">
    <h4> #left-well </h4>
    <div class="well" id="left-well">
        <button id="target 1"> #target 1 </button>
        <button id="target 2"> #target 2</button>
        <button id="target 3"> #target 3 </button>
    <div>
</div>

<div class="col-xs-6">
    <h4> #right-well </h4>
    <div class="well" id="right-well">
        <button id="target 4"> #target 4 </button>
        <button id="target 5"> #target 5 </button>
        <button id="target 6"> #target 6 </button>
    <div>
</div>


Use Comments to Clarify Code

jQuery starts to modify HTML elements without having to actually change them in HTML.
Add a comment at the top of HTML stating 'Only change code above this line' so the final code should look like:
<!-- Only change code above this line -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
