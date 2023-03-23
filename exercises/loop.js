// 1. Write a method that creates a new array with given values: input: (3, 'a') -> ['a','a','a']
function repeatStr(val, str) {
  if (typeof val !== 'number' || str === '') return false;

  let temp = [];

  for (let i = 0; i < val; i++) {
    temp.push(str);
  }

  return temp;
}

// console.log(repeatStr(3, 'a'));

// 2. Write a method that reverts input array: input: [1,2,3] -> results: [3,2,1]
function reverts(arr) {
  if (arr.length === 0) return false;

  let temp = [];

  // for (let i = arr.length - 1; i >= 0; i--) {
  //   temp.push(arr[i]);
  // }

  let i = arr.length - 1;
  while (i >= 0) {
    temp.push(arr[i]);
    i--;
  }

  return temp;
}

// console.log(reverts([1, 2, 3]));

// 3. Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null: input: [0, 1, false, 2, undefined, '', 3, null] => results: [1, 2, 3]
function filter(arr) {
  if (arr.length === 0) return false;

  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i])) temp.push(arr[i]);
  }

  return temp;
}

// console.log(filter([0, 1, false, 2, undefined, '', 3, null]));

// 4. Write a method that returns an array without listed values: without(array, value) -> without([1,2,3,1,5,7,1], 1) -> [2,3,5,7]
function without(arr, val) {
  if (arr.length === 0 || typeof val !== 'number') return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) arr.splice(i, 1);
  }

  return arr;
}

// console.log(without([1, 2, 3, 1, 5, 7, 1], 1));

// 5. Write a method that returns a duplicate-free array: input: [1, 2, 3, 1, 2] => results: [1, 2, 3]
function duplicateFree(arr) {
  if (arr.length === 0) return false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }

  return arr;
}

// console.log(duplicateFree([1, 2, 3, 1, 2]));

// 6. Write a method that splits an array into parts of determined size(chunk(array, size)): input: chunk([1, 2, 3, 4, 5], 2) => results: [[1, 2], [3, 4], [5]],
function chunk(arr, size) {
  if (arr.length === 0 || typeof size !== 'number') return false;

  let temp = [];
  for (let i = 0; i < arr.length; i += 2) {
    temp.push(arr.slice(i, i + 2));
  }

  return temp;
}

// console.log(chunk([1, 2, 3, 4, 5], 2));

// 7. Write a method that creates an array of unique values that are included in all given arrays: intersection(arr1, arr2) -> intersection([1, 2], [2, 3]) => [2]
// 8. Write a JS code to print Even numbers in given array: input [13,23,12,45,22,48,66,100] -> [12,22,48,66,100]
function evenNumber(arr) {
  if (arr.length === 0) return false;

  let i = 0;
  let temp = [];
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      temp.push(arr[i]);
    }
    i++;
  }

  return temp;
}

// console.log(evenNumber([13, 23, 12, 45, 22, 48, 66, 100]));

// 9. Write a JS code to delete all occurrence of element in given array: deleteElement([23,56,4,78,5,63,45,210,56], 56) -> results: [[23, 4, 78, 5, 63, 45, 210]]
function deleteElement(arr, number) {
  if (arr.length === 0 || typeof number !== 'number') return false;

  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      arr.splice(i, 1);
    }
  }

  temp.push(arr);

  return temp;
}

console.log(deleteElement([23, 56, 4, 78, 5, 63, 45, 210, 56], 56));

// 10. Write a JS code to find the largest number in an array: input [2, 45, 3, 67, 34, 567, 34, 345, 123] -> result: 567
// 11. Write a JS code to find duplicate values in a given array: input [4,2,34,4,1,12,1,4] -> results: [4, 1]
