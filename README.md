# TweetSnoo

This bot will listen for @mention on a twitter account.

It resonds by sending the post to a subreddit of your choice.

# Prerequisites

You are required to have an API key for both twitter and reddit.

Get your API credentials for twitter here:

https://developer.twitter.com/en/apply-for-access


And get your API credentials for reddit here: 

https://www.reddit.com/prefs/apps

Node.js is required to run this bot.

Install the current version of node.js for your system: https://nodejs.org/en/download/


Find the file called `.envEXAMPLE`

You will need to create a new file next to it and name it `.env`

Copy the contents of the file and fill in your environment variables



```
# Twitter Credentials:
consumer_key='******'
consumer_secret='******'
access_token='******'
access_token_secret='******'

# Reddit Credentials:
USER_AGENT='???'
CLIENT_ID='******'
CLIENT_SECRET='******'
REDDIT_USER='???'
REDDIT_PASS******'

# Send To Subreddit:
SUBREDDIT='??'

# Listen For Twitter @Mentions On User:
MENTION_USER='??'
```

# Install

To install, use the command:

`npm install`

# Run

To run, use the command:

`node app.js`

The bot will run and listen for @mentions until you use `ctrl+c` to stop it.