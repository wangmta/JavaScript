/**
 * Created by admin on 5/10/2017.
 */
var firstname = "John";
var lastname = "Doe";
var person = {
    firstname: firstname,
    lastname: lastname
};
function createPerson(firstname, lastname, age) {
    var fullname = firstname + "" + lastname;
    return {
        firstname: firstname,
        lastname: lastname,
        fullname: fullname,
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPerson('Ross', 'Lander', 32);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
//# sourceMappingURL=objLiteral.js.map