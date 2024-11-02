const myArr = [1,2,3,4,5,6]
const myHeros = ["SuperMan","ChaddiMan", "BatMan"]

const myArr2 = new Array(1,3,4,5,6)
// console.log(myHeros);
// console.log(myArr2[1]);

// Array Methods......

// console.log(myArr.push(6));
// console.log(myArr.pop);

// myArr.unshift(8);
// myArr.shift();

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(10));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof myArr);

// console.log(newArr);
// console.log(typeof newArr);


// Slice , Splice .....

console.log("A", myArr);

const myn1 = myArr.slice(1,4)  //Range is not included
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,4)  //Range is included
console.log("C", myArr);
console.log(myn2);



















