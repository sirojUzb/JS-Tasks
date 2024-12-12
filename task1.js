// write a function that takes a string as input and returns the string with the order of words reversed
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("Javascript is awesome"));
