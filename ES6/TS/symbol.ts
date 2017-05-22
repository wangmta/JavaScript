/**
 * Created by admin on 5/13/2017.
 */
// no new keyword
let s1 = Symbol("1st Symbol");
console.log(typeof s1);
console.log(s1.toString());

// every symbol created points to an new obj
let s2 = Symbol("Test");
let s3 = Symbol("Test");

console.log(s2 == s3);
console.log(s2 === s3);
// register the symbol at the register
let s4 = Symbol.for("RegSymbol");
let s5 = Symbol.for("RegSymbol");

console.log(s4 == s5);
console.log(Symbol.keyFor(s4));

let fname = Symbol();
let person = {
    [fname]:"john"
};

console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
