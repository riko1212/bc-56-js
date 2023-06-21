/*
 * Наслідування з extends та super
 */

class User {
  #login;
  #email;
  constructor({ firstName, lastName, age, login, email } = {}) {
    // this = {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
    // return this;
  }
  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
  getFullName() {
    return `${User.trimStr(this.firstName)} ${User.trimStr(this.lastName)}`;
  }

  static trimStr(str) {
    return str.trim();
  }
}
class Developer extends User {
  constructor({ countOfProjects, ...otherProps } = {}) {
    super(otherProps);
    this.countOfProjects = countOfProjects;
    // return this;
  }
  doDeveloperWork() {
    console.log('Роблю роботу');
  }
}

class Manager extends User {
  constructor({ managerProp, ...otherProps } = {}) {
    // this = {}
    super(otherProps);

    this.managerProp = managerProp;

    // return this;
  }
  doManagerWork() {
    console.log('Роблю роботу');
  }
}

const dev = new Developer({
  countOfProjects: 10,
  firstName: 'Nicholas',
  lastName: 'West',
  age: 30,
  login: 'vcvd',
  email: 'iseegi@sak.sx',
});

console.log(dev.getFullName());

const someManager = new Manager({
  managerProp: 343,
  firstName: 'Caleb',
  lastName: 'Murray',
  age: 20,
  login: 'bgff',
  email: 'uwigicnaf@ra.be',
});

console.log(someManager);
