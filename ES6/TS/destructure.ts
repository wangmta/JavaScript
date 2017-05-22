/**
 * Created by admin on 5/10/2017.
 */

// let employee = ['john', 'doe', 'male'];
// let employee = ['john', 'doe'];
// let [fname, lname, gender] = employee;

// let [fname, ...elements] = employee;
// console.log(fname);
// console.log(elements);
// employee = ['jane','doe','female'];

// let [fname, lname, gender = 'default'] = employee;
// console.log(gender);

let emp = {
    fname: "Jame",
    lname: "Doe",
    gender: "Male"
};

// let {fname, lname, gender} = emp;
let {fname: f, lname: l, gender: g} = emp;

console.log(f);
console.log(l);
console.log(g);