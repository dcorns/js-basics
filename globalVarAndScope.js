/**
 * case1
 * Created by dcorns on 9/24/15
 * Copyright © 2015 Dale Corns
 * Global Variables and scope
 */
//'use strict';
var bucket;

function addToBucket(bucket){
  bucket++;
}
console.log('13: ' + addToBucket(bucket));

bucket = 0;
console.log('16: ' + addToBucket(bucket));

var bucket1 = 0;
console.log('19: ' + addToBucket(bucket1));
console.log('20: ' + addToBucket(bucket));

bucket = 0;

console.log('24: ' + addToBucket(bucket));

var bucket1 = 0;

console.log('28: ' + addToBucket(bucket1));

function addToBucket2(bucket){
  bucket++;
  return bucket;
}
console.log('34: ' + addToBucket2(bucket1));
console.log('35: ' + addToBucket2(bucket));
console.log('36: ' + bucket1);
console.log('37: ' + bucket);
//function addToBucket2(bucket){
//  bucket++;
//}
//
//console.log('42: ' + addToBucket2(bucket1));
//console.log('43: ' + addToBucket2(bucket));
//function addToBucket3(){
//  bucket++;
//  bucket1++;
//}
//addToBucket3();
//console.log('49: ' + bucket1);
//console.log('50: ' + bucket);
function addToBucket4(){
  bucket3 = 0;
  bucket3++;
}
//console.log('58: ' + bucket3);
addToBucket4();
console.log('57: ' + bucket3);

function logBucket3(bucket3){
  console.log('60: ' + bucket3);
}
logBucket3();