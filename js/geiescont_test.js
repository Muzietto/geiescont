/*
	GEIESCONT - JS continuation monad
	Author: Marco Faustinelli (contacts@faustinelli.net)
	Web: http://faustinelli.net/
	     http://faustinelli.wordpress.com/
	Version: 1.0

	The GNU GENERAL PUBLIC LICENSE - Copyright (c) 2015 Geiescont Project
*/

var expect = chai.expect;

describe('\\x -> 2^(3 + 3x) - chained', function () {
  it('gives 1 when x = -1', function() {
    expect(compose1(-1)(id)).to.be.equal(1);
  });
  it('gives 8 when x = 0', function() {
    expect(compose1(0)(id)).to.be.equal(8);
  });
  it('gives 64 when x = 1', function() {
    expect(compose1(1)(id)).to.be.equal(64);
  });
});

describe('\\x -> 2^(3 + 3x) - not chained', function () {
  it('gives 1 when x = -1', function() {
    expect(compose4(-1)(id)).to.be.equal(1);
  });
  it('gives 8 when x = 0', function() {
    expect(compose4(0)(id)).to.be.equal(8);
  });
  it('gives 64 when x = 1', function() {
    expect(compose4(1)(id)).to.be.equal(64);
  });
});

describe('\\x -> 3x - not chained', function () {
  it('gives 3 when x = 1', function() {
    expect(compose2(1)(id)).to.be.equal(3);
  });
});

describe('\\x -> 3 + 3x - not chained', function () {
  it('gives 6 when x = 1', function() {
    expect(compose3(1)(id)).to.be.equal(6);
  });
});

describe('Cont(fact(n)) - not chained', function() {
  it('continues to 1 when x=0', function() {
    expect(contFact(0)(id)).to.be.equal(1);
  });
  it('continues to 1 when x=1', function() {
    expect(contFact(1)(id)).to.be.equal(1);
  });
  it('continues to 2 when x=2', function() {
    expect(contFact(2)(id)).to.be.equal(2);
  });
  it('continues to 6 when x=3', function() {
    expect(contFact(3)(id)).to.be.equal(6);
  });
});
