var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// classes in TypeScript.
console.log('Classes in Typescript..');
// class user
var User = /** @class */ (function () {
    // This is call initilizers... 
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created: ' + this.name);
    }
    return User;
}());
// create usser object;
var john = new User('John McClane', 'McClane@gmail.com', 45);
// class property;
console.log('New class created here..');
var Employee = /** @class */ (function () {
    function Employee(name, email, salary, company) {
        this.name = name;
        this.email = email;
        this.salary = salary;
        this.company = company;
        console.log('Emaployee created: ' + this.name);
    }
    Employee.prototype.register = function () {
        console.log("this is register method in class.." + this.name);
    };
    return Employee;
}());
var die = new Employee('John McClane', 'John@gmail.com', 4000.70, 'TCS');
console.log(die.name);
console.log(die.email);
console.log(die.salary);
console.log(die.company);
// This is Inheritance in class:
console.log('****************************************************');
var Newuser = /** @class */ (function () {
    function Newuser(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("New user Creted:" + this.name);
    }
    Newuser.prototype.register = function () {
        console.log(this.name + 'is now register');
    };
    Newuser.prototype.payInvoice = function () {
        console.log(this.name + ' paid invoice');
    };
    return Newuser;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(Newuser));
var swapnil = new Newuser('swapnil', 'swapnil@gmail.com', 26);
swapnil.register();
var tushar = new Member(1, 'tushar', 'tushar.gmail.com', 34);
tushar.register();
tushar.payInvoice();
