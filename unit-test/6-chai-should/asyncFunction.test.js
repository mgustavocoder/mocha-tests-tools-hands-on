const chai = require('chai');
const asyncFunction = require('./asyncFunction')

chai.should();

describe('asyncFunction test', () => {   
    it('Should return a string when everything works.', async () => {
        const result = await asyncFunction();
        result.should.be.a('string');
        result.should.equal('success');
    });
});