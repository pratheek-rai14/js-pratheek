let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30

    // console.log("Inner:", (a));
    
}

// console.log("Outer:", (a));
// console.log(b);
// console.log(c);


function one() {
    const username = "Pratheek"

        function two() {
            const website = "Youtube"
            console.log(username);
        }
        // console.log(website);
        two()
}
// one()


if (true) {
    const username = "Pratheek"
    
    if (username === "Pratheek") {
        const website = " Youtube"
        // console.log(username + website);
    }
}
// console.log(username);  //Outside the function 



// *********************** Interesting Example *****************************

console.log(addone(5))

function addone(num) {
    return num + 1
}

addtwo(5)                           //It cannot access before the initialization of the variable
const addtwo = function(num){
    return num + 2
}
