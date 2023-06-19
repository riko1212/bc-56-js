/*
 *  Методи функцій call та apply
 */

//* Функції це об'єкти зі своїми властивостями та методами

//* call та apply
//? Викличте функцію showFullName у контексті об'єкта user
// const showFullName = function (message, number) {
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
// };

// console.dir(showFullName);

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
//   showName() {
//     console.log(this.firstName);
//   },
// };

// const anotherUser = {
//   firstName: 'Kate',
//   lastName: 'Johns',
//   age: 22,
// };

// user.showName();

// user.showName.apply(anotherUser, ['Hello']);

// showFullName.apply(user, ['Hello']);

//? Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser1 = {
//   firstName: 'Lottie',
//   lastName: 'Burgess',
//   age: 40,
// };

// showFullName.call(anotherUser1, 'Hi', 20);
// showFullName.apply(anotherUser1, ['Hi', 20]);

//* bind
// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const showUserFullName = showFullName.bind(user);
// showUserFullName();

//* Метод об'єкта у ролі колбека

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback) {
//   callback();
// };

// someFunction(user.showThis);

// const showUserName = user.showThis.bind(user);

// someFunction(showUserName);

/*
? Що виведе код?
*/
// const f = function () {
//   console.log(this.name);
// };

// const user = {
//   name: 'Вася',
// };

// const anotherUser = {
//   name: 'Петя',
// };

// const copyFunc = f.bind(user).bind(anotherUser);

// copyFunc();

/*
? Виклик checkPassword() у наведеному нижче коді повинен перевірити пароль та викликати user.loginOk/loginFail залежно від відповіді.
? Однак його виклик призводить до помилки. Чому?
 */
const checkPassword = function (ok, fail) {
  // ok = user.loginOk
  // fail = user.loginFail

  const password = 'rockstar';

  if (password === 'rockstar') {
    ok();
  } else {
    fail();
  }
};

const user = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

checkPassword(user.loginOk.bind(user), user.loginFail.bind(user));
