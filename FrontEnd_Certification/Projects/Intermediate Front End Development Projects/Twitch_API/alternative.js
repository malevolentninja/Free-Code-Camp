let channelList = ["freecodecamp", "particlecity", "ESL_SC2", "OgamingSC2", "cretetion",  "habathcx", "RobotCaleb", "noobs2ninjas","wagamamatv", "sing_sing"];

for (let i = 0; i < twitchStreamers.length; i++) {
        ajax();
}

function ajax () {
        $.ajax({
            url: "https://wind-bow.glitch.me/twitch-api/channels/" + twitchStreamers[i] + "?callback=?",
            dataType: "jsonp",
            data: {
                format: "json"
            },
            success: function (data) {
                fetchData(data);
            },
            error: function () {
                console.log("unable to access json");
            }
        });
    }

function fetchData (data) {
        if (data.stream === null) {
            url = data._links.channel.substr(38);
            updateOfflineUsers();
        }
        else if (data.status == 422 || data.status == 404) {
            status = data.message;
            updateHTML(".unavailable");
        }
        else {
            if (data.stream.channel.logo !== null) {
                picture = 'url("' + data.stream.channel.logo + '")';
            }
            else {
                picture = 'url("h" alt="placeholder")';
            }
            url = data._links.channel.substr(38);
            status = "<a href='https://twitch.tv/" + url + "' target='_blank'" + "'>" + data.stream.channel.display_name +  "</a>" + " is currently streaming " + data.stream.game;
            updateHTML(".online");
        }
    }

function updateOfflineUsers () { //If users are offline, make new ajax request to find user info
        $.ajax({
            url: "https://wind-bow.glitch.me/twitch-api/channels/" + url,
            dataType: "jsonp",
            data: {format: "json"},
            success: function (json) {
                status = "Channel " + "'<a href='" + json.url + "' target='_blank'" + "'>" + json.display_name + "</a>'" + " is currently offline";
                if (json.logo !== null) {
                    picture = 'url("' + json.logo + '")';
                }
                else {
                    picture = 'url("" alt="placeholder")';
                }
                updateHTML(".offline");
            }
        });
    }



function search () {
        $(".online, .offline, .unavailable").empty();
        showAll();
        var searchQuery = $(".search-twitch").val();
        var user = searchQuery.replace(/[^A-Z0-9_]/ig, "");
        $.ajax({
            url: "https://wind-bow.glitch.me/twitch-api/channels/" + user,
            dataType: "jsonp",
            data: {
                format: "json"
            },
            success: function (data) {
                fetchData(data);
            }
        });
    }