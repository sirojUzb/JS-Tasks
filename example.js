//1. yig'indini topish
// var numbers = [1, 2, 3, 4, 5, 6];

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
var numbers = [1, 2, 3, 4, 5, 6];

let eskiQiymat = 0;

for (const element of numbers) {
  eskiQiymat = eskiQiymat + element;
}
console.log(eskiQiymat);
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
