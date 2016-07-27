// Application: site oauth

// Application Id	782e42110249a390a87194e4bc86e8f898d7068bf7b9c7fdf0c7824a2980d64d
// Secret:	ce67ec89fafe104db13d0cb796641854361d3c46727697fba309cf1af036bab8
// Callback url	
// http://localhost:4000/oauth/callback/index.html

//authorize
http://roxberries.hopto.org:30000/oauth/authorize?client_id=782e42110249a390a87194e4bc86e8f898d7068bf7b9c7fdf0c7824a2980d64d&redirect_uri=http://roxberries.hopto.org/games/remnant/callback.html&response_type=code
http://roxberries.hopto.org:30000/oauth/token?client_id=782e42110249a390a87194e4bc86e8f898d7068bf7b9c7fdf0c7824a2980d64d&redirect_uri=http://roxberries.hopto.org/oauth/callback/&response_type=token


//access token
// callback handles it, returns code
//457df1deac5428e65b7d23715e471df21b35117ea71732ec8de81ac0e6e0570d

parameters = 'client_id=APP_ID&client_secret=APP_SECRET&code=RETURNED_CODE&grant_type=AUTHORIZATION_CODE&redirect_uri=REDIRECT_URI'
RestClient.post 'http://localhost:3000/oauth/token', parameters



var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://roxberries.hopto.org:30000/oauth/token",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "e385fa62-54af-fedd-f110-dd5d657ac74e",
    "content-type": "application/x-www-form-urlencoded"
  },
  "data": {
    "client_id": "782e42110249a390a87194e4bc86e8f898d7068bf7b9c7fdf0c7824a2980d64d",
    "client_secret": "ce67ec89fafe104db13d0cb796641854361d3c46727697fba309cf1af036bab8",
    "code": "20053d31466624e31d992688402548d947f3c00653f3df18055d77a4b7aa1d54",
    "grant_type": "authorization_code",
    "redirect_uri": "http://localhost:4000/oauth/callback/index.html"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});