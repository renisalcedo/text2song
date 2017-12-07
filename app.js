// App modules
const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const open = require('open');

// Youtube modules && Key
const YouTube = require('youtube-node');
let youTube = new YouTube();
youTube.setKey('AIzaSyCfNYilt9yW_HaD5pGcp-JIRPwKdTt2ANQ');

// App
 app.use(bodyParser.urlencoded({ extended: false }));

//Gets message
app.post('/message', (req, res) => {
  // Will get the song
  const msgFrom = req.body.From;
  msgBody = req.body.Body;
  res.send("<Response> <Message>NOW PLAYING: " + msgBody + "</Message> </Response>");

  // Search for the song
  youTube.search(msgBody, 2, (error, result) => {
    if (error) {
      console.log(error);

    } else {
      // Retrieve data from api
      let json = JSON.stringify(result, null, 2);
      let obj = JSON.parse(json);
      let id = obj["items"][0]["id"]["videoId"];

      // console.log(obj);
      open(`https://www.youtube.com/watch?v=${id}`);
    }
  });
});

app.listen(3000, () => {

  console.log('SMS: (866) 754-0963');
});
