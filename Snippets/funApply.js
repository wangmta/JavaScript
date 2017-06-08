function multiTwo() {
    return this.a * 2 + this.b*3;
}

var obj = {
    a: 1,
    b: 2
}

console.log(multiTwo.apply(obj));