/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */
const user = {
  firstName: 'Poll',
  age: 40,
  showAge() {
    return this.age;
  },
};

const user2 = Object.create(user);

const user3 = Object.create(user2);
user3.isAdult = false;
user3.firstName = 'Anna';

// console.log(user);
// console.log(user2);
console.log(user3.firstName);
// console.log(user2.showAge());

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Власні та не власні властивості об'єкта

// console.log(user3.hasOwnProperty('lastName'));

//* Перевірка власних властивостей obj.hasOwnProperty()

for (const prop in user3) {
  if (user3.hasOwnProperty(prop)) {
    console.log(`${prop}: ${user3[prop]}`);
  }
}

for (const prop of Object.keys(user3)) {
  console.log(`${prop}: ${user3[prop]}`);
}
