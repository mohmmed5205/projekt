

//Write a function that receives two arguments to calculate the exponentiation.
function power(bas,exponet){
    return bas**exponet;
}
console.log(power(5,2));


//Write function receives an array of numbers and returns unique numbers in an array  ex: [1,2,3,3,2,5] => [1,2,3,5]


function unqArray(arr) {
    return [...new Set(arr)]
}
console.log(unqArray([1,1,2,2,3,4,5,5]));

//Given two arrays, provide the union of the arrays without duplicating any values. ex: [1,2,3] , [3,2,5] ⇒ [1,2,3,5]

function uniArray(arr1,arr2) {
    return[...new Set([...arr1,...arr2])];
}
console.log(uniArray([1,2,3,],[2,3,4]));

//Write a function that generates a new array with a specified length of number passed as an argument. generateArray(5) ⇒ [0,0,0,0,0]

function genArray(length) {
    let arr3 =[];
   for (let i = 0; i <length; i++) { 
    arr3.push(0)
   }
  return arr3;
}
console.log(genArray(4));


//Write function convert object keys to an array of object ex: {a:1, b:2, c:3} => [{a:1},{b:2},{c:3}]

function objToArr(obj){
    return Object.keys(obj). map(key =>({[key]:obj[key] }) )
}

console.log(objToArr({a:1,b:2,c:3}));

//Write function reflects the message ex: Welcome => emocleW

function revTex(tex){
    return tex.split("").reverse().join("");

}
console.log(revTex("mohmmed"));

//Write function returns the number of times a character is repeated in a message. character is dynamic, ignore case sensitive                                                 ex: message=> 'Welcome'       user enter  e|E       result is => e:2 

function conChar(text,char){
    const regex = new RegExp (char,"gi");
    const matches = text.match(regex);
    return matches ?matches.length:0;
}
console.log(conChar("mohmmed","m"));

//given an array of objects, return new array with a unique colors                                                    const data = [{a: 'happy', b: 'robin', colors: ['blue','green']},{a: 'tired', b: 'panther', colors: ['green','black','orange','blue']},{a: 'sad', b: 'goldfish', colors: ['green','red']}]; output: ['blue', 'green', 'black', 'orange', 'red']

const data = [
  {a: 'happy', b: 'robin', colors: ['blue','green']},
  {a: 'tired', b: 'panther', colors: ['green','black','orange','blue']},
  {a: 'sad', b: 'goldfish', colors: ['green','red']}
];

function uniqueColors(data) {
  return [...new Set(data.flatMap(item => item.colors))];
}

console.log(uniqueColors(data));

//Write a function that counts the number of arrays inside a given array.                 ex1: ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2                                            ex2: ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3

function countArrays(arr) {
  let count = 0;
  arr.forEach(el => {
    if (Array.isArray(el)) count++;
  });
  return count;
}

console.log(countArrays([2,8,[6],3,3,5,3,4,[5,4]])); // 2
console.log(countArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]])); 

