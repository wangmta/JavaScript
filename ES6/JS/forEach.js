/**
 * Created by admin on 5/13/2017.
 */
var arr = [1, 2, 3, 4];
arr.forEach(arrFunction);
function arrFunction(element, index, array) {
    console.log(element + " -- " + index);
    console.log(arr === array);
}
var myMap = new Map([
    ["fname", "john"],
    ["lname", "doe"]
]);
myMap.forEach(mapFunction);
function mapFunction(value, key, callingMap) {
    console.log(key + " " + value);
    console.log(myMap === callingMap);
}
var mySet = new Set([1, 2, 3]);
mySet.forEach(setFunction);
function setFunction(value, key, callingSet) {
    console.log(key + " " + value);
    console.log(mySet === callingSet);
}
//# sourceMappingURL=forEach.js.map