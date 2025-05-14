const name = "Siroj";

let age = 34;

age = 34;

console.log(`Hi, my name is ${name} and I am ${age} years old`);
// Number
// sum of two munbers
const a = 10;
const b = 5;

console.log(`The sum is ${a + b}`);

//subtrack of find the difference
const x = 20;
const y = 7;

console.log(`The differance is ${x - y}`);

// multiply to get the area
const length = 8;
const width = 3;
console.log(`The area is ${length * width}`);

// Function
const greetUser = (name) => {
  console.log(`Hello ${name}`);
};

greetUser("Siroj");

const addNumber = (c, d) => {
  return c + d;
};
console.log(addNumber(10, 20));

// average number
let num1 = 70;
let num2 = 80;
let num3 = 90;

function averegeNum() {
  console.log(`averegeNum ${(num1 + num2 + num3) / 3}`);
  return;
}
averegeNum();

// STRING

const FirstName = "John";
const SecondName = "Joe";

console.log(`FullName: ${FirstName} ${SecondName}`);

// 3.Make it Uppercase
let language = "javascript";

console.log(`language = ${language.toUpperCase()}`);

let sentence = "I love python";
let upSentence = sentence.replace("python", "javascript");
console.log(upSentence);

let is_even = function is_even(number) {
  return number % 2 === 0;
};

console.log(is_even(4));
// stage2: array
