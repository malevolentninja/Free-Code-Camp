jQuery -The most popular JavaScript tool of all time.

Learn how Script Tags and Document Ready Work

Before jQuery can be used, you need to link to html. To do this first create script tags.
Then add $(document).ready(function() {

});
Always needs to be closed with curly brackets, normal brackets and semi colon.
Putting code inside functions will run as soon as the browser has loaded your page.
Your HTML may not have even rendered before the code is run which causes bugs.
<!-- Only change code above this line. -->
<script>
$( document ).ready(function() {

});
</script>
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


Target HTML Elements with Selectors Using jQuery

First jQuery statement. All jQuery functions start with $
jQuery often selects an HTML element with a selector, then does something to that element.
Make button elements bounce
<script>
    $(document).ready (function() {
        $("button").addClass("animated bounce");
    });
</script>
Double quote selectors are important to use.


Target Elements by Class Using jQuery

.addClass() function allows you to add classes
Get div elements with class well then add animated and shake functions:
<script>
    $(document).ready (function() {
        $("button").addClass("animated bounce");
        $(".well").addClass("animated shake");
    });
</script>


Target Elements by ID Using jQuery

Button element with id target3 , use jQuery .addClass() function and add animated and fadeOut:
<script>
    $(document).ready (function() {
        $("button").addClass("animated bounce");
        $(".well").addClass("animated shake");
        $("#target3").addClass("animated fadeOut");
    });
</script>


Delete your jQuery Functions

They started cool but now have become distracting.
Delete all three functions but leave the starting script document ready function.
<script>
    $(document).ready(function(){
    });
</script>


Target the same element with multiple jQuery Selectors

Three ways of targetting elements by type:
type: $("button")
class: $(".btn")
id = $("#target1")
You van add multiple classes in a single target but also split them up for ease and clarification.
animated function to all elements with type button
    $("button").addClass("animated");
shake function to all buttons with class .btn
    $(".btn").addClass("shake");
bt-primary to the button with id #target1
    $("#target1").addClass("btn-primary");


Remove Classes from an element with jQuery

Aswell as adding you can also remove classes with removeClass() function.
Remove btn-default class from all button elements
    $("button").removeClass("btn-default");


Change the CSS of an Element Using jQuery

Changing the CSS of an HTML element can be done directly by jQuery using .css() function
Delete jQuery Selectors leaving document ready function. Then select target1 and change it colour to red.
$(document).ready(function() {
   $("#target1").css("color","red");
});


Disable an Element Using jQuery

You can change the non-CSS properties of HTML eleemtns with jQuery e.g. disable buttons.
Once disabled it will become grayed-out and can no longer be clicked.
The .prop() function allows you to adjust the properties of elements.
Disable only the target1 button.
$("#target1").prop("disabled", true);


Change Text Inside an Element Using jQuery

jQuery can also be used to change text between start and end tags of an element and even the HTML markup.
The function .html() lets you add HTML tags and text within an element.
Rewrite and emphaises text of h3:
$("h3").html("<em>jQuery Playground</em>");
jquery function .text() only alters text without adding tags. It will not evaluate any other html tags but instead treat it as the text you want to replace the existing content with.
Change the button with id target4 by emphasizing its text.
$("#target4").html("<em>#target4</em>");


Remove an Element Using jQuery 

Remove HTML element. jQuery has function .remove() which entirely removes the html element. 
Remove target4 element from the page using the .remove() function. 
$("#target4").remove();


Use appendTo to Move Elements with jQuery

 jQuery function .appendTo() allows you to select HTML elements and append them to another element. try moving elements from one div to another in this case move target2 element from left-well to right-well. 
 $("#target2").appendTo("#right-well");


Clone an Element Using jQuery


jQuery has a function called clone() that makes a copy of an element. This involves putting two jQuery functions together otherwise known as function chaining.
Clone your target5 element and append it to your left-well.
$("#target5").clone().appendTo("#left-well");


Target the Parent of an Element Using jQuery 

Every HTML element has a parent element from which it inherits properties.example, your jQuery Playground h3 element has the parent element of <div class="container-fluid">, which itself has the parent body. The .parent() function allows you to access the parent of whichever element you've  selected.
Give the parent of the #target1 element a background-color of red.
$("#target1").parent().css("background-color", "red");


Target the Children of an Element Using jQuery

Many HTML elements have children which inherit their properties from their parent HTML elements.
The .children() function allows access to the children of whichever element you've selected.
Give all the children of your #right-well element a color of orange.
$("#left-well").children().css("color","orange"); 


Target a Specific Child of an Element Using jQuery 

id attributes are convienient for jQuery however sometimes it is not as easy with multiple or untidy ids.
Thankfully, jQuery has some other tricks for targeting the right elements.
jQuery uses CSS Selectors to target elements. target:nth-child(n) css selector allows you to select all the nth elements with the target class or element type.
Make the second child in each of your well elements bounce. You must target the children of element with the target class.
$(".target:nth-child(2)").addClass("animated bounce");


Target Even Numbered Elements Using jQuery

You can target both even and odd elements. 
jQuery is zero-indexed  = counter-intuitively :odd selects the second element, fourth element etc. 
Try selecting all the even-numbered elements and giving them the classes of animated and shake.
$(".target:odd").addClass("animated shake");


Use jQuery to Modify the Entire Page 

jQuery can target the body element as well.
Here's how we would make the entire body fade out: $("body").addClass("animated fadeOut");
But let's do something more dramatic. Add the classes animated and hinge to your body element.
$("body").addClass("animated hinge");
