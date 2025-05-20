'use strict';
const isNight = require('../lib/isNight');


describe('isNight', function() {
  it('returns true during the night', function() {
    expect(isNight(22)).toEqual(true);
  });

  it('returns false during the morning and afternoon', function() {
    expect(isNight(8)).toEqual(false);
    expect(isNight(14)).toEqual(false);
  });

});
