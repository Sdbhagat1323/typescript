function getsum2(num1, num2) {
    return num1 * num2;
}
//console.log(getsum2( 5,4));
// type define function 
function getsum(num1, num2) {
    return num1 + num2;
}
//console.log(getsum(1,4));
// function with conditions
var mysum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mysum('10', 5));
function getName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getName('John', 'McClane'));
// default or single name;
function getNameUpdated(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    if (firstName == undefined) {
        return lastName;
    }
    return firstName + ' ' + lastName;
}
console.log(getNameUpdated('John', 'McClane'));
//console.log(getNameUpdated('john'));
function funvoid() {
    return;
}
console.log(funvoid(2));
