/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



     /* {
        "twitter": null,
        "displayName": "elkykelyn",
        "twitterToken": "2147486352-M2t7o2jvpz1N2BD5bKBuCYi1PcA9Zt3DvMKxhcp",
        "twitterSecret": "TQ5qWuXallZKjNiwJixE18iAGwaF3yaiqQ8ufuQlMBGHL",
        "createdAt": "2015-12-10T20:28:00.088Z",
        "updatedAt": "2015-12-10T20:28:00.088Z",
        "id": 1
      }*/
    

var Twit = require('twit');
module.exports = {

    tweet: function(req, res) {
        var T = new Twit({
            consumer_key: config.TWITTER_KEY,
            consumer_secret: config.TWITTER_SECRET,
            access_token: '2147486352-M2t7o2jvpz1N2BD5bKBuCYi1PcA9Zt3DvMKxhcp',
            access_token_secret: 'TQ5qWuXallZKjNiwJixE18iAGwaF3yaiqQ8ufuQlMBGHL'
        })


        T.post('statuses/update', {
            status: 'hello world!!!!'
        }, function(err, data, response) {
            console.log(data, err);
        })
    }

};
