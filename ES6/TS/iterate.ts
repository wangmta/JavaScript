/**
 * Created by admin on 5/13/2017.
 */

/*
let myMap = new Map([
    ["fname", "John"],
    ["lname", "Doe"]
]);

for(let value of myMap.values()){
    console.log(value);
}

for(let key of myMap.keys()){
    console.log(key);
}

for(let entry of myMap.entries()){
    console.log(`${entry[0]} --  ${entry[1]}`);
}

for(let [key, value] of myMap.entries()){
    console.log(`${key} -- ${value}`);
}*/


// Check to see if the obj has the property
/*let str = "Hello";
let arr = [1,2,3];
let num = 5;
let obj = {name: "Mike"};

console.log("For string " + typeof str[Symbol.iterator]);
console.log("For array " + typeof arr[Symbol.iterator]);
console.log("For number " + typeof num[Symbol.iterator]);
console.log("For object " + typeof obj[Symbol.iterator]);*/

// Iterables and Iterators
/*let iterable = [1,2,3];

function createIterator(array){
    let count = 0;
    return{
        next: function () {
            return (count < array.length) ?
                {value: array[count++], done: false} : {value: undefined, done: true};
        }
    }
}

let myIterator = createIterator(iterable);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());*/

// iterate object
let person = {fname: "John", lname: "Doe"};
person[Symbol.iterator] = function(){
    let props = Object.keys(person);
    let count = 0;
    let isDone = false;
    let next = () =>{
        if(count >= props.length){
            isDone = true;
        }
        return{done: isDone, value: this[props[count++]]};
    }
    return {next};
}

for(let p of person){
    console.log(p);
}