const assert = require('assert');
const asyncFunction = require('./asyncFunction')

describe('asyncFunction test', () => {   
    it('Async/Await', async () => {
        const result = await asyncFunction();
        assert(result === 'success');
    });
});