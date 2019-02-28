const chai = require('chai');
const asyncFunction = require('./asyncFunction')

var expect = chai.expect;

describe('asyncFunction test', () => {   
    it('Async/Await', async () => {
        const result = await asyncFunction();
        expect(result).to.be.a('string');
        expect(result).to.equal('success');
    });
});