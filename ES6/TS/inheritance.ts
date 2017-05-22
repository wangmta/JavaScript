/**
 * Created by admin on 5/12/2017.
 */
class Person{
    constructor(name){
        console.log(name + " Person constructor");
    }
    getID(){
        return 10;
    }
}

class Employee extends Person{
    constructor(name){
        // it is mandatory to call the constructor of the super class
        super(name);
        console.log(name + " Employee constructor");
    }
    getID(){
        return super.getID();
    }
}

let e = new Employee("Mike");
console.log(e.getID());