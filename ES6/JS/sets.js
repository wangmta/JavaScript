/**
 * Created by admin on 5/13/2017.
 */
// strong set
/*
let mySet = new Set();
let ob1 = {};
let ob2 = {};

mySet.add("Hello");
mySet.add(1);
mySet.add(1);

mySet.add(ob1);
mySet.add(ob2);

console.log("the size of mySet is: " + mySet.size);
console.log("mySet is: " + mySet);

let newSet = new Set([1,1,2,2,2,3,3,4,4,4]);
console.log("newSet is: " + newSet);
console.log("does newSet contains 3: " +newSet.has(3));

let chainSet = new Set().add("hello").add("there");
console.log("chainSet is " + chainSet);

console.log(mySet.delete(1));*/
// weakset
var set1 = new Set();
var key = {};
set1.add(key);
console.log(set1.has(key));
key = null;
console.log(set1.has(key));
console.log(set1.size);
var set2 = new WeakSet();
var key1 = {};
set2.add(key1);
console.log(set2.has(key1));
key1 = null;
console.log(set2.has(key1));
console.log(set2.size);
//# sourceMappingURL=sets.js.map