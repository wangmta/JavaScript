/**
 * Created by admin on 5/8/2017.
 */
var MyClass = (function () {
    function MyClass() {
    }
    return MyClass;
}());
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
};
for (var i = 0; i < +5; i++) {
    _loop_1(i);
}
//# sourceMappingURL=Test.js.map