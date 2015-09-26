/**
 * equalityAndTernary
 * Created by dcorns on 9/25/15
 * Copyright © 2015 Dale Corns
 */
'use strict';
function start(){
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
  (9 == n) ? console.log('9 == n') : console.log('9 != n');
  (9 === n) ? console.log('9 == n') : console.log('9 != n');
  ('A' > 'a') ? console.log('A > a') : console.log('A < a');
  ('A' > 'Z') ? console.log('A > Z') : console.log('A < Z');
  ('A' > '26') ? console.log('A > 26') : console.log('A < 26');
  ('a' > 'z') ? console.log('a > z') : console.log('a < z');
  ('9' > '3') ? console.log('\'9\' > \'3\'') : console.log('\'9\' < \'3\'');
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

function andTheTypes(){
  console.log(typeof {});
  console.log(typeof undefined);
  console.log(typeof NaN);
  console.log((typeof null));
  console.log(typeof '');
  console.log(typeof 5);
  console.log(typeof.314);
  console.log(typeof []);
  console.log(Array.isArray([]));
  var Bean = function(color){
    this.color = color;
  };
  var stringBean = new Bean('green');
  console.log(typeof stringBean);
}

andTheTypes();