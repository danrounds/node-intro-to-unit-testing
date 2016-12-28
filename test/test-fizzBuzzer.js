const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function() {

    it('should give separate, string results for i % 3, i % 5, and \(i % 3 && i % 5\)', function() {
        const normalCases = [
            {k: 1, answer: 1},
            {k: 3, answer: 'fizz'},
            {k: 5, answer: 'buzz'},
            {k: 15, answer: 'fizz-buzz'},
            {k: 21, answer: 'fizz'},
            {k: 200, answer: 'buzz'},
            {k: 300, answer: 'fizz-buzz'}
        ];
        normalCases.forEach( (input) => fizzBuzzer(input.k)
                             .should.equal(input.answer) );

    });

    it('should raise error if input isn\'t a number', function() {
        const badInputs = [
            function() {},
            'string',
            {},
            [],
            null,
            undefined
        ];
        // badInputs.forEach( (input) => fizzBuzzer(input).should.throw(Error) );
        badInputs.forEach(function(input) {
            (function() { fizzBuzzer(input); }).should.throw(Error);
        });
    });


});


