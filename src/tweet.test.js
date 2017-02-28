const test = require('ava');
const tweet = require('./tweet');

test('Returns input string if tweet was successful.', async (t) => {
  const input = Math.random().toString();
  const output = await tweet(input).then(res => res);
  t.deepEqual(input, output);
});

