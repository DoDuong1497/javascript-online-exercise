// NUMBER-01: Kiểm tra số tăng dần
// Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
// 0 < n < 1000000
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Trả về true nếu là số tăng dần, ngược lại trả về false.

function isIncreasingNumber(n) {
  if (n < 0 || (n > 1000000 && n > 10)) return false;

  let newStr = n.toString();

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] < newStr[i - 1]) return false;
  }

  return true;
}

// console.log(isIncreasingNumber(123));
// console.log(isIncreasingNumber(12321));
// console.log(isIncreasingNumber(11));

// NUMBER-02: Kiểm tra số giảm dần
// Viết hàm isDecreasingNumber(n) để kiểm tra n có phải là số giảm dần hay không?
// 0 < n < 1000000
// Số giảm dần có ít nhất 2 chữ số
// Chữ số bên phải luôn nhỏ hơn chữ số bên trái
// Trả về true nếu là số giảm dần, ngược lại trả về false.

function isDecreasingNumber(n) {
  if (n < 0 || (n > 1000000 && n > 10)) return false;

  let newStr = n.toString();

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] > newStr[i - 1]) return false;
  }

  return true;
}

// console.log(isDecreasingNumber(321));
// console.log(isDecreasingNumber(12321));

// NUMBER-03: Kiểm tra số tăng dần đều theo khoảng cách cho trước
// Viết hàm isIncreasingNumberByDistance(n, x) để kiểm tra n có phải là số tăng dần đều với khoảng cách
// giữa 2 chữ số là x không?
// 0 < n < 1000000, 0 < x < 5
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Khoảng cách của 2 chữ số liền kề là x
// Trả về true nếu là số tăng dần đều theo khoảng cách x, ngược lại trả về false.

// function isIncreasingNumberByDistance(n, x) {
//   if (n < 0 || (n > 1000000 && n > 10)) return false;

//   let newStr = n.toString();

//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] <= newStr[i - 1] && newStr[i] - newStr[i - 1] !== x) {
//       return false;
//     }
//   }

//   return true;
// }

function isIncreasingNumberByDistance(n, x) {
  n = n.toString().split('').map(Number); // Chuyển n thành mảng các số

  return n.every((num, i) => i === 0 || num - n[i - 1] === x);
}

console.log(isIncreasingNumberByDistance(11, 1));
console.log(isIncreasingNumberByDistance(123, 1));
console.log(isIncreasingNumberByDistance(135, 2));
console.log(isIncreasingNumberByDistance(147, 3));
