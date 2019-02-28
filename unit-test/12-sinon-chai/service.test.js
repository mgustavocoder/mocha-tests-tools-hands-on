var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
const proxyquire = require('proxyquire').noCallThru()

chai.should();
chai.use(sinonChai);

describe('service test', () => {   
    it('Business Logic', async () => {
        const businessMock = {
            logicA: sinon.spy(() => 5),
            logicB: sinon.spy(() => 11),
            logicC: sinon.spy(() => undefined)
        }

        const service = proxyquire('./service', {
            './lib/business':businessMock
        });

        const result = service(2, 3);
        result.should.equal(11);

        businessMock.logicA.should.have.been.calledOnceWith(2, 3)
        businessMock.logicB.should.have.been.calledOnceWith(2, 5)
    });
});