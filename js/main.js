/*
 *  Масиви: літерал масива, елементи, індексація, довжина
 */
// const arr = [12, 35, 'hello', true];

// const lastElNum = arr.length - 1;
// arr.length = 8;
// console.log(arr[6]);

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "Rock&Roll" в кінець.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];

// console.log(genres);

// // genres[genres.length] = 'Rock&Roll';
// genres.push('Rock&Roll', 'Funk');

// console.log(genres);
// const lastEl = genres.pop();

// const firstEl = genres.shift();
// genres.unshift('Country', 'Reggy');
// genres.shift();
// console.log(genres);
// console.log(firstEl);
// // console.log(genres[genres.length - 1]);

/*
 * Присвоєння за посиланням і за значенням
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть до консолі обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/

// const arr = new Array(5, 2, 89);

// console.log(arr);

// let a = 10;

// const b = a;

// console.log('a: ', a);
// console.log('b: ', b);

// a = 20;

// console.log('a: ', a);
// console.log('b: ', b);

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть до консолі обидва цих масива
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/
// const arr1 = [1, 2, 3];

// const arr2 = arr1;

// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

// arr1.push(4);
// console.log(arr1 === arr2);

// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

/*
 * Перебір масива циклами for та for...of
 */

/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з першого.
*/
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(i + 1 + ' : ' + fruits[i]);
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/

// const numbers = [2, 17, 94, 1, -20, -1, 23, -40, 37];
// let min = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }

// }
// console.log(min);

// for (const number of numbers) {
//   console.log(number);
//   if (number === -20) {
//     min = number;
//     break;
//   }
// }

// console.log(min);

/*
? У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (let i = 0; i < salaries.length; i += 1) {
//   total += salaries[i];
// }

// const sum = function (arr) {
//   let total = 0;
//   for (const el of arr) {
//     total += el;
//   }
//   return total;
// };

// console.log(sum(salaries));
// sum(salaries);

// for (const salery of salaries) {
//   total += salery;
// }

// console.log(total);

/*
? У нас є кілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

let total = 0;

const managerSalaries = [100, 150, 250, 400, 500];
const developersSalaries = [800, 1500, 4000];

//Варіант 1
// for (const salery of managerSalaries) {
//   total += salery;
// }

// for (const salery of developersSalaries) {
//   total += salery;
// }

// console.log(total);

//Варіант 2
// const allSallaries = managerSalaries.concat(developersSalaries);

// const newManagerSaleries = [].concat(managerSalaries);
// console.log(managerSalaries);
// console.log(newManagerSaleries);

// managerSalaries.push(1200);

// console.log(managerSalaries === newManagerSaleries);

// console.log(managerSalaries);
// console.log(newManagerSaleries);
// for (const salery of managerSalaries.concat(developersSalaries)) {
//   total += salery;
// }

// console.log(total);
/*
 * Базові методи: split та join, indexOf та includes, push, slice та splice, concat
 */

/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються в змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/
// const values = '8 11';
// const sides = values.split(' ');
// const area = Number(sides[0]) * Number(sides[1]);
// console.log(area);
/*
? Напиши скрипт, який виводить в консоль ім'я та телефонний номер користувача.
? У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let n = 0; n < namesArr.length; n += 1) {
//   console.log(`${namesArr[n]} : ${phonesArr[n]}`);
// }

// console.log(namesArr);
// console.log(phonesArr);

/*
? Напиши скрипт, який «розвертає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/

const string = 'Welcome to the future';

//1
// let newSrtring = '';
// for (let i = string.length - 1; i >= 0; i -= 1) {
//   newSrtring += string[i];
// }
// console.log(newSrtring);

//2
// console.log(string.split('').reverse().join(''));

//3

// const charArr = string.split('');
// console.log(charArr);
// const reverseArr = [];

// for (let i = charArr.length - 1; i >= 0; i -= 1) {
//   reverseArr.push(charArr[i]);
// }

// console.log(reverseArr.join(''));

/*
? У нас є масив співробітників, Співробітник Shaw звільнився, видаліть його з масиву
*/

const em = ['Thornton', 'John'];
//Видалення
const employees = ['Dennis', 'Watkins', 'Shaw', 'Ray'];
const idxOfShow = employees.indexOf('Shaw');
console.log(employees);

employees.splice(idxOfShow, 1);

console.log(employees);

//? Додати/замінити нового співробітника Thornton, перед Watkins;
//Додавання
const idxOfWatkins = employees.indexOf('Watkins');
employees.splice(idxOfWatkins, 0, 'Thornton');

console.log(employees);

//? замінити  співробітника Ray, на John;

//Заміна

const idxOfRey = employees.indexOf('Ray');
employees.splice(idxOfRey, 1, 'John');

console.log(employees);
