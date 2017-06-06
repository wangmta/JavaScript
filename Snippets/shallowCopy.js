// Javascript does not have built-in object-cloning facilities.

function shallowCopy(original) {
    var clone = {};

    var key;

    for(key in original){
        clone[key] = original[key];
    }

    return clone;
}

// The clone produced doesn't have the same prototype as the original, it is simply an instance of Object...

function copyEnumerableOwnProps(orginal) {
    var clone = {};

    var i, key = Object.keys(orginal);

    // (the difference being that a for-in loop enumerates properties in the prototype chain as well
    for (i=0; i<key.length; i++) {
        clone[keys[i]] = orginal[keys[i]];
    }
    return clone;
}

// copy non-enumerable props as well
function copyOwnProps(orginal) {
    var clone = {};

    var i, key = Object.getOwnPropertyNames(orginal);

    // (the difference being that a for-in loop enumerates properties in the prototype chain as well
    for (i=0; i<key.length; i++) {
        clone[keys[i]] = orginal[keys[i]];
    }
    return clone;
}

// ensure that the clone will have the correct prototype.

function protoCopy(orginal) {
    var clone = Object.create(Object.getPrototypeOf(orginal));

    var i, keys = Object.getOwnPropertyNames(orginal);
    for (i=0; i<keys.length; i++) {
        Object.defineProperty(clone, keys[i],
            Object.getOwnPropertyDescriptor(orginal, keys[i])
        )
    }
    return clone;
}

var obj = {fname: "john", lname: "doe"};
console.log(Object.getOwnPropertyDescriptor(obj, 'fname'));