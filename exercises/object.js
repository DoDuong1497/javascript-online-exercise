// 1. Write a method that returns a deep array like [[key, value]]
// Expected Result: makePairs({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
function makePairs(obj) {
  if (Object.keys(obj).length === 0) return {};
  return Object.entries(obj);
}

// console.log(makePairs({ a: 1, b: 2 }));

// 2. Write a method that returns new object without provided properties
// Expected Result: without({ a: 1, b: 2 }, 'b') => { a: 1 }
function without(obj, key) {
  if (Object.keys(obj).length === 0 || typeof key !== 'string') return {};
  delete obj[key];
  return obj;
}

// console.log(without({ a: 1, b: 2 }, 'a'));

// 3. Write a method that makes a shallow check is object empty
// Expected Result: isEmpty({}) => true, isEmpty({ a: undefined }) => true, ({ a: 1 }) => false
function isEmpty(obj) {
  let result = true;
  for (const key in obj) {
    if (Boolean(obj[key])) result = false;
  }

  return result;
}

// console.log(isEmpty({ a: 1, c: 2 }));

// 4. Write a method that makes a shallow compare of two objects
// Expected Result: True if objects are identical, false if objects are different isEqual({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
function isEqual(obj1, obj2) {
  if (
    Object.keys(obj1).length === 0 ||
    Object.keys(obj2).length === 0 ||
    Object.keys(obj1).length !== Object.keys(obj2).length
  )
    return false;

  for (const key in obj1) {
    if (obj1[key] === obj2[key]) return true;
  }
}

// console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 }));

// 5. Write a method that finds shallow intersections of objects
// Expected Result: intersections({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
function intersections(obj1, obj2) {
  if (Object.keys(obj1).length === 0 || Object.keys(obj2).length === 0)
    return {};

  let newObj = {};
  for (const key in obj1) {
    if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      newObj[key] = obj1[key];
    }
  }

  return newObj;
}

console.log(intersections({ a: 1, b: 2 }, { c: 1, b: 2 }));
