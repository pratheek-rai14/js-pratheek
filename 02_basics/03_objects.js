// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Pratheek",
    "Full Name": "Pratheek Rai",
    [mySym]: "myKey1",
    age: 23,
    Location: "Bengaluru",
    Email: "pratheekrai14@gmail.com",
    iSLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.Email);   //Always use this .(dot)method.
// console.log(JsUser["Email"]);
// console.log(typeof JsUser["age"]);
// console.log(typeof JsUser["Full Name"]);
// console.log(typeof JsUser[mySym]);


JsUser.Email = "pratheekrai@google.com"  //Changing the email 
// Object.freeze(JsUser) //to Lock the email or freeze the email
JsUser.Email = "pratheekrai@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


