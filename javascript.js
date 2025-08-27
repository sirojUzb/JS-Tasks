// Conditional operations
// Conditional operations return boolean.
var age1 = 18;
var age2 = "18";

console.log(age1 == age2);
// true
console.log(age1 === age2);
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
// switch/case
