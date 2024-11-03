const marval_heros = ["IronMan", "SpiderMan", "Thor"]
const dc_heros = ["BatMan" ,"SuperMan", "Flash"]

// marval_heros.push(dc_heros)
// console.log(marval_heros);
// console.log(marval_heros[3] [2]);

// const allHeros = marval_heros.concat(dc_heros)  // creating a new variable
// console.log(allHeros);

// const all_new_heros = [...marval_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[2,5],4,5,6,[8,9,9,[3,5]]]
const real_array = another_array.flat(Infinity)

console.log(real_array);


console.log(Array.isArray("Pratheek"));
console.log(Array.from("Pratheek"));

console.log(Array.from({name: "Pratheek"}));  //Interesting ... interview 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

