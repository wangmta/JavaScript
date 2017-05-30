var bank = {
    name: 'Bank A',
    total: 5000,
    deductMonthlyFee: function (fee) {
        this.total = this.total - fee;
        return this.name + " balance is: " + this.total;
    }
};

var mike = {
    name: "Mike",
    total: 3000
};

// both way works
// var mikeBalance = bank.deductMonthlyFee.bind(mike, 300);
// console.log(mikeBalance());
var mikeBalance = bank.deductMonthlyFee.bind(mike);
//bind returns a function
console.dir(mikeBalance);
console.log(mikeBalance(300));

console.log(bank.deductMonthlyFee.bind(mike)(300));

// browser compatibility workaround
Function.prototype.bind = Function.prototype.bind || function (object) {
        var self = this;
        return function () {
            return self.apply(object, arguments);
        };
};