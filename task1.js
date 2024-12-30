// 1. write a function that takes a string as input and returns the string with the order of words reversed
// function reverseWords(str) {
//   return str.split("").reverse().join(" ");
// }

// console.log(reverseWords("Javascript is awesome"));
// DONE
//
//2. write a function that checks whether two given string are anarams(contain the same characters in different orders). ignore case adn whitespaces.
//
// function areAnagrams(str1, str2) {
//   if (str1.length === str2.length) {
//     return true;
//   }
//   return (
//     str1.toLowerCase().split(" ").sort().join("") ===
//     str2.toLowerCase().split(" ").sort().join("")
//   );
// }

// console.log(areAnagrams("Listen", "Silent")); //true
// console.log(areAnagrams("Hello", "Olelh")); //false
// do next task
// finish till next tuesday
function secondLargest(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[1];
}
//my answer
function SecondLargest(arr) {
  const largest = Math.max.apply(null, arr);
  for (let i = 0; i < arr.length; i++) {
    if (largest === arr[i]) {
      arr[i] = -Infinity;
    }
  }
  return Math.max.apply(null, arr);
}
console.log(SecondLargest([8, 5, 10, 20]));
//
function rotateArray(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.push(arr[0]);
    arr.shift();
  }
  return arr;
}
//
function findMissingNumber(arr) {
  const max = Math.max(...arr);
  for (let i = 1; i <= max; i++) {
    if (!arr.includes(i)) {
      console.log("Missing number is: ${i}");
    }
  }
}
// findMissingNumber([1, 2, 5, 6])
// will be next 2 solutions here
