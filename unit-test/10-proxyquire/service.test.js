const chai = require('chai');
const proxyquire = require('proxyquire').noCallThru()

chai.should();

describe('service test', () => {   
    it('Business Logic', () => {

        const service = proxyquire('./service', {
            './lib/business': {
                logicA: () => undefined,
                logicB: () => 11
            }
        });

        const result = service();
        result.should.equal(11);
    });
});