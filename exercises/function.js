// 1. Write function to check if number is even, fn(2) -> true, fn(3) -> false
function isNumEven(num) {
  if (typeof num !== "number") return "Không phải là số";
  return num % 2 === 0 ? true : false;
}

console.log(isNumEven(3));

// 2. Write function to convert string to prefix string, example: fn('i love to learn javascript', '_') -> i_love_to_learn_javascript


// 3. Write function to calculate age, example: fn(1994) -> 29
// 4. Write any function using closure
// 5. Write function sum of three numbers, fn(a,b,c)
// 6. Write function to get random number from 0 to 1000, example: fn() -> 321
// 7. Write function to truncate a string, example: fn(str, limit, prefix) -> fn('evondev', 2, '...') -> ev...
// 8. Write function return typeof value, fn('evondev') -> string
// 9. Write function to check if str includes word, fn("evondev", vonz) -> false