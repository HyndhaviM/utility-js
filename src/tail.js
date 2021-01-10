const tail = (list) => {
    var tail = [];
    for(let i=1;i<list.length;i++)
    {
        tail.push(list[i]);
    }
    return tail;
}
module.exports = tail;