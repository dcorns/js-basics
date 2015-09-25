/**
 * case1
 * Created by dcorns on 9/24/15
 * Copyright © 2015 Dale Corns
 * Global Variables and scope
 */

/**
 * using 'use strict' prohibits creating a variable without the var key word so no accidental globals.
  */
//'use strict';
var bucket;

function addToBucket(bucket){
  bucket++;
}

console.log('14: ' + addToBucket(bucket));

bucket = 0;

console.log('18: ' + addToBucket(bucket));

var bucket1 = 0;

console.log('22: ' + addToBucket(bucket1));

//function addToBucket2(bucket){
//  bucket++;
//  return bucket;
//}
//
//console.log('30: ' + addToBucket2(bucket1));
//console.log('31: ' + addToBucket2(bucket));
//console.log('32: ' + bucket1);
//console.log('33: ' + bucket);

//function addToBucket2(bucket){
//  bucket++;
//}
//
//console.log('37: ' + addToBucket2(bucket1));
//console.log('38: ' + addToBucket2(bucket));

//function addToBucket3(){
//  bucket++;
//  bucket1++;
//}
//addToBucket3();
//console.log('47: ' + bucket1);
//console.log('48: ' + bucket);
/**
 * This function inadvertantly creates a global variable bucket3
 */
function addToBucket4(){
  bucket3 = 0;
  bucket3++;
}
/**
 * Or does it, JS crashes
 */
//console.log('58: ' + bucket3);
/**
 * right, we have to run the function first
 */
addToBucket4();
/**
 * now bucket3 is global
 */
console.log('66: ' + bucket3);
/**
 * Will output undefined since using a global variable name as a parameter is the same as declaring it over inside a function using var
 * @param bucket3
 */
function logBucket3(bucket3){
  console.log('72: ' + bucket3);
}
logBucket3();