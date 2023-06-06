/*
 * Розгалуження if
 */

// if (умова) {
// тіло if
// }

// const age = 58;

// if (age >= 18) {
//   console.log('adult');
// }

/*
? Дано рядок, що складається із символів, наприклад, 'abcde'.
? Перевірте, що першим символом цього рядка є буква 'a'.
? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
*/
// const str = 'abcde';

// if (str.startsWith('ab')) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

/*
? Запросіть у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/
// const userNumber = Number(prompt('Введіть якесь число'));

// if (userNumber === 10) {
//   console.log('Вірно');
// } else {
//   console.log('Невірно');
// }

/*
? У змінній min лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/
// const min = -100;
// false;
// if (min >= 0 && min < 15) {
//   console.log('перша чверть години');
// } else if (min >= 15 && min < 30) {
//   console.log('друга чверть години');
// } else if (min >= 30 && min < 45) {
//   console.log('третя чверть години');
// } else if (min >= 45 && min < 60) {
//   console.log('четверта чверть години');
// } else {
//   console.log('Помилка');
// }

/*
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!»
*/
// const userInput = prompt('Яка «офіційна» назва JavaScript?');

// if (userInput.toLowerCase() === 'ECMAScript'.toLowerCase()) {
//   console.log('Вірно!');
// } else {
//   console.log('Не знаєте? ECMAScript!');
// }

/*
? Напишіть код, який отримує число через prompt, а потім виводить у console.log:
? 1, якщо значення більше нуля,
? -1, якщо значення менше нуля,
? 0, якщо значення дорівнює нулю.
? Передбачається, що користувач вводить лише цифри.
*/
// const userNumber = Number(prompt('Введіть число'));

// if (userNumber > 0) {
//   console.log(1);
// } else if (userNumber < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

/*
 * Switch case
 */

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }

// const num = Number(prompt('number'));

// switch (num) {
//   case 2:
//     console.log('number 2');

//     break;

//   case 10:
//     console.log('number 10');
//     break;
//     console.log(123);

//   case 7:
//     console.log('number 7');
//     break;

//   default:
//     console.log('wrong number');
// }

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt('Введіть число між 0 та 3'));

// switch (number) {
//   case 0: {
//     alert('Ви ввели число 0');
//     break;
//   }
//   case 1: {
//     alert('Ви ввели число 1');
//     break;
//   }
//   case 2:
//   case 3: {
//     alert('Ви ввели число 2, а може і 3');
//     break;
//   }
//   default: {
//     alert('Ви ввели якесь інше число');
//   }
// }

// if (number === 0) {
//   alert('Ви ввели число 0');
// } else if (number === 1) {
//   alert('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   alert('Ви ввели число 2, а може і 3');
// } else {
//   alert('Ви ввели якесь інше число');
// }

/*
 * Тернарний оператор
 */

// <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна>

// const age = 20;
// let res;
// const res = age > 18 ? 'adult' : 'not adult';

// if (age > 18) {
//   res = 'adult';
// } else {
//   res = 'not adult';
// }

// console.log(res);

/*
? Перепишіть конструкцію if з використанням умовного оператора '?':
*/
// const a = 2;
// const b = 1;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

// const result = a + b < 4 ? 'Мало' : 'Багато';

// console.log(result);

/*
?  Перепишіть if..else за допомогою декількох операторів '?'.
*/

const login = 'Директор';
let message;

message =
  login === 'Співробітник'
    ? 'Привіт'
    : login === 'Директор'
    ? 'Вітаю'
    : login === ''
    ? 'Немає логіну'
    : '';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Вітаю';
// } else if (login === '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

console.log(message);
