const assert = require('assert');
const asyncFunction = require('./asyncFunction')

describe('asyncFunction test', () => {   
    it('Async/Await', async () => {
        try {
            const result = await asyncFunction();
            assert.fail();
        } catch (err) {
            assert(err === 'error');
        }
    });
});