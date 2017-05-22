function Beverage(name, temperature) {
    this.name = name;
    this.temperature = temperature;
}

Beverage.prototype.drink = function () {
    console.log("I want to drink " + this.name);
};

function Coffee(type) {
    Beverage.call(this, "Coffee", "hot");
    this.type = type;
}

Coffee.prototype = Object.create(Beverage.prototype);
Coffee.prototype.sip = function () {
    console.log("Sipping some " + this.type + " " + this.name);
};

var water = new Beverage("water", "code");
var coffee = new Coffee("Dark");

console.log(water.drink());
console.log(coffee.drink());
console.log(coffee.sip());