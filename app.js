// Twilio Credentials
var accountSid = 'ACa9301c80392577ceab046d878520a077';
var authToken = 'd1597410f93e2250dac631341f43f542';

// App modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var open = require('open');

// Youtube modules && Key
var YouTube = require('youtube-node');
var youTube = new YouTube();
youTube.setKey('AIzaSyCfNYilt9yW_HaD5pGcp-JIRPwKdTt2ANQ');

// App
 app.use(bodyParser.urlencoded({ extended: false }));
 var msgBody = "";

 //Gets message
app.post('/message', function(req, res) {
  console.log(req.body);
  var msgFrom = req.body.From;
  msgBody = req.body.Body;
  res.send("<Response> <Message>NOW PLAYING: " + msgBody + "</Message> </Response>");

  youTube.search(msgBody, 2, function(error, result) {
    if (error) {
      console.log(error);
    }
    else {
      var json = JSON.stringify(result, null, 2);

      var obj = JSON.parse(json);

      var id = obj["items"][0]["id"]["videoId"];
    // console.log(obj);
    open("https://www.youtube.com/watch?v=" + id);
    }
  });
});



 app.listen(3000);

//require the Twilio module and create a REST client
/*
var client = require('twilio')(accountSid, authToken);

client.messages.create({
    from: "+13479236684",
    to:"13474789975",
}, function(err, message) {
    console.log(message.sid);
});
*/
