// method 1
// filter() does not mutate the array on which it is called.
// If the item is present more than once, the indexOf method returns the position of the first occurrence.
var uniqueArray = function(arr) {
    return arr.filter(function(item, index, newarr) {
        return newarr.indexOf(item) == index;
    });
};

var test = ['mike','james','james','alex'];
console.log(test.indexOf('james') == 2);
console.log(uniqueArray(test));

// method 2
var removeDuplicates = function (arr) {
    var obj = {};
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        obj[arr[i]] = 0;
    }
    console.log(obj);
    for(var x in obj){
        newArr.push(x);
    }
    return newArr;
}

console.log(removeDuplicates(test));