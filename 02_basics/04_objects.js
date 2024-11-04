// Singleton or Constructor

// const tinderUser = new Object()
const tinderUser = {}   //Not a Singleton

tinderUser.id = "123abc",
tinderUser.email = "sunny@gmail.com",
tinderUser.name = "Sunny",
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    Email: "pratheekrai@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pratheek",
            lastname: "Rai"
        }
    }
}

// console.log(regularUser.Email);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {4: "a", 5: "b"}

// const obj3 = { obj1 , obj2 }
// const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}  //easy way of spredding 

// console.log(obj3);



// When values are come from database 

const user = [
    {
        id: 1,
        email: "p@gmail.com",   
    },

    {
    id: 2,
    email: "l@gmail.com",   
    },

    {
        id: 3,
        email: "s@gmail.com",   
        },
]

// user[1].email
console.log(user[2].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));









