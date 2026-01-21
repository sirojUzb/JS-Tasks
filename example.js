//1. yig'indini topish
var numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

//3. Juft son
var numbers = [1, 2, 3, 4, 5, 6];

console.log(
  numbers.filter((value) => {
    return value % 2 == 0;
  }),
);
//4. sozlarni uzunligini topish
const meva = ["olma", "banan", "nok"];
const uzunlik = meva.map((qiymat) => {
  return qiymat.length;
});
console.log(uzunlik);

// 5.
