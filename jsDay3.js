/**
 * jsDay3
 * Created by dcorns on 9/29/15
 * Copyright © 2015 Dale Corns
 */
'use strict';

/**
 * Call Back Hell
 */


function getData(tmo){
  setTimeout(function(){
    return {name: 'Allen', age: 35};
  }, tmo);
}

console.log(getData(1000));

function getData2(tmo, cb){
  setTimeout(function(){
    cb({name: 'Allen', age: 35});
  }, tmo);
}

getData2(1000, function(data){
  console.log(data);
});