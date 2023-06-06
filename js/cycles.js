/*
 * Цикли (while, do while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тіло цикла (statement)
// }

// while () {

// }

/*
? Виведіть числа від 1 до 50
*/
// let iterator = 1;

// while (iterator <= 50) {
//   console.log(iterator);
//   // iterator = iterator + 1;
//   iterator += 1;
// }

/*
? Знайдіть суму чисел від 1 до 100
 */
// let iterator = 1;
// let total = 0;

// while (iterator <= 100) {
//   total += iterator;
//   console.log(total);
//   // iterator = iterator + 1;
//   iterator += 1;
// }

// console.log(total);

/*
? Дано число n = 1000.
? Ділить його на 2 стільки разів, поки результат поділу не стане менше 50.
? Яке число вийде?
? Порахуйте кількість ітерацій, необхідних для цього, та запишіть його в змінну num.
*/
// let n = 60;
// let num = 0;

// while (n / 2 >= 50) {
//   num += 1;
//   n /= 2;
// }

// console.log(n);
// console.log(num);

/*
 * Do While
 */
// do {
// statement
// } while (condition);

// do {
//   num += 1;
//   n /= 2;
// } while (n / 2 >= 50);

// console.log(n);
// console.log(num);

/*
? Напишіть цикл, який пропонує в prompt ввести число більше 100.
? Якщо відвідувач ввів інше число – попросити ввести ще раз.
? Цикл повинен запитувати число, поки відвідувач не введе число, більше 100.
? Передбачається, що відвідувач вводить лише числа;
*/
// let number;

// do {
//   number = Number(prompt('Введіть число'));
// } while (number <= 100);
//------------------------------------
// number = Number(prompt('Введіть число'));

// while (number <= 100) {
//   number = Number(prompt('Введіть число'));
// }

// console.log(number);

/*
 * For
 */
// for (initialization; condition; post - expression) {
//   statements
// }

// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);
// }

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/

// for (let i = 2; i <= 10; i += 2) {
//   if (i % 2 ===0 ) {
//     console.log(i);
//   }
// }

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, 'FizzBuzz');
//   } else if (i % 5 === 0) {
//     console.log(i, 'Buzz');
//   } else if (i % 3 === 0) {
//     console.log(i, 'Fizz');
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i += 1) {
//   let str = '';
//   if (i % 3 === 0) {
//     str += 'Fizz';
//   }
//   //str==='Fizz'
//   if (i % 5 === 0) {
//     str += 'Buzz';
//   }
//   //str==='FizzBuzz'
//   console.log(str || i);
// }

/*
 ? Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином:
 ? *
 ? **
 ? ***
 ? ****
 ? *****
 ? ******
 ? *******
 */

let star = '';
let i = 0;

for (;;) {
  star += '*';
  console.log(star);
}

// for (let i = '*'; i === '*******'; i += '*') {
//   console.log(i);
// }
