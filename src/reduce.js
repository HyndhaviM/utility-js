const tail = require('./tail');
const head = require('./head');

const reduce = (list, applyFunction,prefix = '') =>
{
    var result = prefix+reduceList(list, applyFunction,"");
    return result !== '' ? result : undefined;
}

const reduceList = (list, applyFunction,result) => {
   if(list.length >0 ){
        return result+applyFunction(head(list), reduceList(tail(list),applyFunction,result));
   }
   return result;
}
module.exports = reduce;