//Dates -  it is obj

let myDate = new Date()
console.log(myDate);//2025-12-28T18:59:56.406Z
console.log(myDate.toString());//Mon Dec 29 2025 00:27:25 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());//2025-12-28T18:59:56.406Z
console.log(myDate.toJSON());//2025-12-28T18:59:56.406Z

let myCreatedDate = new Date (2023,0,23,5,3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());//23/1/2023, 5:03:00 am

let myNewDate = new Date ("01-14-2025")


//useful for pole , quiz
let myTimeStamp = Date.now();
console.log(myTimeStamp);//1766949054850 changes acc to time
console.log(myCreatedDate);
console.log(myCreatedDate.getTime());

//convert into seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getTime());

// 2025-12-28T19:18:19.117Z
// 2025
// 12
// 1
// 1766949499117

newDate.toLocaleDateString('default',{
    weekday: "long",
    
})






