const min = require('./min');

describe('Min', () => {
    it('Min of [1,2,3,4] is 4', () => {
         expect(min([1,2,3,4])).toEqual(1);
    });
});