// arguments is not an array rather an array like object. It has length but doesn't have the methods like forEach, indexOf, etc.

var bank = {
    name: 'Bank A',
    total: 5000,
    deductMonthlyFee: function (fee1, fee2) {
        this.total = this.total - fee1 - fee2;
        return this.name + " balance is: " + this.total;
    }
};

var mike = {
    name: "Mike",
    total: 3000
};

var jane = {
    name: "Jane",
    total: 5000
};

console.log(bank.deductMonthlyFee.call(mike, 300, 10));
console.log(bank.deductMonthlyFee.apply(jane, [300, 10]));