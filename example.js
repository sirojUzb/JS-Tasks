//1. yig'indini topish
// var numbers = [1, 2, 3, 4, 5, 6];

const { current } = require("@reduxjs/toolkit");

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);
// 2-yol for(indeksini qaytarib beradi)
// var numbers = [1, 2, 3, 4, 5, 6, 7];

// let prev = 0;

// for (let i = 0; i < numbers.length; i++) {
//   prev = prev + numbers[i];
// }

// console.log(prev);
// 3-yol forOf(ma'lumotlarni qaytarib beradi)
// var numbers = [1, 2, 3, 4, 5, 6];

// let eskiQiymat = 0;

// for (const element of numbers) {
//   eskiQiymat = eskiQiymat + element;
// }
// console.log(eskiQiymat);
// for bilan forOfni farqi:
// forOf(ma'lumotlarni qaytarib beradi)
// for(indeksini qaytarib beradi)

//2. largest number
// var numbers = [1, 2, 3, 4, 5, 6];

// console.log(Math.max(...numbers));
//3. Juft son
// var numbers = [1, 2, 3, 4, 5, 6];

// console.log(
//   numbers.filter((value) => {
//     return value % 2 == 0;
//   }),
// );
//4. sozlarni uzunligini topish
// const meva = ["olma", "banan", "nok"];
// const uzunlik = meva.map((qiymat) => {
//   return qiymat.length;
// });
// console.log(uzunlik);

// 5.
// function introduction

// stringda eng oxirgi harfini topish
// var a = "aajakajkajkajakaaks";

// console.log(a[a.length - 1]); // "s"
// 1
// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }
// 2
// for (var o = 0; o <= 20; o += 2) {
//   console.log(o);
// }
//3
// let fruits = ["olma", "banan", "anor", "uzum"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// 4
// let numbers = [5, 12, 3, 21, 9];
// let largest = Math.max(...numbers);
// console.log(largest);

// 5?
//6

// function checkEvenOdd(num) {
//   if (num % 2 == 0) {
//     console.log("juft son");
//   } else {
//     console.log("toq son");
//   }
// }
// checkEvenOdd(53);

// callBack Authorization example
// Promise
// Project with Promise https://api.sampleapis.com/coffee/hot
// async await

//asynchronous vs synchronous(ketma-ket)
// "sync" ga misol
// console.log("Hello from Siroj");

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// console.log("For loop ended");

// setTimeout(() => {
//   console.log("after 3 second");
// }, 3000);

// callBack auth

// function loginToFacebook(password, email, callback) {
//   console.log("Sending request to backend ...");
//   setTimeout(() => {
//     if (password === "siroj12345" && email === "blabla@gmail.com") {
//       return callback("you logged in to your profile");
//     } else {
//       return callback(
//         "Oops, something is wrong. Your password or login is wrong!",
//       );
//     }
//   }, 3000);
// }
// loginToFacebook("siroj12345", "blabla@gmail.com", (data) => {
//   console.log(data);
// });
// promise.then
// promise.catch /error
// promise.finally
// Project with Promise https://api.sampleapis.com/coffee/hot

// GET - getting data
// POST - creating data
// PUT - updating data
// DELETE - deleting data
// async await

// class

// this x arrow ()=>{} ishlamaydi. lekin ishlatish yoli pastda korsatilgan.
// // functionni ichiga kiritib ishlatish m-n.
// let person = {
//   name: "John",
//   surname: "Doe",
//   age: "30",
//   currentCountry: "Japan",
//   getPasswordData: function () {
//     return () => {
//       return `
//       name => ${this.name}
//       surname => ${this.surname}
//       age => ${this.age}
//       currentCountry => ${this.currentCountry}
//     `;
//     };
//   },
// };
// console.log(person.getPasswordData()());

// CLASS
// obyektga qaratilgan
// class CreatePerson {
//   constructor(name, surname, number, currentCity) {
//     this.name = name;
//     this.surname = surname;
//     this.number = number;
//     this.currentCity = currentCity;
//   }
// }

// const person1 = new CreatePerson("John", "Doe", "123456789", "Tokyo");

// class Student extends CreatePerson {
//   constructor(name, surname, number, currentCity, originCity) {
//     super(name, surname, number, currentCity);
//     this.originCity = originCity;
//   }
//   getFullname() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const Student1 = new Student(
//   "Bek",
//   "Shukhratov",
//   "112333444",
//   "Kanazawa",
//   "Uzbekistan",
// );

// console.log(Student1.getFullname());
// revision of class

class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

const Shaxs = new Person("Siroj", "Mamatov", "35");
// JS-LESSON 9
// DOM
// Window & Document#
// * Selectors: getElementByID, getElementByClassName, getElementByTagName,
//    querySelector, querySelectorAll
// * Create Element: createElement
// * Position: appendChild(NodeElm), append,
//    insertBefore(nodeElm, beforeNode)
// * Delete: .remove()
// * Properties: .id, .className, .classList,
//    .classListadd(value), classListremove(value),
//    .classList.replace(newValue, value),
//    .classList.contains(value)
// * Events: click, dblclick, mousemove, mouseover, mouseout
// * Project: render with methods: delete, addList, fetch, data
