'use strict';
const isAfternoon = require('../lib/isAfternoon');


describe('isAfternoon', function() {
  it('returns true during the afternoon', function() {
    expect(isAfternoon(14)).toEqual(true);
  });

  it('returns false during the morning and night', function() {
    expect(isAfternoon(8)).toEqual(false);
    expect(isAfternoon(22)).toEqual(false);
  });

});
