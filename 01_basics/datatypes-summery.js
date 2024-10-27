// Primitive  [Call by value]

// 7 types : String , Number, Boolean, Null, Undefined, symbol, BigInt

const score = 100
const scoreValue = 100.23

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 482759587247957957987529875932n


// Reference (Non primitive)

// Arrays, Objects, Functions.

const heros = ["laxman", "Somanna", "Dakshu", "Avi"]

let myObj = {                     //Object created using variables
    name: "Pratheek",
    age: 23,
}

const myFunction = function (){
    console.log("Hello World");
}

console.log(typeof myFunction);


// ################################################################################################

// Stack(Primitive) and Heap(Non-primitive)

let myName = "Pratheek"

let anotherName = myName
anotherName = "Shetty"

console.log(myName);
console.log(anotherName);

// heap (reference)- Non- primitive

let userOne = {
    email: "Shetty@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Pratheekrai@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);







