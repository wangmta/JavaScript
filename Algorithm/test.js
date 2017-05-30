/**
 * Created by admin on 5/20/2017.
 */
// (function(){
//     var a = b = 3;
// })();
//
// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();

// function foo1()
// {
//     return {
//         bar: "hello"
//     };
// }
//
// function foo2()
// {
//     return
//     {
//         bar: "hello"
//     };
// }
//
// console.log(typeof foo1());
// console.log(typeof foo2());
// console.log(foo1());
// console.log(foo2());


// console.log(typeof NaN);
// console.log(NaN == undefined);
// console.log(NaN == null);
// console.log(NaN == false);

// console.log(0.1 + 0.2);   //0.30000000000000004
// console.log(0.1 + 0.2 == 0.3);  //false

// function add(x, y) {
//     return x.toPrecision() + y.toPrecision()
// }
// console.log(add(0.1,0.2));  //"0.10.2"

// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
console.log(stoleSecretIdentity.bind(hero)());