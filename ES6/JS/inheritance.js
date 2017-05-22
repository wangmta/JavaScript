var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by admin on 5/12/2017.
 */
var Person = (function () {
    function Person(name) {
        console.log(name + " Person constructor");
    }
    Person.prototype.getID = function () {
        return 10;
    };
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = 
        // it is mandatory to call the constructor of the super class
        _super.call(this, name) || this;
        console.log(name + " Employee constructor");
        return _this;
    }
    Employee.prototype.getID = function () {
        return _super.prototype.getID.call(this);
    };
    return Employee;
}(Person));
var e = new Employee("Mike");
console.log(e.getID());
//# sourceMappingURL=inheritance.js.map