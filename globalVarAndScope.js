/**
 * case1
 * Created by dcorns on 9/24/15
 * Copyright © 2015 Dale Corns
 * Global Variables and scope
 */
'use strict';
/**
 * Global = Bad
 */
var bucket;

/**
 * Using the global variable name bucket for the functions parameter declares a new variable in the function scope with the same name
 * @param bucket
 */
function addToBucket(bucket){
  bucket++;
}
/**
 * undefined
 */
console.log('15: ' + addToBucket(bucket));

bucket = 0;
/**
 * undefined
 */
console.log('19: ' + addToBucket(bucket));

var bucket1 = 0;
/**
 * undefined because addToBucket does not return anything
 */
console.log('23: ' + addToBucket(bucket1));
/**
 * @returns bucket
 */
//function addToBucket2(bucket){
//  bucket++;
//  return bucket;
//}
/**
 * 1 because it is now returns the inner value of bucket
 */
//console.log('30: ' + addToBucket2(bucket1));
/**
 * 1 because it is now returns the inner value of bucket
 */
//console.log('31: ' + addToBucket2(bucket));
/**
 * 0 bucket1 is not reassigned. It was only passed in as an argument
 */
//console.log('32: ' + bucket1);
/**
 * 0 bucket is not reassigned. It was only passed in as an argument
 */
//console.log('33: ' + bucket);
/**
 * Same function as add2Bucket1, but demonstrates how when one function overwrites another, the first one is never used. Regardless of when is called
 */
//function addToBucket2(bucket){
//  bucket++;
//}
//
//console.log('37: ' + addToBucket2(bucket1));
//console.log('38: ' + addToBucket2(bucket));
/**
 * Here we update the global variables because the function has direct access to them
 */
//function addToBucket3(){
//  bucket++;
//  bucket1++;
//}
//addToBucket3();
//console.log('47: ' + bucket1);
//console.log('48: ' + bucket);
/**
 * This function inadvertently creates a global variable by not using the 'var' keyword
 */
function addToBucket4(){
  bucket3 = 0;
  bucket3++;
}
/**
 * 1
 */
console.log(bucket3);
/**
 * Will output undefined since using a global variable name as a parameter is the same as declaring it over inside a function using var
 * @param bucket3
 */
function addToBucket5(bucket3){
  console.log(bucket3);
}
