/*
	GEIESCONT - JS continuation monad
	Author: Marco Faustinelli (contacts@faustinelli.net)
	Web: http://faustinelli.net/
	     http://faustinelli.wordpress.com/
	Version: 1.0

	The GNU GENERAL PUBLIC LICENSE - Copyright (c) 2015 Geiescont Project
*/

/*
  Cont(fact(n)) = Cont(fact(n-1)) >>= (\y -> return (n*y))
*/
function contFact(n) {
  if (n === 0 || n === 1) return function(c) { return c(1); };
  return bindCont(contFact(n-1), function(y) { 
    return unitCont(n*y);
  });
}

/*
 \x -> 2^(3 + 3x) = 
 \x -> (return x) 
            >>= (\y -> return 3y) 
            >>= (\z -> return 3+z) 
            >>= (\k -> return 2^k)
*/
function compose1(x) { // chainable!
  'use strict'

  return cont.unit(x)
           .bind(function(y) {
             return cont.unit(3 * y)
                      .bind(function(z) {
                        return cont.unit(3 + z)
                                 .bind(function(k) {
                                   return cont.unit(Math.pow(2, k));
                                 })
                      })
           });
}

// cont(x -> 3x)
function compose2(x) {
  return bindCont(unitCont(x), 
                  function(y) { return unitCont(3*y); });
}

// cont(x -> 3 + 3x)
function compose3(x) {
  return bindCont(bindCont(unitCont(x), 
                           function(y) { return unitCont(3*y); }),
                  function(z) { return unitCont(z+3); });
}

// cont(\x -> 2^(3 + 3x))
function compose4(x) {
  return bindCont(bindCont(bindCont(unitCont(x), 
                           function(y) { return unitCont(3*y); }),
                  function(z) { return unitCont(z+3); }),
          function(k) { return unitCont(Math.pow(2,k)); });
}