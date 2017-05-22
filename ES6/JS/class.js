/**
 * Created by admin on 5/11/2017.
 */
/*
let p2 = new Person(); // class is not hoisted, so this will not work

class Person{
    greet(){}
}

console.log(typeof Person);

let p1 = new Person();

console.log(p1.greet === Person.prototype.greet);
*/
var Employee = (function () {
    // constructor method
    function Employee(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }
    // static method
    Employee.staticMethod = function () {
        console.log("static method");
    };
    // prototype method
    Employee.prototype.greetPerson = function () {
        console.log("Hello " + this.name);
    };
    return Employee;
}());
var e = new Employee("Mike");
Employee.staticMethod();
e.greetPerson();
//# sourceMappingURL=class.js.map