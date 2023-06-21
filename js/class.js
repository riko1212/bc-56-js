/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Геттери та сеттери
 * Статичні властивості та методи
 */

class User {
  #userLogin;
  #password;

  static test = 5;
  constructor(userInfo) {
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
    this.#userLogin = login;
    this.#password = password;
    this.country = country;
  }
  showName() {
    return this.firstName;
  }
  get login() {
    if (User.validate()) {
      return this.#userLogin;
    } else return 'Error!';
  }
  set login(newLogin) {
    if (User.validate(newLogin)) {
      this.#userLogin = newLogin;
      return typeof newLogin;
    }
  }

  static validate(name) {
    return typeof name === 'string';
  }
  static pow(num) {
    return User.test * num;
  }
}

const obj = {
  firstName: 'Edward',
  lastName: 'Smith',
  age: 30,
  phoneNumber: '(096) 58-05-459',
  login: 'id@si.pg',
  password: '123456',
};
const user1 = new User(obj);
console.log((user1.login = 123));

console.log(user1);
console.dir(User.pow(15));
