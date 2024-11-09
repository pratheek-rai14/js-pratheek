function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("E");
    console.log("E");
    console.log("K"); 
}
 
// sayMyName()  //basics 

// function addTwo(num1, num2) {

//     console.log(num1  * num2);
// }

function addTwo(num1, num2) {
    
    // let result = num1 + num2
    // return result
    return num1 + num2
}

// addTwo(3,6)

const result = addTwo(3,6)
// console.log("Result:", result);



function loginUserMessage(Username = "Sam") {      //Adding default value to the username
    if (!Username) {                               // If the value is false... then not entering the if statename, ... if the value is true then entering the if statement and checking the values.
        console.log("Please Enter a username");
        return
    }
    return `${Username} just logged in`
}

// console.log(loginUserMessage("Pratheek"));
// console.log(loginUserMessage("Pratheek"));



function calculateCartPrize(...number1){
    return number1
}
// console.log(calculateCartPrize(200, 400, 600));


const user = {
    username: "Pratheek",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);   
}
// console.log(handleObject(user));
console.log(handleObject({
    username: "Sam",
    price: 399
}));

const myNewArray = [200, 300, 500]

function returnSecondValue(getArray) {
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 400, 300, 1000]));



