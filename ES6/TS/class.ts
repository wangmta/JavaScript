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

class Employee{
    // constructor method
    constructor(name){
        this.name = name;
        console.log(this.name + " Constructor");
    }
    // static method
    static staticMethod(){
        console.log("static method");
    }
    // prototype method
    greetPerson(){
        console.log("Hello " + this.name);
    }
}

let e = new Employee("Mike");
Employee.staticMethod();
e.greetPerson();