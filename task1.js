// 1. write a function that takes a string as input and returns the string with the order of words reversed
function reverseWords(str) {
  return str.split("").reverse().join(" ");
}

console.log(reverseWords("Javascript is awesome"));
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
