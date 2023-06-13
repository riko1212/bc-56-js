/*
 * Деструктуризація об'єктів
 */
// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// const { firstName, lastName, age, isAdmin } = user;

// const firstName = user.firstName;
// const lastName = user.lastName;
// const age = user.age;
// const isAdmin = user.isAdmin;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(isAdmin);

/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє до змінної firstName.
? властивість lastName присвоє до змінної lastName.
? властивість age присвоє до змінної userAge.
? властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/
// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// const firstName = user.firstName;
// const lastName = user.lastName;
// const age = user.age;
// const isAdmin = isAdmin||false

// const {
//   firstName = 'Anonymus',
//   lastName,
//   age: userAge = 20,
//   isAdmin = false,
// } = user;

// console.log(userAge);

/*
 * Глибока деструктуризація об'єктів
 */
// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: {},
//   },
// };

// const { number, employees, ...other } = team;

// const { employees } = other;

// console.log(employees);

/*
 * Деструктуризація масивів
 */
// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// const [...other] = names;

// other.push('fsdfsdf');

// console.log(names);
// console.log(other);

// const rgb = [210, 100, 50];

// const [red, green, blue] = rgb;
