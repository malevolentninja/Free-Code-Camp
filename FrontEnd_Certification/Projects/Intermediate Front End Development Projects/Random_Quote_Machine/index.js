$(document).ready(function() {
  let randomQ;
  getQuote();
  function getQuote() {
    const url =
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    //get data from this url
    $.getJSON(url, function(data) {
      randomQ = data.quoteText;
      //passing value to corresponding div
      $(".quote")
        .hide()
        .fadeIn(1000)
        .html('"' + data.quoteText + '"');
      $(".author").html("- " + data.quoteAuthor);
      randomQ = data.quoteText;
    });
  }
  //using twitter click functionality
  $("#tweet-btn").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + randomQ);
  });
  $(".newQuote").on("click", function() {
    getQuote();
  });
});
