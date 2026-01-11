let score = 33
//for backend user score what?? number or string
console.log(typeof(score));
let z = "33"
console.log(typeof z);


let c = Number(z);
console.log(typeof(c))
console.log(c);

console.log("ahat if 33abc");

let a = "33abs"
let rt = Number(a);
console.log(typeof(rt))
console.log(rt);

//here "33"=> 33
//but "33abc"=> NaN (not a number)
//true=> 1; false => 0

let isLoggedIn = 1
let bool = Boolean(isLoggedIn)
console.log(bool)
//1=>true ; 0 => false
//tushar => true
//""=> false
//same for string


//Operations

//negative value
let value = 3
let negVal = - value
console.log(negVal);
//basic
console.log(2+2-3+14*2)


//add string
let str1 = "hellow "
let str2 = "tushar "
let str3 = str1 + str2
console.log(str3);

console.log("1"+34) //ans = 134
console.log(1+"2") //ans = 12
console.log(1+2+3) //ans = 6
console.log(1+2+"5") //ans = 35

//in console.log there is same data types is necessary for calculation it depends on first i/p

//triky conversion
console.log(+true); // ans => 1
console.log(+""); // ans => 0

let num1,num2,num3
num1 = num2 = num3 = 2 + 3      //useless

//prefex and postfix
let x = 3
console.log(x++); //ans => 3 and x = 3+1 = 4
console.log(++x); //ans => 5 and x= 5









 