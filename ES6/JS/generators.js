/**
 * Created by admin on 5/14/2017.
 */
function* createGenerator() {
    yield 1;
    console.log("after 1st yield");
    yield 2;
    console.log("after 2nd yield");
}
var myGen = createGenerator();
console.log(myGen.next());
console.log(myGen.next());
var person = {
    fname: "John",
    lname: "Doe"
};
person[Symbol.iterator] = function* () {
    var props = Object.keys(person);
    for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
        var t = props_1[_i];
        yield this[t];
    }
};
for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
    var p_1 = person_1[_i];
    console.log(p_1);
}
//# sourceMappingURL=generators.js.map