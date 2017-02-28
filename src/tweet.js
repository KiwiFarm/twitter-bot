const client = require('./client');

module.exports = input => new Promise((resolve, reject) => {
  client.post('statuses/update', { status: input })
    .then(tweet => resolve(tweet.text))
    .catch(err => reject(err));
});
