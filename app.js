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
      // Retrieve data from api
      var json = JSON.stringify(result, null, 2);
      var obj = JSON.parse(json);
      var id = obj["items"][0]["id"]["videoId"];

    // console.log(obj);
    open("https://www.youtube.com/watch?v=" + id);
    }
  });
});
app.listen(3000);
