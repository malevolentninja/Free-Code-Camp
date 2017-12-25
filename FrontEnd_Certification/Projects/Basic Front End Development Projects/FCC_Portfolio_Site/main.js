//when user scrolls the page, execute
window.onscroll = function() {
  stickyNavFunction()
};
// get the navbar
const navbar = document.getElementById("navbar");
// got offset position
let sticky = navbar.offsetTop;
// add the sticky class to navbar when reach scroll position, if that isn't reached remove the sticky class
function stickyNavFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}