const test = require('ava');
const twitterBot = require('./index');

test('twitterBot is a function', (t) => {
  t.deepEqual(typeof twitterBot, 'function');
});

test('Connects to twitter API', (t) => {
  t.pass();
});
