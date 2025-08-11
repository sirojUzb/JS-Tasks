// const name = "Siroj";

// let age = 34;

// age = 34;

// console.log(`Hi, my name is ${name} and I am ${age} years old`);
// // Number
// // sum of two munbers
// const a = 10;
// const b = 5;

// console.log(`The sum is ${a + b}`);

// // 2. Subtract to Find the Difference
// const x = 20;
// const y = 7;

// console.log(`The differance is ${x - y}`);

// // 3. Multiply to Get the Area
// const length = 8;
// const width = 3;
// console.log(`The area is ${length * width}`);

// // 4. Divide to Get Average
// let num1 = 70;
// let num2 = 80;
// let num3 = 90;

// function averegeNum() {
//   console.log(`averegeNum ${(num1 + num2 + num3) / 3}`);
//   return;
// }
// averegeNum();

// // 5.Find the Remainder
// let i = 17;

// console.log((i %= 5));
// // 2
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder_assignment

// // STRING

// const FirstName = "John";
// const SecondName = "Joe";

// console.log(`FullName: ${FirstName} ${SecondName}`);

// // 3.Make it Uppercase
// let language = "javascript";

// console.log(`language = ${language.toUpperCase()}`);

// //

// let sentence = "I love python";
// let upSentence = sentence.replace("python", "javascript");
// console.log(upSentence);
// //

// let is_even = function is_even(number) {
//   return number % 2 === 0;
// };

// console.log(is_even(4));

// // FUNCTION
// // 1.
// const greetUser = (name) => {
//   console.log(`Hello ${name}`);
// };

// greetUser("Siroj");

// // 2.
// const addNumber = (c, d) => {
//   return c + d;
// };
// console.log(addNumber(10, 20));

// //3. Check if a Number is Even

// function isEven(n) {
//   const solishtiruv = n % 2 == 0;

//   return solishtiruv ? "Even" : "Odd";
// }
// let n = 101;
// console.log(isEven(n));

// // 4.
// // darajani top
// function square(num) {
//   // return Math.pow(num, 2);
//   // return Math.pow(x,y)
//   return num ** 2;
// }
// console.log(square(3)); // Output: 9

// // 5.
// //
// function celsiusToFahrenheit(c) {
//   return (c * 9) / 5 + 32;
// }

// const c = 10;

// console.log(celsiusToFahrenheit(c));

//                                    IF/ SWITCH / TERNARY
// 1. Check if a number is positive,negativeor zero
const num = 10;

if (num > 0) {
  console.log("positive");
} else if (num < 0) {
  console.log("negative");
} else {
  console.log("zero");
}
// 2. Grade checker
var grade = "G";
switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("Fair effort.");
    break;
  case "D":
    console.log("Needs improvement.");
    break;
  case "F":
    console.log("Failed.");
    break;
  default:
    console.log("Invalid grade.");
}

// 3. Check even or odd
const checkEvenOdd = (num) => (num % 2 === 0 ? "even" : "odd");
console.log(checkEvenOdd(3)); // Output: 'odd'
console.log(checkEvenOdd(8)); // Output: 'even'

// 4. Age category checker

const categorizeAge = (age) => {
  if (age < 13) {
    console.log("child");
  } else if (age >= 13 && age <= 19) {
    console.log("teen");
  } else {
    console.log("adult");
  }
};
categorizeAge(10);
// categorizeAge(15);
// categorizeAge(20);

// 5. Light switch(ternary)

const isLightOn = true;
const info = isLightOn ? "light is on" : "light is off";
console.log(info);
//                                    LOOP
// 1. Print Numbers 1 to 10 (using for)

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 2.Sum of first N number
const calcF = (n) => {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += i;
  }

  console.log(sum);
};

calcF(10);
// 0 dan 10 gacha bolgan sonlarni bir-biriga qoshish orqali qiymat chariladi(10qoshilmaydi);
// 1+2+3+4+5+6+7+8+9=45

// 3.
let count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}
//4.

// switch (new Date().getDay()) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid number");
// }

// LOOP darsi uchun misollar

//inline checking - 1ta qatorda tekshirib olish

// var age = 16;

// console.log(age >= 16 ? "you may enter the web site" : "you are not allowed");

// start point, end point, count
// for (let i = 1; i <= 15; i += 2) {
//   console.log(i);
// }
// //

// var lengthMustBeEqualTo5 = "";

// while (lengthMustBeEqualTo5.length <= 5) {
//   console.log(lengthMustBeEqualTo5);
//   lengthMustBeEqualTo5 += "a";
// }

// console.log(lengthMustBeEqualTo5.length);

// start point
// let i = 1;

// while (i <= 15) {
//   console.log(i);
//   i++;
// }
//restart JS
