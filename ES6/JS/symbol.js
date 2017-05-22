/**
 * Created by admin on 5/13/2017.
 */
// no new keyword
var s1 = Symbol("1st Symbol");
console.log(typeof s1);
console.log(s1.toString());
// every symbol created points to an new obj
var s2 = Symbol("Test");
var s3 = Symbol("Test");
console.log(s2 == s3);
console.log(s2 === s3);
// register the symbol at the register
var s4 = Symbol.for("RegSymbol");
var s5 = Symbol.for("RegSymbol");
console.log(s4 == s5);
console.log(Symbol.keyFor(s4));
var fname = Symbol();
var person = (_a = {},
    _a[fname] = "john",
    _a);
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
var _a;
//# sourceMappingURL=symbol.js.map