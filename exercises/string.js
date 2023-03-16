// 1. Convert string to dash string
const str = "I love to learn Javascript";
// expected: "i-love-to-learn-javascript"
console.log(str.toLowerCase().replaceAll(" ", "-"));  
console.log(str.toLowerCase().split(" ").join("-"));


// 2. Truncate string to 30 characters with ...
const longStr = `Write a JavaScript function to split a string and convert it into an array of words`;
// expected: Write a JavaScript function to ...
console.log(longStr.replace(longStr.slice(30), " ..."));

// 3.
const newStr = `javascript is awesome`;
// expected: Javascript is awesome
let uppercase = newStr.slice(0, 1).toUpperCase();
let resultNewStr = uppercase + newStr.slice(1);
console.log(resultNewStr);

// 4.
const lastStr = "evondev is awesome";
// expected: awesome is evondev
console.log(lastStr.split(" ").reverse().join(" "));