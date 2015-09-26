/**
 * equalityAndTernary
 * Created by dcorns on 9/25/15
 * Copyright © 2015 Dale Corns
 * Demonstrates equality, types and type conversion
 */
'use strict';
function start(){
  /**
   *Multiplication, division and subtraction convert strings to numbers. Addition will concat them.
   */
  var n = '9', nn = 3;
  console.log(n * nn);
  console.log(n / nn);
  console.log(n - nn);
  console.log(n + nn);
  nn = '3';
  console.log(n * nn);
  console.log(n / nn);
  console.log(n - nn);
  console.log(n + nn);
  /**
   *=== does strong type checking == does not
   */
  (9 == n) ? console.log('9 == n') : console.log('9 != n');
  (9 === n) ? console.log('9 == n') : console.log('9 != n');
  /**
   * Comparing strings and numbers
   */
  ('A' > 'a') ? console.log('A > a') : console.log('A < a');
  ('A' > 'Z') ? console.log('A > Z') : console.log('A < Z');
  ('A' > '26') ? console.log('A > 26') : console.log('A < 26');
  ('a' > 'z') ? console.log('a > z') : console.log('a < z');
  ('9' > '3') ? console.log('\'9\' > \'3\'') : console.log('\'9\' < \'3\'');
  ('9' > 3) ? console.log('\'9\' > \'3\'') : console.log('\'9\' < \'3\'');
  (9 > '3') ? console.log('\'9\' > \'3\'') : console.log('\'9\' < \'3\'');
  /**
   * True/False values
   */
  (NaN) ? console.log('NaN is true') : console.log('NaN is false');
  (undefined) ? console.log('undefined is true') : console.log('undefined is false');
  (null) ? console.log('null is true') : console.log('null is false');
  (0) ? console.log('0 is true') : console.log('0 is false');
  (-1) ? console.log('-1 is true') : console.log('-1 is false');
  (1) ? console.log('1 is true') : console.log('1 is false');
  (-25) ? console.log('-25 is true') : console.log('-25 is false');
  (25) ? console.log('25 is true') : console.log('25 is false');
}
start();
/**
 * Types of types
 */
function andTheTypes(){
  console.log(typeof {});
  console.log(typeof undefined);
  console.log(typeof NaN);
  console.log((typeof null));
  console.log(typeof '');
  console.log(typeof 5);
  console.log(typeof.314);
  console.log(typeof []);
  /**
   * Checking for arrays
   */
  console.log(Array.isArray([]));
  /**
   * Constructors make of their own type, this is evident in Dev Tools, but JS typeof returns only object
   * @param color
   * @constructor
   */
  var Bean = function(color){
    this.color = color;
  };
  var stringBean = new Bean('green');
  console.log(typeof stringBean);
}

andTheTypes();