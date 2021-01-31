// classes in TypeScript.
console.log('Classes in Typescript..')

// class user
class User{
    name: string;
    email: string;
    age: number;
    // This is call initilizers... 
    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: '+ this.name)

    }
}

// create usser object;

let john = new User('John McClane', 'McClane@gmail.com', 45);


// class property;
console.log('New class created here..')
class Employee{
    public name: string;
    public email: string;
    private salary: number;
    protected company: string;


    constructor(name: string, email: string, salary: number, company:string){
        this.name = name;
        this.email = email;
        this.salary = salary;
        this.company = company;

        console.log('Emaployee created: '+ this.name);

    }

    register(){
        console.log("this is register method in class.." + this.name);
    }
}

let die = new Employee('John McClane', 'John@gmail.com', 4000.70, 'TCS');

console.log(die.name);
console.log(die.email);
console.log(die.salary);
console.log(die.company);


// This is Inheritance in class:
console.log('****************************************************')

class Newuser{
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
        
        console.log("New user Creted:"+ this.name);
    }
    register(){
        console.log(this.name+ 'is now register');
    }
    payInvoice(){
        console.log(this.name + ' paid invoice');
    }

}

class Member extends Newuser{
    id: number;

    constructor(id: number,name: string, email: string, age: number ){
        super(name, email, age);
        this.id = id;

    }
    payInvoice(){
        super.payInvoice()
    }

}


let swapnil = new Newuser('swapnil', 'swapnil@gmail.com', 26);

swapnil.register()

let tushar: Newuser = new Member(1, 'tushar', 'tushar.gmail.com', 34);
tushar.register();
tushar.payInvoice();
