"use strict";

class Sms {

  sendSMS (room) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages
      .create({
        body: 'The' + room + 'is now available',
        from: '+17606243876',
        to: '+447490999868'
      })
      .then(message => console.log(message.sid));
  };

};