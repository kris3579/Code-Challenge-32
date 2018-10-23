'use strict';

const BracketValidation = require('../bracketValidation');

describe('bracketValidation.js', () => {
  test('Returned true if valid', () => {
    const result = BracketValidation('({[]})');
    expect(result).toEqual(true);
  });
  test('Returned false if type other than string', () => {
    const result = BracketValidation({ thing: 'stuff' });
    expect(result).toEqual(false);
  });
  test('Returned false if to many brackets', () => {
    const result = BracketValidation('[[()]');
    expect(result).toEqual(false);
  });
  test('Returned false if to little brackets', () => {
    const result = BracketValidation('[({)]');
    expect(result).toEqual(false);
  });
});
