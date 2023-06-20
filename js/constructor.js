/*
 * Клас - шаблон, за яким будуть створені однотипні об'єкти
 * Екземпляр - це об'єкт створений за класом
 * Інтерфейс - набір доступних методів та властивостей
 */

function User(userInfo) {
  // this = {}
  const {
    firstName,
    lastName,
    age,
    phoneNumber,
    login,
    password,
    country = '-',
  } = userInfo;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.phoneNumber = phoneNumber;
  this.login = login;
  this.password = password;
  this.country = country;
  // return this
}

User.prototype.showName = function () {
  return this.firstName;
};

const obj = {
  firstName: 'Edward',
  lastName: 'Smith',
  age: 30,
  phoneNumber: '(096) 58-05-459',
  login: 'id@si.pg',
  password: '123456',
};
const user1 = new User(obj);
const user2 = new User({
  firstName: 'Michael',
  lastName: 'Gill',
  age: 20,
  login: 'cu@hecekalo.edu',
  phoneNumber: '(097) 60-62-231',
  password: 'qwerty123',
  country: 'Ukraine',
});

console.log(user1.showName());
console.log(user1);
console.log(user2);

// const user1 = {
//   firstName: 'Edward',
//   lastName: 'Smith',
//   age: 30,
//   phoneNumber: '(096) 58-05-459';
//   login: 'id@si.pg';
//   password: '123456'
// };

//? Функція конструктор

// const user1 = {
//   firstName: 'Edward',
//   lastName: 'Smith',
//   age: 30,
//   phoneNumber: '(096) 58-05-459';
//   login: 'id@si.pg';
//   password: '123456'
// };

// const user2 = {
//   firstName: 'Michael',
//   lastName: 'Gill',
//   age: 20,
//   login: 'cu@hecekalo.edu';
//   phoneNumber: '(097) 60-62-231';
//   password: 'qwerty123'
// };

//? Створюємо методи для наших екземплярів

User.prototype.showName = function () {
  return this.firstName;
};
