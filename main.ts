// DATA TYPES IN TYPE SCRIPT //


let mystring:string;
let mynum: number;
let mybool: boolean;
let myvar: any;
let strarr: string[];
let numarr: number[];
let boolarr: boolean[];





mystring= 'hello world';
mynum = 45;
mybool = true; 


mystring = 'hello there..';
console.log(mystring);
console.log(mynum);
console.log(mybool);

mystring = 'hello'+ ' ' + 'world';
mynum = 2+2;

console.log(mystring);
console.log(mynum);
// funtion return//

mystring = 'there is something'.slice(0, 3);
console.log(mystring);

//any var  data type//

myvar = 5
console.log(myvar);

myvar = 'ten';
console.log(myvar);


// array in typescript//
console.log("here some arrays in typescript...")
strarr = ['hello', 'world', '1']
console.log(strarr)

numarr= [1,2,30];
console.log(numarr);

boolarr = [true, false, true];
console.log(boolarr);
// other  ways to define array;
let strarr1: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;
// exact array//

strarr= ["str", 'hello'];
numArr = [1,2,3];
boolarr = [true, false, true];
console.log(strarr);
console.log(numArr);
console.log(boolarr);

let strNum: [string, number];
strNum=['string', 4];
console.log(strNum);

// Void data type//

let myvoid: void = undefined;
console.log(myvoid);
let mynull1: void = null; 
console.log(mynull1);


// special data type //
let myvoid2 : void = undefined;
let myNull2: null = null;
let myundefined2: undefined = undefined;
console.log(myvoid2);
console.log(myNull2);
console.log(myundefined2);


