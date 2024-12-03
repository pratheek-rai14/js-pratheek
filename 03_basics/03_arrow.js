const user = {
    username : "pratheek",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this); 
        
    }
}
// user.welcomeMessage()
// user.username = "Soma"
// user.welcomeMessage()

// console.log(this);


// function tea() {                        //Can't Work this inside the function
//     let username = "pratheek"
//     console.log(this.username);
// }
// tea()

// const tea = function() {
//     let username = "pratheek"
//     console.log(this.username);
// }

// tea()

const tea = () => {                         // Creating a arrow function 
    let username = "pratheek"
    console.log(this);
}

// tea()

// const addTwo = (num1, num2) => {          // Basic arrow function 
//     return num1 + num2 
// }

// const addTwo = (num1, num2) => num1 + num2          // Implicit return  

// const addTwo = (num1, num2) => (num1 + num2)         //usefull in react

const addTwo = (num1, num2) => ({username:"pratheek"})

console.log(addTwo(3,7))
