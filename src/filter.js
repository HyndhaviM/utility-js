const tail = require('./tail');
const head = require('./head');

const filter = (list, applyFilter) =>
{
    var result = [];
    return applyFilterToList(list, applyFilter,result);
}

const applyFilterToList = (list, applyFilter,result) => {
   if(list.length >0 ){
        var headOfList= head(list);
        if(applyFilter(headOfList))
            result.push(headOfList);
        return applyFilterToList(tail(list),applyFilter,result);
   }
    return result;
}
module.exports = filter;