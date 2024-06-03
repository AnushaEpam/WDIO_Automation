import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../app/numbers-validator.js';

describe('isAllNumbers', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });
  afterEach(function() {
    validator = null;
  });
  it('should return true if all elements in the array are numbers', function() {
    const numbersArray = [5, 7, 9, 100, 15, 578];
    expect(validator.isAllNumbers(numbersArray)).to.be.equal(true);
  });

  it('should return false when array is not of numbers', function() {
    const mixedArray = [5, 7, 9, '100', 15, '578'];
    expect(validator.isAllNumbers(mixedArray)).to.be.equal(false);
  });

  it('should throw error if input is not an array', function() {
    const invalidInput = {
      name: 'array',
      test: 'simple',
    };
    expect(() => {
      validator.isAllNumbers(invalidInput);
    }).to.throw(/not an array/);
  });
});
