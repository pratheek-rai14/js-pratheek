const accountId = "1401"
let accountEmail = "pratheekrai@gmail.com"
var accountPassword = "11223344"
accountCity = "Bengaluru"
let accountState;

// accountId = "2" // Not allowed

accountEmail = "hc@hc.com"
accountPassword = "09987"
accountCity = "Mangaluru"

console.log(accountId);

/*
prefer not to use var because of issue in block scope and fucntional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


