import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../app/numbers-validator.js';

describe('isInteger', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });
  afterEach(function() {
    validator = null;
  });
  it('should return true for an integer', function() {
    expect(validator.isInteger(100)).to.be.equal(true);
  });
  it('should return true for zero', function() {
    expect(validator.isInteger(0)).to.be.equal(true);
  });
  it('should return false for decimal numbers', function() {
    expect(validator.isInteger(100.895)).to.be.equal(false);
  });
  it('should return true for negative numbers', function() {
    expect(validator.isInteger(-100)).to.be.equal(true);
  });
  it('should throw error if not a number', function() {
    const invalidInput = '100';
    expect(()=> {
      validator.isInteger(invalidInput);
    }).to.throw('[100] is not a number');
  });
});
