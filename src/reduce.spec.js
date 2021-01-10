const reduce = require('./reduce');

describe('Reduce', () => {

    it('Reduce [] as (x,y)=>x+y is undefined', () => {
        expect(reduce([],(x,y)=>x+y)).toBeUndefined();
    });

    it('Reduce [] as (x,y)=>x+y and 10 is 10',()=>
    {
        expect(reduce([],(x,y)=>x+y,10)).toEqual('10');
    });

    it("Reduce ['a','b','c'] as (x,y)=>x+y is abc", () => {
         expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual('abc');
    });
    it("Reduce ['a','b','c'] as (x,y)=>x+y and z is zabc", () => {
         expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual('zabc');
    });
})