function containsNumber() {
    var args = Array.prototype.slice.call(arguments);
    return args.indexOf(3) != -1;
}

console.log(containsNumber(1,2,3,4));
console.log(containsNumber(1,2,4));