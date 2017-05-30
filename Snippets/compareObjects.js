var start, end;
var d = new Date();

function isEqual(a, b) {
    //return the array of the object property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if(aProps.length != bProps.length) return false;

    for(var i=0; i<aProps.length; i++){
        var propName = aProps[i];
        if(a[propName] !== b[propName]) return false
    }
    return true;
}

var a = {
    fname: 'john',
    lname: 'doe'
};
var a1 = {
    fname: 'john',
    lname: 'doe'
};
var b = {
    fname: 'jane',
    lname: 'doe'
};

start = d.getTime();
console.log(a === a1);
console.log(isEqual(a,a1));
console.log(isEqual(a,b));
end = d.getTime();
console.log(end - start + " ms");

// Limitation
// If one of the property values is itself an object
// If one of the property values is NaN (the only value in JavaScript that is not equal to itself?)
// If one object has a property with value undefined, while another object doesn't have the property (which thus evaluates as undefined)
// can solve this problem by using hasOwnProperty