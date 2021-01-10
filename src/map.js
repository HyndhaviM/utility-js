const tail = require('./tail');
const head = require('./head');

const map = (list, applyFunction) =>
{
    var result = [];
    return applyFunctionToList(list, applyFunction,result);
}

const applyFunctionToList = (list, applyFunction,result) => {
   if(list.length >0 ){
        result.push(applyFunction(head(list)));
        return applyFunctionToList(tail(list),applyFunction,result);
   }
    return result;
}
module.exports = map;