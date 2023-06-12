/*
 * Створення об'єкта (конструктор, литерал).
 * Властивості, ключі (ім'я) та значення
 */

// const user = {
//   name: 'Ted',
//   age: 40,
//   profession: {
//     position: 'Manager',
//     expirience: 2,
//   },
// };

// // console.log(user.age);

// const obj = Object.create(user);

// obj.age = 50;
// // // obj.name = 'Bill';
// console.log(obj);

/*
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 */

// user.adult = true;

// console.log(user);

// user.length

/*
 * Короткий запис властивостей
 */

/* <input type="text" name="username"> */
/* <input type="email" name="useremail"> */

// const userName = 'Bob';
// const userEmail = 'test@mail.com';

// const user = {
//   userName,
//   userEmail,
// };

// console.log(user);

/*
 * Присвоєння за посиланням
 */

// const user = {
//   firstName: 'Brett',
//   lastName: 'Romero',
//   age: 20,
// };

// const user2 = user;

// console.log(user);
// console.log(user2);

// user2.age = 40;

// console.log(user);
// console.log(user2);

/*
 * Все у цьому світі об'єкти
 */

// const arr = [1, 2, 3];

// const obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3,
// };

// arr['3'] = 4;

// console.log(arr);
// console.log(obj);

// let fn = function () {
//   console.log('Hello');
// };

// fn = 123;

// console.dir(fn);
