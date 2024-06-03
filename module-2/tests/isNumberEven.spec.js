import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../app/numbers-validator.js';

describe('isNumberEven', function() {
  let validator;
  beforeEach(function() {
    validator = new NumbersValidator();
  });

  afterEach(function() {
    validator = null;
  });

  it('should return true if number is even', function() {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  it('should return false if number is odd', function() {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });

  it('should return true if number is zero', function() {
    expect(validator.isNumberEven(0)).to.be.equal(true);
  });

  it('should throw an error if input is not a number', () => {
    expect(()=> {
      const invalidInput = '4';
      validator.isNumberEven(invalidInput);
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
});

