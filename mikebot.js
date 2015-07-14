 var mike = {

  getThing: function (req, res, next) {
    var userName = req.body.user_name;

    var arrayOfThingsInMikesHair = [

    "I dunno, crude oil?",
    "nothin but crisco",
    "olive oil",
    "butter",
    "HTML/CSS",
    "the highest quality hairspray"

    ];

    var thing = arrayOfThingsInMikesHair[Math.floor(Math.random()*arrayOfThingsInMikesHair.length)];

    var botPayload = {
      text : 'Well, ' + userName + ', I\'m glad you asked. Mike puts ' + thing + ' in his hair'
    };

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }


}

}


module.exports = mike;
