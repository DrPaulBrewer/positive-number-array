/* jshint node:true,esnext:true,eqeqeq:true,undef:true,lastsemic:true,strict:true */

var toNumber = function(s){ 
    return +s; 
};

var gt0 = function(n){ 
    return n>0; 
};

module.exports = function(myInput){
    'use strict';
    if (typeof(myInput)==="string")
	return (myInput
		.replace(/,/g," ")
		.split(/\s+/)
		.map(toNumber)
		.filter(gt0)
	       );
    if (Array.isArray(myInput))
	return (myInput
		.map(toNumber)
		.filter(gt0)
	       );
};
