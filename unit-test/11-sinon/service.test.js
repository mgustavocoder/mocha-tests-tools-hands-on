const chai = require('chai');
const sinon = require('sinon');
const proxyquire = require('proxyquire').noCallThru()

chai.should();

describe('service test', () => {   
    it('Business Logic', () => {
        const businessMock = {
            logicA: sinon.spy(() => undefined),
            logicB: sinon.spy(() => 11),
            logicC: sinon.spy(() => undefined)
        }

        const service = proxyquire('./service', {
            './lib/business':businessMock
        });

        const result = service(2, 3);
        result.should.equal(11);

        businessMock.logicA.called.should.be.ok
        businessMock.logicB.called.should.be.ok
        businessMock.logicC.called.should.not.be.ok
        businessMock.logicA.calledWith(2, 3).should.be.ok

        sinon.assert.calledOnce(businessMock.logicA);
        sinon.assert.calledOnce(businessMock.logicA);
        sinon.assert.calledWith(businessMock.logicA, 2, 3);
    });
});