describe('Mocha Hooks Lifecycle', () => {
  describe('Level 1', () => {
    before(() => {
      console.log('before');
    });

    beforeEach(() => {
      console.log('beforeEach');
    });

    afterEach(() => {
      console.log('afterEach');
    });

    after(() => {
      console.log('after');
    });

    it('Each 1', () => {
      console.log('it');
    });

    it('Each 2', () => {
      console.log('it');
    });

    it('Each 3', () => {
      console.log('it');
    });
  });
});