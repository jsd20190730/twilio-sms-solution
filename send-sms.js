const accountSid = 'ADD_TWILIO_ACCOUNT_SID'
const authToken = 'ADD_TWILIO_AUTH_TOKEN'
const client = require('twilio')(accountSid, authToken)

client.messages
  .create({
    body: 'What up though!!!!!',
    from: 'ADD_TWILIO_NUMBER', // example format: +15017122661
    to: 'ADD_RECIPIENT_NUMBER' // example format: +15558675310
  })
  .then(message => console.log(message.sid))
