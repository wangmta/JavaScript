/**
 * Created by admin on 5/10/2017.
 */
let firstname = "John";
let lastname = "Doe";

let person = {
    firstname,
    lastname
}

function createPerson(firstname, lastname, age){
    let fullname = firstname + "" + lastname;
    return{
        firstname,
        lastname,
        fullname,
        isSenior(){
            return age > 60;
        }
    }
}

let p = createPerson('Ross', 'Lander', 32);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());