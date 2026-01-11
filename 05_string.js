const name = "tushar"
const repocount = 50
console.log(name + repocount)
console.log(`here name is ${name} and  repocount is ${repocount}`)//best way

const gamename = new String (`tusharWaghmare`)

console.log(gamename.toLocaleUpperCase());
console.log(gamename.indexOf('h'));
console.log(gamename.charAt(2));
console.log(gamename.length);
console.log(gamename.substring(0,4));//[0,4)


//to remove unwanted space
const st = "     tushar    "
console.log(st);
console.log(st.trim());
//for another features use chatgpt or mdm

//changes in string
const url = "http://tusharwaghmare12//tishar%20waghmare.com"
console.log(url);

console.log(url.replace('%20','-'));
console.log(url.replace('tishar','tushar'));

const tush = "tushar-waghmare uday-waghmare gorakh-waghmare"
console.log(tush);
console.log(tush.split(' '))



