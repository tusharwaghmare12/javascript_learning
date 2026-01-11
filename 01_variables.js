const accountId = 1233
let accountEmail = "user@gmail.com"
var accountPassword = "123user"
accountCity = "jaipur"
let accountState ;

/* prefer not to use var
beecause of issue in block scope and funtional scope
*/


// accountId = 231 //not allowed

accountEmail = "tushar@gamil.com"
accountPassword = "tushar123"
accountCity = "dharashiv"
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);



