Array.prototype.myMap = function (fun) {
    var self = this;
    var newArr = [];
    for (var i=0; i<self.length; i++){
        var x = fun(this[i]);
        newArr.push(x);
    }
    return newArr;
};

function newNum(a) {
    return a + 2;
}

var testArr = [1,2,3,4];

console.log(testArr.myMap(newNum));