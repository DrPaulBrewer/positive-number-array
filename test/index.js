const positiveNumberArray = require("../index.js");
const should = require('should');
const assert = require('assert');

describe('', function(){
    it('positiveNumberArray is a function', function(){
	positiveNumberArray.should.be.type('function');
    });
    
    it("positiveNumberArray() returns undefined", function(){
	assert.ok(positiveNumberArray()===undefined);
    });

    it("positiveNumberArray('') returns []", function(){
	positiveNumberArray('').should.deepEqual([]);
    });

    it("positiveNumberArray(-1) returns []", function(){
	positiveNumberArray(-1).should.deepEqual([]);
    });

    it("positiveNumberArray(NaN) returns []", function(){
	positiveNumberArray(NaN).should.deepEqual([]);
    });

    it("positiveNumberArray(0.5) returns [0.5]", function(){
	positiveNumberArray(0.5).should.deepEqual([0.5]);
    });

    it("positiveNumberArray('1,2,3,4,5') returns [1,2,3,4,5]", function(){
	positiveNumberArray('1,2,3,4,5').should.deepEqual([1,2,3,4,5]);
    });

    it("positiveNumberArray('1 2 3 4 5') returns [1,2,3,4,5]", function(){
	positiveNumberArray('1 2 3 4 5').should.deepEqual([1,2,3,4,5]);
    });
    
    it("positiveNumberArray('1  2  3 4    5   ') returns [1,2,3,4,5]", function(){
	positiveNumberArray('1  2  3 4    5   ').should.deepEqual([1,2,3,4,5]);
    });

    it('positiveNumberArray("1\n0\n2 \n\n 3 \n\n 4 5") returns [1,2,3,4,5]', function(){
	positiveNumberArray("1\n0\n2 \n\n 3 \n\n 4 5").should.deepEqual([1,2,3,4,5]);
    });

    it('positiveNumberArray("1 chicken 2 trolls 3 4 5 mylady") returns [1,2,3,4,5]', function(){
	positiveNumberArray("1 chicken 2 trolls 3 4 5 mylady").should.deepEqual([1,2,3,4,5]);
    });

    it("positiveNumberArray('1,2 3 4 5 ') returns [1,2,3,4,5]", function(){
	positiveNumberArray('1,2 3 4 5 ').should.deepEqual([1,2,3,4,5]);
    });

    it("positiveNumberArray([1,2,3,0,0,4,-1,5]) returns [1,2,3,4,5]", function(){
	positiveNumberArray([1,2,3,0,0,4,-1,5]).should.deepEqual([1,2,3,4,5]);
    });

    it("positiveNumberArray(JSON.stringify([2,7,1,8,2,8,1,8])) returns [2,7,1,8,2,8,1,8]", function(){
	positiveNumberArray(JSON.stringify([2,7,1,8,2,8,1,8])).should.deepEqual([2,7,1,8,2,8,1,8]);
    });

    
});
