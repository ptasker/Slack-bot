module.exports = function (req, res, next) {
  var userName = req.body.user_name;

var arrayOfThingsInMikesHair = [

    "I dunno, crude oil?",
    "Nothin but crisco",
    "Who cares",

];



  var botPayload = {
    text : 'Hello, ' + userName + '!'
  };

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
