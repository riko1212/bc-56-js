'use strict';

/*
 * Конкатенація рядків, шаблонні рядки
 */

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Привіт ім'я_користувача, ваш вік вік_користувача.
*/
// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// const result = 'Привіт ' + userFirstName + ',' + ' ваш вік ' + userAge;

// console.log(result);

//? Виконайте завдання вище, використовуючи шаблонні рядки
// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// const result = `Привіт  ${userFirstName}, ваш вік ${userAge}`;

/*
 * Властивості і методи рядків
 */

//? Запитайте у користувача ім'я та дізнайтеся, зі скількох символів, воно складається.
// const userFirstName = prompt('Ваше ім`я');

// console.log(userFirstName.length);

// console.log(userFirstName[userFirstName.length - 2]);

//? Попросіть користувача ввести email і переведіть у нижній регістр.
// const userEmail = prompt('Ваш email');

// const resEmail = userEmail.toLowerCase();

// console.log(resEmail);

//? Попросіть користувача ввести email і переведіть у верхній регістр
// const userEmail = prompt('Ваш email').toUpperCase();

// const resEmail = userEmail.toUpperCase();

// console.log(prompt('Ваш email').toUpperCase());

/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?
  ? Якщо є, дізнайтесь позицію на якій перебуває цей підрядок
*/
// const languages = 'HTML, CSS, 12, JS, PHP, React, Vue, Node.js, C, C++';

// const isJavaScript = languages.includes('JS');
// const count = '12';
// const idxOfJs = languages.indexOf('fsdf');
// console.log(isJavaScript);
// console.log(idxOfJs);

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на: %, rem, em або px;
// const str = '24px';

//? У нас є рядок '23,4', замініть кому на крапку
// let num = prompt('Введіть якесь число');
// num = num.replaceAll(',', '.');
// console.log(Number(num));

/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/
// const str =
//   'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// const result = str.replaceAll('dog', 'monkey');
// console.log(result);

//? У нас є дата у форматі '12:05:21', замініть (:) на (.)
// const someDate = '12:05:21';
// console.log(someDate);
// const fixedData = someDate.replaceAll(':', '.');
// console.log(fixedData);

/*
  ? Дано рядок 'Vasyl Ivanenko is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем.
*/
// const userName = prompt('Ваше ім`я');

const str = 'Vasyl Ivanenko is 24 years old';

const name = str.slice(0, 14);
const age = Number(str.slice(18, 20));

console.log(`${name} is ${age}`);
console.log(name + '...');
