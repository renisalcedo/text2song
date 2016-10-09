// Twilio Credentials
var accountSid = 'ACa9301c80392577ceab046d878520a077';
var authToken = 'd1597410f93e2250dac631341f43f542';

// Google API Credentials

// App modules
var express = require('express');
var bodyParser = require('body-parser');
var open = require('open');

var YouTube = require('youtube-node');

var youTube = new YouTube();

youTube.setKey('AIzaSyCfNYilt9yW_HaD5pGcp-JIRPwKdTt2ANQ');

youTube.search('World War z Trailer', 2, function(error, result) {
    if (error) {
      console.log(error);
    }
    else {
      var json = JSON.stringify(result, null, 2);
      console.log(json);

      open("https://www.youtube.com/watch?v=" + "4EC7P5WdUko");
    }
});

var app = express();

 app.use(bodyParser.urlencoded({ extended: false }));

 app.post('/message', function(req, res) {
     console.log(req.body);
     var msgFrom = req.body.From;
     var msgBody = req.body.Body;
     res.send("<Response> <Message> Hello ${msgFrom} You Said: ${msgBody} </Message> </Response>");
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
