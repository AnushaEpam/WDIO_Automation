import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../app/numbers-validator.js';

describe('getEvenNumbersFromArray', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });
  afterEach(function() {
    validator = null;
  });
  it('should return an array of even numbers', function() {
    const arrayOfRandomNumbers = [2, 7, 12, 17, 1, 55, 32, 10];
    const evenNumberArray = validator
        .getEvenNumbersFromArray(arrayOfRandomNumbers);
    expect(evenNumberArray).to.be.eql([2, 12, 32, 10]);
  });
  it('should return an empty array when input is an empty array', function() {
    const emptyArray = [];
    const expectedResult = validator
        .getEvenNumbersFromArray(emptyArray);
    expect(expectedResult).to.be.eql([]);
  });

  it('should throw an error when input is not an array of Numbers', () => {
    const arrayofStrings = ['2', '7', '12', '17'];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayofStrings);
    }).to.throw('[2,7,12,17] is not an array of "Numbers"');
  });
});
