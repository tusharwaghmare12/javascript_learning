// datatypes
//1. premitive - call by value
// there are 7 types :- string , number , boolean , null, undefined , symbol ,BigInt

const score = 33
const scoreValue = 100.3
const isLoggedIn = false
let userEmail; // manually undefined is decleared

const Id = Symbol("123")
const anotherId = Symbol("123")
console.log(Id === anotherId); //false

const big = 13145345435345343n
console.log(typeof big); //bigint


//2.Non premitive ( reference ) :- Array , functions , object  +++=++typeof - object


//array
const hero = ["tushar" , "raj" ,"neel","harsh"];

//object 
let myObj = {
    name: "tushar",
    age: 22,
}

//function

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);

//++++++++++++++++++++++memory++++++++++++++++++++++

//stack (premitive),Heap (non-premitive)
let myYoutubename = "tusharWaghmare"
let  anotherName = myYoutubename;
console.log(anotherName); //tusharWaghmare
anotherName = "chai aur code"
console.log(anotherName);

//heap
let userOne = {
    email: "userOne@gmail.com",
    upi: "user@ybl"
}
console.log(userOne.email);//userOne@gmail.com

let userTwo = userOne  //here all asccess is given to the user two
userTwo.email = "userTwo@gmail.com"//changed in original memory
console.log(userOne.email);//usertwo@gmail.com
//above original is changed


