/**
 * case1
 * Created by dcorns on 9/24/15
 * Copyright © 2015 Dale Corns
 * Global Variables and scope
 */
'use strict';

var bucket;

function addToBucket(bucket){
  bucket++;
}

console.log('15: ' + addToBucket(bucket));

bucket = 0;

console.log('19: ' + addToBucket(bucket));

var bucket1 = 0;

console.log('23: ' + addToBucket(bucket1));

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