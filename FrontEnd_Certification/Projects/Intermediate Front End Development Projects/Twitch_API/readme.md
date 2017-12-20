# Twitch JSON API

User Stories: 

​- Users can see whether Free Code Camp is currently streaming on Twitch.tv.
​- Users can click the status output and be sent directly to the Free Code Camp’s Twitch.tv channel.
​- If a Twitch streamer is currently streaming, Users can see additional details about what they are streaming.
​- Users will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed).
- Users can search for TwitchTv Streamers and view whether they are online or not.


### Pre-requisites
UPDATE: Due to a change in conditions on API usage explained here Twitch.tv now requires an API key, but we've built a workaround. 
    
Use https://wind-bow.gomix.me/twitch-api instead of twitch's API base URL (i.e. https://api.twitch.tv/kraken ) and you'll still be able to get account information, without needing to sign up for an API key.

Technology Used: 
- HTML
- CSS
- SCSS
- Jquery 
- Twitch API call


#### Potential improvements
- Make pure JavaScript
- Make in a framework for additional reusable components
- NodeJs server side
- Make more like netflix style
- Compiler for SCSS
- Search Capabilities (5th user story)

## Acknowledgements:
- An example call to Twitch.tv's JSONP API at http://forum.freecodecamp.org/t/use-the-twitchtv-json-api/19541. 
- Documentation about API call is here: https://dev.twitch.tv/docs/v5/reference/streams/#get-stream-by-user.

  
