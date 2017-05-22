/**
 * Created by admin on 5/13/2017.
 */
let myMap = new Map();

myMap.set("fname", "Mike");
myMap.set("age", 20);
console.log("the age of " + myMap.get("fname") + " is " + myMap.get("age"));

let ob1 = {};
let ob2 = {};

myMap.set(ob1, 10);
myMap.set(ob2, 20);

console.log(myMap.get(ob1));
console.log(myMap.has("fname"));
myMap.delete("fname");

console.log(myMap.size);
console.log(myMap.has(ob1));
console.log(myMap.has("fname"));

// remove all elements
myMap.clear();
console.log(myMap.size);

// weakmap  key can only be object not involved in garbage collection (same as WeakMap)
let myWeakMap = new WeakMap();
let obj1 = {};
myWeakMap.set(obj1, "Hello There");
console.log(myWeakMap.get(obj1));
obj1 = null;
console.log(myWeakMap.size);