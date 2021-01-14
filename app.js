require('dotenv').config();
const T = require('./config/twitter');
const R = require('./config/reddit');

const stream = T.stream('statuses/filter', {
    track: [`@${process.env.MENTION_USER}`]
});

stream.on('tweet', (mention) => {
    T.get('statuses/show/:id', {
        id: mention.in_reply_to_status_id_str
    }, (err, shareable, response) => {
        if (!err) {
            if (shareable.entities.media) {
                // LINK POST
                R.submitLink({
                        subredditName: process.env.SUBREDDIT,
                        title: `Tweeted from user ${shareable.user.screen_name}`,
                        url: shareable.entities.media[0].media_url,
                    })
                    .catch(err => {
                        if (err) {
                            console.error('error posting link!');
                            console.error(err);
                        }
                    });
            } else {
                // SELF POST
                R.submitSelfpost({
                        subredditName: process.env.SUBREDDIT,
                        title: `Tweeted from user ${shareable.user.screen_name}`,
                        text: `${shareable.text}`
                    })
                    .catch(err => {
                        if (err) {
                            console.error('error posting text!');
                            console.error(err);
                        }
                    });
            }
        }
    });
});