// 1. Convert string to dash string
const str = 'I love to learn Javascript';
// expected: "i-love-to-learn-javascript"
// console.log(str.toLowerCase().replaceAll(' ', '-'));
// console.log(str.toLowerCase().split(' ').join('-'));

// 2. Truncate string to 30 characters with ...
const longStr = `Write a JavaScript function to split a string and convert it into an array of words`;
// expected: Write a JavaScript function to ...
// console.log(longStr.replace(longStr.slice(30), ' ...'));

// 3.
const newStr = `javascript is awesome`;
// expected: Javascript is awesome
let uppercase = newStr.slice(0, 1).toUpperCase();
let resultNewStr = uppercase + newStr.slice(1);
// console.log(resultNewStr);

// 4.
const lastStr = 'evondev is awesome';
// expected: awesome is evondev
// console.log(lastStr.split(' ').reverse().join(' '));

// Exercise String Advande

// STRING-01: Ðếm số từ có trong câu
// Viêt hàm countWords(str) để đếm số từ có trong str.
// Ví dụ: countWords('do duong') --> 2

function countWords(str) {
  if (typeof str !== 'string') return '';

  return str.split(' ').length;
}

// console.log(countWords('do duong'));

// STRING-02: Thống kê số lượng từ trong câu
// Viết hàm statisticsWords(str) để đếm tần số xuất hiện của môi từ trong str.

function statisticsWords(str) {
  if (typeof str !== 'string') return '';

  let newObj = {};
  let newArr = str.split(' ');

  for (let i = 0; i < newArr.length; i++) {
    if (newObj[newArr[i]]) {
      newObj[newArr[i]] += 1;
    } else {
      newObj[newArr[i]] = 1;
    }
  }

  return newObj;
}

// console.log(statisticsWords('do duong do'));

// STRING-03: Thống kê ký tự có trong câu
// Viết hàm statisticsCharacters(str) để thống kê số lượng ký tự có trong câu.

function statisticsCharacters(str) {
  if (typeof str !== 'string') return '';

  let newObj = {};
  let newArr = str.split('').map((value) => {
    if (value === ' ') return 'space';
    return value;
  });

  for (let i = 0; i < newArr.length; i++) {
    if (newObj[newArr[i]]) {
      newObj[newArr[i]] += 1;
    } else {
      newObj[newArr[i]] = 1;
    }
  }

  return newObj;
}

// console.log(statisticsCharacters('aa b cc '));

// STRING-04: Ðếm số lượng email có trong câu
// Viết hàm countEmails(str) để đếm số lượng email có trong str
// Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
// Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
// Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
// phần domain nêu trên)
// Trả về số lượng email tìm thấy từ chuỗi truyền vào.

function countEmails(str) {
  if (typeof str !== 'string') return '';

  let countEmail = 0;

  let newArr = str.split(' ');

  for (let i = 0; i < newArr.length; i++) {
    let isSpecial = newArr[i].includes('@');
    let isDomain =
      newArr[i].includes('.com') ||
      newArr[i].includes('.vn') ||
      newArr[i].includes('.com.vn');
    let specialIndex = newArr[i].indexOf('@');
    let dotFirstIndex = newArr[i].indexOf('.');

    if (isSpecial && isDomain) {
      if (
        newArr[i].slice(0, specialIndex).length >= 3 &&
        newArr[i].slice(specialIndex + 1, dotFirstIndex).length >= 3
      )
        countEmail += 1;
    }
  }

  return countEmail;
}

// console.log(
//   countEmails(
//     'my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn'
//   )
// );

// console.log(countEmails('my email should be @ bla .com'));

// STRING-05: Ðếm số lượng url có trong câu
// Viết hàm countURLs(str) để đếm số lượng URLs có trong câu.
// URL có định dạng: protocol://domain.com/path-name
// URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
// Domain có thể là .com, .com.vn hoặc .vn
// Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ
// Trả về số lượng URLs tìm thấy trong câu.

function countURLs(str) {
  if (typeof str !== 'string') return '';

  let countUrl = 0;
  let newArr = str.split(' ');

  for (let i = 0; i < newArr.length; i++) {
    let isProtocol =
      newArr[i].includes('http') ||
      newArr[i].includes('https') ||
      newArr[i].includes('ws') ||
      newArr[i].includes('wss');
    let isDomain =
      newArr[i].includes('.com') ||
      newArr[i].includes('.vn') ||
      newArr[i].includes('.com.vn');

    let specialIndex = newArr[i].lastIndexOf('/');
    let dotFirstIndex = newArr[i].indexOf('.');
    if (isProtocol && isDomain) {
      if (newArr[i].slice(specialIndex + 1, dotFirstIndex).length >= 3)
        countUrl += 1;
    }
  }

  return countUrl;
}

// console.log(countURLs('my website is: http://ezfrontend.com you can visit it'));
// console.log(countURLs('my website is: http://ez.com you can visit it'));
// console.log(
//   countURLs(
//     'my website is: http://ezfrontend.com you can visit it http://ezfrontend.com'
//   )
// );
