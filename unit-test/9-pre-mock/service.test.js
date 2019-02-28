const chai = require('chai');
const service = require('./service')

chai.should();

describe('service test', () => {   
    it('Business Logic', async () => {
        const result = service(2, 3);
        result.should.equal(10);
    });
});