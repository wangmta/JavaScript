// mixins make multiple inheritance easy

function Person(name) {
    this.name = name;
}

function Dog(name) {
    this.name = name;
}

var speaker = {
    speak: function () {
        return this.name + " is speaking";
    }
};

var mover = {
    walk: function () {
        return this.name + " is walking";
    },
    run: function () {
        return this.name + " is running";
    }
};

var doMath = {
    add: function () {
        return this.name + " is adding";
    },
    multiply: function () {
        return this.name + " is multiplying";
    }
};

// JQuery buildin mixin
// $.extend(Person.prototype, speaker, mover);
// $.extend(Dog.prototype, speaker, mover);

// our custom extend method
function extend(target) {
    // if there is no other args, return
    if(!arguments[1]){
        return;
    }
    for(var ii = 1; ii < arguments.length; ii++){
        var source = arguments[ii];

        for(var prop in source){
            // if the prop is not from target and not from prototype
            if(!target[prop] && source.hasOwnProperty(prop)){
                target[prop] = source[prop];
            }
        }
    }
}

var john = new Person("John");
var fido = new Dog("Fido");

extend(Person.prototype, speaker, mover, doMath);
extend(Dog.prototype, speaker, mover);

console.log(john.walk());
console.log(john.add());
console.log(fido.speak());