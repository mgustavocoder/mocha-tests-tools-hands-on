const chai = require('chai');
const asyncFunction = require('./asyncFunction')

var assert = chai.assert;

describe('asyncFunction test', () => {   
    it('Async/Await', async () => {
        const result = await asyncFunction();
        assert.typeOf(result, 'string');
        assert.equal(result, 'success');
    });
});