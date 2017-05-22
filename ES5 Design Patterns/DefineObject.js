var obj = {};

obj.firstName = "John";
obj["lastName"] = "Doe";

var firstName = obj["firstName"];
var lastName = obj.lastName;

Object.defineProperty(obj, "country", {value: "USA"});

Object.defineProperties(obj, {
    twitter:{
        value: "johndoe"
    },
    email: {
        value: "johndoe@abc.com"
    }
});

// introduced in ES5
var foo = {};

var bar = Object.create(Object.prototype);

var johnDoe = {
    firstName: "john",
    lastName: "doe",
    sayName: function () {
        return this.firstName + this.lastName;
    }
};

// Object.create build a prototype chain
// jane doe inherit from john
var janeDoe = Object.create(johnDoe, {
    firstName: {value: "jane"},
    greet: {
        value: function (person) {
            return "hello " + person.firstName;
        }
    }
})

// mike inherit from jane
var mikeSmith = Object.create(janeDoe,{
    firstName: {value: "mike"},
    lastName: {value: "Smith"}
});

console.log(johnDoe.sayName());
// console.log(janeDoe.sayName() + " " + janeDoe.greet(janeDoe));
console.log(janeDoe.sayName() + " greeting: " + janeDoe.greet(johnDoe));
console.log(mikeSmith.sayName() + " greeting: " + mikeSmith.greet(janeDoe));

// test the prototype chain
console.log(janeDoe.__proto__===johnDoe.prototype);
console.log(mikeSmith.__proto__===janeDoe.prototype);
console.log(janeDoe.__proto__===johnDoe);
console.log(mikeSmith.__proto__===janeDoe);

