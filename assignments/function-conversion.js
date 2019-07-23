// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction =  () => {
console.log("Function was invoked!");
};

myFunction();


// 1

let anotherFunction = (param) => param;

console.log(anotherFunction("Example"));
// 2

let add = (param1, param2) => param1 + param2;

console.log(add(1,2));
// 3

let subtract = (param1, param2) => param1 - param2; 

console.log(subtract(1,2));


// Stretch

exampleArray = [1,2,3,4];
const triple = exampleArray.map( (num) => num * 3);

console.log(triple);