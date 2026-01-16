const numbers = [1, 2, 3, 4];

// Destructure
const [first, second, ...rest] = numbers;

console.log(numbers);

console.log(first, second, ...rest);
