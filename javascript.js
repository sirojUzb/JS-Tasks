// Conditional operations
// Conditional operations return boolean.
// var age1 = 18;
// var age2 = "18";

// console.log(age1 == age2);
// true
// console.log(age1 === age2);
// false

// == / === - more strict-"data type" bilan tekshiradi.

// > - katta < - kichik

// && - and(va) operator
true && false - false;
false && true - false;
false && false - false;
true && true - true;

// || - or(yoki) operator
true || false - true;
false || true - true;
true || true - true;
false || false - false;

// Binary --> 0 va 1
var age = 25;

if (age >= 18 && age <= 19) {
  console.log("you might enter to the club");
} else if (age >= 20 && age <= 30) {
  console.log("you can enroll to the premium account for free!");
} else {
  console.log("you are not allowed!");
}
//function
// Loop
// Biror narsani qayta-qayta bajarilishiga aytiladi. Quyoshni chiqib-botishi bunga misol boladi. "Loop"ni 5ta turi bor:
// 1. for loop; 2. while loop; 3. do while loop; 4. for off; 5. for in.
// for loop
// Js Functions are used to perform  operations.We can call functions many times to reuse the code.
// Javascript objects
// conditional operations
// revision
// Math methods:
console.log(Math.abs(-10, "Math.abs"));
console.log(Math.floor(10.2), "Math.floor");
console.log(Math.ceil(10.2), "Math.ceil");
console.log(Math.round(12.5, "Math.round"));
console.log(Math.max(5, 10, 7), "Math.max");
console.log(Math.min(4, 6, 1), "Math.min");
console.log(Math.pow(3, 4), "Math.pow");
console.log(Math.sqrt(25), "Math.sqrt");
console.log(Math.random(), "Math.random");

// Conditional operations
//&&/|| --> and/or
//
// String methods:
// searchingMethods:
// 1.indexOf
// 2.lastIndexOf
// 3.search
// 4.includes
// cuttingMethods:
// 1.slice
// 2.substr
// 3.substring
// replace
// replaceAll
// split(string => array)
// repeat()
// startsWith
// endsWith
// toLowerCase
// toUpperCase
// trim
//
// Condition
// example
// if/else
// LOOP
// startpoint, endpoint, count
// for (i = 1; i < 10; i += 2) {
//   console.log(i);
// }
// var isActive = true;
// console.log(isActive ? "Active" : "Inactive");
// OBJECT
// In JS, an object is collection of properties, which are key-value pairs. It's composite and mutable data type that allows you to store related information together.
let john = {
  name: "John",
  surname: "Smith",
  age: 36,
  city: "New York",
};

// Accessing object with dot and []
// 2 va undan ortiq soz bolsa, [""] ishlatiladi.
console.log(john.age);
console.log(john["city"]);

Object.freeze(john);
// Create
john["full name"] = `${john.name} ${john.surname}`;
console.log(john);
// Update
john.age = 37;
console.log(john);
// Delete
delete john.city;

// keys, values
console.log(Object.keys(john));
console.log(Object.values(john));
console.log(Object.entries(john));

var entries = Object.entries(john);

for (let i = 0; i < entries.length; i++) {
  console.log(entries[i]);
}
// for security, there are Object.freeze and Object.seal
// in freeze you cannot create, update and delete. freeze is stronger than seal
// in seal, it allows only the modification(updating)
// object revision

// ARRAY
// ArrayIntroduction. An array in JS is a data strcture used to store multiple values in a single variable. Each value in  the array is called an element, and each element is accessed by its index.
// Array ham object kabi bitta ozgaruvcida kopgina malumotlarni saqlash uchun ishlatiladi.
// Array-index boylab saqlaydi, object-key boylab saqlaydi.
// Creating an array of strings
let fruits = ["banana", "peach", "orange", "kiwi"];

// Accessing elements in the array
console.log(fruits[3]); // Output: kiwi
// Adding elements to the array
fruits.push("apricot");
// Modifying elements in the array
fruits[1] = "pear";
console.log(fruits); // Output: [ 'banana', 'pear', 'orange', 'kiwi', 'apricot' ]
// Removing elements from the array
fruits.pop();
console.log(fruits); // [ 'banana', 'pear', 'orange', 'kiwi' ]
// ARRAY BASICS
// dimentional array = nested array