/*
 * Функціональний вираз та оголошення функції.
 * Параметри, аргументи, занчення за замовчуванням, повернення.
 */

// function назва_функції(параметр_1, параметр_2...) {
// тіло функції
// }

// const userName = prompt('Enter your name');
// const userAge = prompt('Enter your age');

// function greet(name = 'anonymus', age = 15) {
//   console.log(`Hello, ${name}, your age is ${age}`);
// }

// const firstUser = 'Andrii';
// const secondUser = 'Mykola';
// const thirdUser = 'John';

// greet(firstUser);
// greet(secondUser, 20);
// greet(thirdUser, 58);

//* Повернення

//? Сума 2 чисел

// function sum(numA, numB) {
//   return console.log(numA + numB);
// }

// sum(firstNum, secondNum);

// const numSum = console.log(123);
// console.log(numSum);

//* Function declaration

// const firstNum = 12;
// const secondNum = 25;

// function sum(numA, numB) {
//   return numA + numB;
// }

//* Function expresion

// const sum = function (numA, numB) {
//   return numA + numB;
// };

// const res = sum(firstNum, secondNum);

// console.log(res);

// const res = sum(firstNum, secondNum);

// console.log(res);

/*
? Напиши функцію calcBMI(weight, height) яка розраховує і повертає індекс маси тіла людини.
? Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
? Вага і висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
? тобто як роздільник дробової частини може бути кома.
? Індекс маси тіла необхідно округлити до однієї цифри після коми;
*/

// const calcBMI = function (weight, height) {
//   weight = Number.parseFloat(weight.replace(',', '.'));
//   height = Number.parseFloat(height.replace(',', '.'));
//   const resBMI = weight / Math.pow(height, 2);
//   return resBMI.toFixed(1);
// };

// console.log(calcBMI('80,5', '1,25')); // 28.8

/*
? Напишіть функцію min(a, b), яка повертає менше з чисел a і b.
*/

// const min = function (a, b) {
// const minNum = a < b ? a : b;
// if (a < b) {
//   minNum = a;
// } else {
//   minNum = b;
// }
//   return a < b ? a : b;
// };

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

/*
? Напишіть функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких буде передано до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// function getRectArea(dimensions) {
//   const sides = dimensions.split(' ');
//   return sides[0] * sides[1];
// }

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцію logItems(items), яка отримує масив і використовує цикл for,
? який для кожного елемента масиву буде виводити до консоля повідомлення
? у форматі < номер елемента > - < значення елемента >. Нумерація елементів повинна починатися з 1.
? Наприклад, для першого елемента масиву ['Mango','Poly','Ajax'] з індексом 0 буде виведено 1 - Mango,
? а для індексу 2 виведе 3 - Ajax.
*/

// const logItems = function (items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} : ${items[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '😂', '🍋']);

/*
? Напишіть функцію printContactsInfo(names, phones), яка виводить у консоль ім'я і телефонний номер користувача.
? Параметри names і phones будуть передані рядками, розділені комами.
? Порядковий номер імен і телефонів у рядках вказують на відповідність.
? Кількість імен і телефонів гарантовано однакова.
*/

// const printContactsInfo = function (names, phones, ...args) {
//   names = names.split(',');
//   phones = phones.split(',');
//   for (let i = 0; i < names.length; i += 1) {
//     console.log(`${names[i]}: ${phones[i]}`);
//   }
//   console.log(args);
// };

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
//   'Hello',
//   654,
//   45
// );
// printContactsInfo(
//   'Vera,Carr,Violet,Sherman',
//   '89001234567,89001112233,890055566377,890055566300'
// );

/*
? Напишіть функцію findLargestNumber(numbers) яка шукає найбільше число в масиві.
*/

// function findLargestNumber(numbers) {
//   let max = numbers[0];
//   for (let i = 1; i < numbers.length; i += 1) {
//     if (max < numbers[i]) {
//       max = numbers[i];
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення.
? Всі аругменти будуть тільки числами.
*/

// const calcAverage = function () {
//   let total = 0;
//   for (const item of arguments) {
//     total += item;
//   }
//   return total / arguments.length;
// };

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс в кінець колекції
? removeCourse(name) - видаляє курс з колекції
? updateCourse(oldName, newName) - змінює назву курса
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// console.log(courses);

// const addCourse = function (name) {
//   if (courses.includes(name)) {
//     console.log('У вас вже є такий курс');
//     return;
//   }

//   if (courses.length === 1) {
//     console.log('Цей курс не підходить');
//     return;
//   }
//   courses.push(name);
// };

// console.log(addCourse());

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'

// const removeCourse = function (name) {
//   if (courses.includes(name)) {
//     const idxOfCourse = courses.indexOf(name);
//     courses.splice(idxOfCourse, 1);
//     return;
//   }
//   console.log('Курс за такою назвою не знайдено');
// };

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс за такою назвою не знайдено'

// const updateCourse = function (oldName, newName) {
//   if (!courses.includes(oldName)) {
//     console.log('Курса за такою назвою не знайдено');
//     return;
//   }
//   const idxOfCourse = courses.indexOf(oldName);
//   courses.splice(idxOfCourse, 1, newName);
// };

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('С++', 'PHP'); // 'Курса за такою назвою не знайдено'

// const isTrue = false == [];
// const isFalse = true == ![]];

// console.log(isTrue);
