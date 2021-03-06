/**
 * Created by admin on 5/8/2017.
 */

/*class MyClass {
    prop1: "Hello";
    prop2: "World";
    prop3: "aaa";
}

for(let i=0; i<=5; i++){
    setTimeout(function () {
        console.log(i);
    }, 1000)
}

const obj = {firstName:"James"};

// not work: obj = {};
// this works
obj.firstName = "Joe";

const obj1 = {
    id: 1,
    getId: function() {
        // don't need var self = this for =>
        setTimeout(() => console.log(this.id), 1000)
    }
}

obj1.getId();

let rate = 0.1;
let getValue = function (value = 10, bonus = value*rate) {
    console.log(value + bonus);
    console.log("the length of the args are: " + arguments.length);
}

getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);*/


// rest operator ...
let displayColors = function (message, ...colors) {
    console.log(message);
    console.log(colors);

    for(let i in colors){
        console.log(colors[i]);
    }
}

let message = 'List of colors';

// displayColors(message, "red");
// displayColors(message, "red", "blue");
// displayColors(message, "red", "green");

// spread operator is the opposite of rest operator
// executed during the function call
let colorArr = ['orange', 'red', 'pink'];
displayColors(message, ...colorArr);
