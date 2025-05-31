// spec/greeting.spec.js
'use strict';

const greeting = require('../lib/greeting');

describe('greeting', function() {
  it('returns Good Morning! during the morning', function() {
    expect(greeting(6)).toEqual('Good Morning!');
  });

  it('returns Good Afternoon! during the afternoon', function() {
    expect(greeting(15)).toEqual('Good Afternoon!');
  });

  it('returns Good Night! during the night', function() {
    expect(greeting(23)).toEqual('Good Night!');
  });
});
