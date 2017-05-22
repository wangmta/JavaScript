// a decorator is basically a wrapper
function Coffee() {

}

Coffee.prototype.cost = function () {
    return 5;
};

Coffee.medium = function (coffeeObj) {};

Coffee.small = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost - 1;
    }
};

Coffee.large = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + 1;
    }
};

Coffee.sugar = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .15;
    }
};

Coffee.creamer = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .15;
    }
};

Coffee.whippedCream = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .15;
    }
};

Coffee.milk = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .15;
    }
};

Coffee.foam = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .15;
    }
};

Coffee.cacao = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .15;
    }
};

Coffee.mocha = function (coffeeObj) {
    Coffee.milk(coffeeObj);
    Coffee.foam(coffeeObj);
    Coffee.cacao(coffeeObj);
    var total = coffeeObj.cost();
    coffeeObj.cost = function () {
        return total;
    }
}

var coffee = new Coffee();
var mocha = new Coffee();

Coffee.large(coffee);
Coffee.whippedCream(coffee);

console.log(coffee.cost());

Coffee.medium(mocha);
Coffee.mocha(mocha);

console.log(mocha.cost());



