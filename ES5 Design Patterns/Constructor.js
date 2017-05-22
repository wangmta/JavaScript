function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    //this create memory issues for each instance
    this.sayName = function () {
        return this.fname + " " + this.lname;
    }
}

// this resolves memory issues
// Person.prototype.sayName = function () {
//     return this.fname + " " + this.lname;
// }

var johnDoe = new Person("John", "Doe");
var janeDoe = new Person("Jane", "Doe");

var isSame = johnDoe.sayName === janeDoe.sayName;
console.log(isSame);
