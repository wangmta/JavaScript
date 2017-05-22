/**
 * Created by admin on 5/12/2017.
 */
// create a set without inherit any properties
var mySet = Object.create(null);
mySet.id = 1;
if (mySet.id) {
    console.log('id exists');
}
var myMap = Object.create(null);
myMap.name = "Mike";
var val = myMap.name;
console.log(val);
myMap[100] = "Hello";
console.log(myMap["100"]);
console.log(myMap[100]);
var ob1 = {};
var ob2 = {};
myMap[ob1] = "World";
console.log("myMap[ob2] is " + myMap[ob2]);
console.log(ob1.toString());
console.log(ob2.toString());
console.log(ob1.toString() === ob2.toString());
//# sourceMappingURL=setsNmaps.js.map