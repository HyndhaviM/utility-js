const filter = require('./filter');

describe('filter', () => {
    it('Filter x=>true on [] is []',() => {
        expect(filter([],x=>true)).toEqual([]);
    });
    it('Filter x=>true on [1,2,3] is [1,2,3]',() => {
            expect(filter([1,2,3],x=>true)).toEqual([1,2,3]);
    });
    it('Filter x=>false on [1,2,3] is []',() => {
            expect(filter([1,2,3],x=>false)).toEqual([]);
    });
    it('Filter x=>x>1 on [1,2,3] is [2,3,]',() => {
            expect(filter([1,2,3],x=>x>1)).toEqual([2,3]);
     });
     it("filterUpperCase on ['a','B','c','D']",() => {
           const filterUpperCase = (string) => /^[A-Z]*$/.test(string)
           expect(filter(['a','B','c','D'],filterUpperCase)).toEqual(['B','D']);
     });
})