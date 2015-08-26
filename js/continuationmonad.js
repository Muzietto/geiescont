/*
	GEIESCONT - JS continuation monad
	Author: Marco Faustinelli (contacts@faustinelli.net)
	Web: http://faustinelli.net/
	     http://faustinelli.wordpress.com/
	Version: 1.0

	The GNU GENERAL PUBLIC LICENSE - Copyright (c) 2015 Geiescont Project
*/

// chainable implementation
var cont = (function() {
  'use strict';
  
  var unit = function(value) {
    var monad = function(c) {
      return c(value);
    }

    monad.bind = function (facrb) {
      return function(c) {
        return monad(function(a) {
          return facrb(a)(c);
        });
      };
    }
    return monad;
  }

  return {
    unit : unit
  }
}());

// non-chainable implementation
function unitCont(value) {
  return function(f) {
    return f(value);
  }
}

function bindCont(conta, facrb) {
  return function(c) {
    return conta(function(a) {
      return facrb(a)(c);
    });
  };
}

// helper function
function id(x) { return x; }
