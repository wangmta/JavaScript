// Since we are not reading anything from this or using it at all.
// We can simply pass null as first parameter.
function  getMax(arr) {
    return Math.max.apply(null, arr);
}

var test = [1,2,3,42,4,5,6,7,8,34];
console.log(getMax(test));