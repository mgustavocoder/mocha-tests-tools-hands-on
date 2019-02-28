const assert = require('assert');
const promiseFunction = require('./promiseFunction')

describe.skip('promiseFunction test', () => {
    it('Promise', (done) => {
        promiseFunction()
            .then((result) => {
                console.log('then', result);
                assert.fail();
                done();
            }).catch(err => {
                console.log('catch', err);
            })
    });
});