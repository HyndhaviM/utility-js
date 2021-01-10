const head = require('./head');

describe('Head', () => {

    it('Head of []  is undefined', () => {
        expect(head([])).toBeUndefined();
    });

    it('Head od [1,2,3,4] is 1', () => {
        expect(head([1,2,3,4])).toEqual(1);
    });

})