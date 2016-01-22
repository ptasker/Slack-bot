var reader = require('./readlines.js');
var fs = require('fs');

var bot = {

    handle: function(req, res, next) {

        var userName = req.body.user_name;
        var triggerWord = req.body.trigger_word;

        var botPayload = {
            text: 'Hello ' + userName + '!'
        };
        
        switch (triggerWord) {
            case 'mike':
                var arrayOfThingsInMikesHair = [
                    "I dunno, crude oil?",
                    "nothin but crisco",
                    "olive oil",
                    "butter",
                    "HTML/CSS",
                    "the highest quality hairspray",
                    "magic",
                    "fish oil",
                    "jam",
                    "walnuts",
                    "Maryau's secret recipe",
                    "ranch dressing"

                ];

                var thing = arrayOfThingsInMikesHair[Math.floor(Math.random() * arrayOfThingsInMikesHair.length)];

                botPayload = {
                    text: 'Well, ' + userName + ', I\'m glad you asked. Mike puts ' + thing + ' in his hair. ' + bot.pickEmoji()
                };

                break;

            case 'hello':

                botPayload = {
                    text: 'Hello ' + userName + '!'
                };


                break;

            case 'bot':

                function func(data) {
                    console.log('Line: ' + data);
                }

                var path = 'text/lines.txt';

                var lines = fs.readFileSync(path).toString().split('\n');

                var line = (lines[Math.floor(Math.random() * lines.length)]);

                botPayload = {
                    text: 'Sup ' + userName + '. ' + line + "  ¯|_(ツ)_/¯"
                };

                break;

            case 'bloat':

                function func(data) {
                    console.log('Line: ' + data);
                }

                path = 'text/questions.txt';
                lines = fs.readFileSync(path).toString().split('\n');
                line = (lines[Math.floor(Math.random() * lines.length)]);

                botPayload = {
                    text: 'Hey ' + userName + '. Maryau quote of the day: `' + line + "` - (╯°□°)╯︵ ┻━┻"
                };

                break;

            case 'basically':

                path = 'text/pete.txt';
                lines = fs.readFileSync(path).toString().split('\n');
                line = (lines[Math.floor(Math.random() * lines.length)]);

                botPayload = {
                    text: 'You wanna know what Pete say\'s? \'' + line + "\' " + bot.pickEmoji()
                };

                break;

            case 'shutit':
            case 'shut up pete':

                path = 'text/shutitpete.txt';
                lines = fs.readFileSync(path).toString().split('\n');
                line = (lines[Math.floor(Math.random() * lines.length)]);

                botPayload = {
                    text: line,
                    image_url: line
                };

                break;
        }

        // avoid infinite loop
        if (userName !== 'slackbot') {
            return res.status(200).json(botPayload);
        } else {
            return res.status(200).end();
        }


    },

    pickEmoji: function() {
        var arr = [
            ':squirrel:',
            ':+1:',
            ':skull:',
            ':shit:',
            ':penguin:',
            ':zangief:'
        ];

        var line = (arr[Math.floor(Math.random() * arr.length)]);
        return line;
    }
}
module.exports = bot;
