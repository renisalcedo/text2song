// Twilio Credentials 
var accountSid = 'ACa9301c80392577ceab046d878520a077'; 
var authToken = 'd1597410f93e2250dac631341f43f542'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+15558675309", 
    from: "+15017250604", 
    body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
}, function(err, message) { 
    console.log(message.sid); 
});
