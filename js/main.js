/*
 * Операція spread замість concat і slice
 */

// const arr = [1, 2, 3];

// const arr2 = [].concat(arr);
// const arr2 = arr.slice();

//* Копія масива
// const arr2 = [...arr];

// console.log(arr);
// console.log(arr2);

// arr2.push(4);

// console.log(arr);
// console.log(arr2);

//* Об'єднання масивів

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr2];

// console.log(...arr2, ...arr1, 7, 8);

//* Розпилення масиву у функцію

// const arr1 = [1, 2, 3, 5, 18, -3];
// const max = Math.max(...arr1);
// console.log(max);

/*
 * Операція spread замість Object.assign({}, obj)
 */

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };

// const user1 = Object.assign({}, user);

// const user1 = {
//   firstName: 'Anonymus',
//   ...user,
//   gender: 'male',
//   age: 12,
// };

// // user1.age = 40;

// console.log(user);
// console.log(user1);

//* Розпилення складних типів

// const user = {
//   email: 'test@MediaList.com',
//   age: 40,
//   location: { lat: 10, lon: 20 },
// };

// // const userEmail = user.email;

// // const userEmail = 'mail@email.com';
// // const name = user.name;
// const { email, ...props } = user;
// // const { lat, lon } = newLocation;
// console.log(props);
const user = {
  firstName: 'Jonathan',
  lastName: 'Barnett',
  age: 30,
  someArr: [1, 2, 3, 4],
  showAge() {
    return user.age;
  },
};

const keys = Object.keys(user);

for (const key of keys) {
  console.log(user[key]);
}

function fn({ n } = {}) {
  if (n === undefined) {
    return;
  }

  console.log(n.includes(1));
}

fn();
// console.log(keys);

// const { ...user1 } = user;
// const user1 = {
//   ...user
// }

// console.log('user ----> ', user);
// console.log('user1 ----> ', user1);

// console.log('---------------');

// user1.age = 40;

// console.log('user ----> ', user);
// console.log('user1 ----> ', user1);

// user1.someArr.push(5);
// console.log('---------------');

// console.log('user ----> ', user);
// console.log('user1 ----> ', user1);

/*
 * Операція rest
 */
//? Напишіть функцію sum, яка складає довільну кількість аргументів

// const sum = function (etalon, ...args) {
//   // const args = Array.from(arguments);
//   // let total = 0;
//   // for (const item of args) {
//   //   total += item;
//   // }
//   // return total;
//   return args.includes(etalon);
// };

// console.log(sum(6, 1, 3, 5));
// console.log(sum(6, 3, 5, 6, 2));
