'use strict';
const isMorning = require('../lib/isMorning');


describe('isMorning', function() {
  it('returns true in the morning', function() {
    expect(isMorning(10)).toEqual(true);
  });

  it('returns false in the afternoon and night', function() {
    expect(isMorning(22)).toEqual(false);
    expect(isMorning(14)).toEqual(false);
  });
});
