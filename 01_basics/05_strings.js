const name = "Pratheek"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Pratheek-Rai-M')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('5'));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,10)
console.log(anotherString);

const newStringOne = "     Pratheek     "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https//pratheek.com//pratheek%20rai"

console.log(url.replace('%20','-'));

console.log(url.includes('pratheek'));

console.log(gameName.split('-'));






