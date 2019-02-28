const chai = require('chai');
const nock = require('nock')
const service = require('./service')

chai.should();

describe('service test', () => {
    it('Business Logic', async () => {

        nock('https://www.google.com/')
            .get('/2')
            .reply(200, {
                magicNumber: 10,
            })

        const result = await service(2, 3);
        result.should.equal(100);
    });

    it.only('Business Logic', async () => {

        nock('https://www.google.com/')
            .get('/2')
            .reply(400, {
            })

        const result = await service(2, 3);
    });
});