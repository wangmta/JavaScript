/**
 * Created by admin on 5/14/2017.
 */
function *createGenerator(){
    yield 1;
    console.log("after 1st yield");
    yield 2;
    console.log("after 2nd yield");
}

let myGen = createGenerator();
console.log(myGen.next());
console.log(myGen.next());

let person = {
    fname: "John",
    lname: "Doe"
};

person[Symbol.iterator] = function* () {
    let props = Object.keys(person);
    for(let t of props){
        yield this[t];
    }
}

for(let p of person){
    console.log(p);
}
