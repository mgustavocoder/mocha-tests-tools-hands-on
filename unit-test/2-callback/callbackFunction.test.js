const assert = require('assert');
const callbackFunction = require('./callbackFunction')

describe('callbackFunction test', () => {
    it.skip('Callback', () => {
        callbackFunction(() => {
            console.log('callback');
            assert.fail();
        })
    });

    it.skip('Callback done', (done) => {
        callbackFunction(() => {
            console.log('callback');
            assert.fail();
            done();
        })
    });

    it('Callback done', (done) => {
        callbackFunction((result) => {
            console.log('callback');
            assert(result === 'success');
            done();
        })
    });
});