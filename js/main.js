/*
 * Функції з побічними ефектами та чисті функції
 */
//! Dirty function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (...args) => {
//   numbers.push(...args);
// };

// pushNumbers(9, 6, 8);

// console.log(numbers);

//? Clear function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (arr, ...args) => {
//   const bigArr = [...arr];
//   bigArr.push(...args);
//   return bigArr;
// };

// pushNumbers(numbers, 9, 6, 8);

// console.log(pushNumbers(numbers, 9, 6, 8));

// console.log(numbers);

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = (arr) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
//   return arr;
// };

// doubleMulti(numbers);
// console.log(doubleMulti(numbers));

// console.log(numbers);

//? Clear function

const numbers = [123, 56, 78, 9, 3];

const doubleMulti = (arr) => {
  const newArr = [...arr];
  const l = arr.length;
  for (let i = 0; i < l; i += 1) {
    newArr[i] *= 2;
  }
  return newArr;
};

doubleMulti(numbers);
console.log(doubleMulti(numbers));

console.log(numbers);
