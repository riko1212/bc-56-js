/*
 * Синхронний vs Асинхронний JS
 */

// setTimeout(() => {
//   console.log('Timeout');
// }, 1000);

// setTimeout(() => {
//   console.log('NewTimeout');
// }, 1000);

// console.log('Start');
// const fn = () => {
//   console.log('Hello');
// };

// fn();

// console.log('End');

//*  Стек виклику функцій (http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!)

//* Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

//* Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)

// const timeoutID = setTimeout(() => {
//   alert('Hello');
// }, 5000);

// console.log(timeoutID);

// setTimeout(() => {
//   console.log('setTimeout clear');
//   clearTimeout(timeoutID);
// }, 3000);

let a = 0;

const intervalId = setInterval(() => {
  console.log(a);
  if (a < 10) {
    a += 1;
  } else {
    clearInterval(intervalId);
  }
}, 1000);
