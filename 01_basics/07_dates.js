// Date 

let myDate = new Date()    //Creating a date object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 1 ,23) 
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 1 ,23, 6, 30) 
// let myCreatedDate = new Date("2024-01-22") 
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()   //Creating a object
// console.log(myTimeStamp);  
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getTime());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getHours());
// console.log(newDate.getFullYear());

// console.log(`Today is ${newDate.getDay()} and the time is ${newDate.getTime()}`);


console.log(newDate.toLocaleString('default', {
    weekday: "long",
    month: "long"
}))






