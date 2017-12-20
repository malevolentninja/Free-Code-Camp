let channelList = ["freecodecamp", "particlecity", "ESL_SC2", "OgamingSC2", "cretetion",  "habathcx", "RobotCaleb", "noobs2ninjas","wagamamatv", "sing_sing"];
let channelName;
let channelLink;
let channelLogo;
let streamContent;
let channelId;

$(document).ready(function() {
  $.each(channelList, function(i, val) {
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/' + val, function(tv) {
      channelName = val;

        if(tv.stream === null) {
          $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/' + channelName, function(ch) {
            channelId = ch.display_name;
            channelLogo = ch.logo;
            channelLink = ch.url;
            streamContent = ch.status;

            if(ch.status == '404') {
              $('#twitch').append('<div class="column-5">' + ch.message + '</div>');
            }

            else $('#offline').append('<div class="col span-1-of-4 box"><a href=' + channelLink + ' target="_blank"><img class="image" src=' + channelLogo + '></a><br><h3>' + channelId + '</h3><p>OFFLINE<br> Check Later </p></div>');
          });

    }

     else $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/' + channelName, function(ch) {
            channelId = ch.display_name;
            channelLogo = ch.logo;
            channelLink = ch.url;
            streamContent = ch.status;


       $('#online').append('<div class="col span-1-of-4 box"><a href=' + channelLink + ' target="_blank"><img class="image" src=' + channelLogo + '></a><br><h3>' + channelId + '</h3><p> ONLINE <br>' + streamContent + '</p></div>');
          });
  });

});
  $('#all').click(All);
  $('#on').click(Online);
  $('#off').click(Offline);

});

function All() {
  $('#online').show();
  $('#offline').show();
  $('#twitch').show();
}

function Online() {
  $('#online').show();
  $('#offline').hide();
  $('#twitch').hide();
}

function Offline() {
  $('#online').hide();
  $('#offline').show();
  $('#twitch').hide();
}



      if (item.stream === null) {
        $("#results").append(
         "<div class='offline newitem'><a id='offlinelink' class='newitemlink' target='blank' href='https://twitch.tv/" +
            channel +
            "'>" + "<div class='itemcontent'>" +
            "<img class='profilelogo' src='" +
            "" +
            "'>" +
            "<h3> " +
            channel +
            "</h3>" +
            "<span class='status'>" +
            "<p> OFFLINE </p>" +
            "</span>" +
            "</div></a></div>"
        );
      } else if (item.stream === undefined) {
        console.log(channel + " - No Account");
      } else {
         /*If stream found*/
        let logosource = "";

        if (item.stream.channel.logo === null) {
          logosource = "https://via.placeholder.com/80x80";
        } else {
          logosource = item.stream.channel.logo;
        }
      }
        $("#results").append(
         "<article class='online newitem'> <a class='newitemlink' target='_blank' href='" +
            item.stream.channel.url +
            "'><article class='livepreview' style='background-image:url(" +
            item.stream.preview.large +
            ")'></article><div class='itemcontent'>" +
            "<img id='profilelogo' src='" +
            logosource +
            "'>" +
            "<h3> " +
            channel +
            "</h3><strong> Playing: </strong>" +
            item.stream.game +
            "<br/><strong> Viewers: </strong>" +
            item.stream.viewers +
            "<span class='status'>" +
            "<p id='live'> LIVE </p>" +
            "</span>" +
            "</div></a></article>"
        );

$(document).ready(function() {
  $("#find-results").on("click", function(e) {
    e.preventDefault();
    searching();
  });
});