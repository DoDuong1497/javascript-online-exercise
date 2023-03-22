// 1. Write function to check if number is even, fn(2) -> true, fn(3) -> false
function isNumEven(num) {
  if (typeof num !== 'number') return 'Không phải là số';
  return num % 2 === 0 ? true : false;
}

console.log(isNumEven(3));

// 2. Write function to convert string to prefix string, example: fn('i love to learn javascript', '_') -> i_love_to_learn_javascript
function prefixStr(str, prefix) {
  if (typeof str !== 'string') return 'Không phải là chuỗi';
  return str.split(' ').join(prefix);
}

console.log(prefixStr('i love to learn javascript', '_'));

// 3. Write function to calculate age, example: fn(1994) -> 29
function calculateAge(year) {
  if (typeof year !== 'number') return 'Không phải là số';
  let presentYear = 2023;
  return presentYear - year;
}

console.log(calculateAge(1997));

// 4. Write any function using closure
let outer = () => {
  let a = 'A local variable';
  let inner = function () {
    console.log(a);
  };
  return inner;
};
const returnedFnc = outer();
returnedFnc();

// 5. Write function sum of three numbers, fn(a,b,c)
function sum(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
    return 'Không phải là số';
  return a + b + c;
}

console.log(sum(1, 2, 3));

// 6. Write function to get random number from 0 to 1000, example: fn() -> 321
function random(maxNum) {
  if (typeof maxNum !== 'number') return 'Không phải là số';
  return Math.floor(Math.random() * maxNum);
}

console.log(random(1000));

// 7. Write function to truncate a string, example: fn(str, limit, prefix) -> fn('evondev', 2, '...') -> ev...
function truncate(str, limit, prefix) {
  if (typeof str !== 'string') return 'Không phải là chuỗi';

  return str.slice(0, limit) + prefix;
}

console.log(truncate('evondev', 4, '...'));

// 8. Write function return typeof value, fn('evondev') -> string
function isTypeValue(value) {
  return typeof value;
}

console.log(isTypeValue('demo'));

// 9. Write function to check if str includes word, fn("evondev", vonz) -> false
function checkStr(str, strCheck) {
  if (typeof str !== 'string') return 'Không phải là chuỗi';

  return str.includes(strCheck);
}

console.log(checkStr('evondev', 'vonz'));
