const map = require('./map');

describe('Map', () => {

    const cube = (value) =>
    {
        return value * value * value;
    };

    const identity = (value) =>
    {
        return value;
    };

    it('Map of [] and cube is []', () => {

        expect(map([],cube)).toEqual([]);
    });

    it('Map of [1,2,3] and cube is [1,4,9]', () => {
        expect(map([1,2,3],cube)).toEqual([1,8,27]);
    });

    it('Map of [1,2,3] and identity is [1,2,3]',()=>
    {
        expect(map([1,2,3],identity)).toEqual([1,2,3]);
    });

    it('Map of 10 and someObject is 11', () => {
            expect(map([{x:10}],someObject=>someObject.x+1)).toEqual([11]);
    });
})