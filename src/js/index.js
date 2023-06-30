//Іменований - фігурнф дужки і імя не міняється
import { add } from './math';
//Дефолтний - без дужок і імя може мінятися
import number from './math';
//Комбінація
import multiple, { add } from './math';

// const user = {
//   userName: "Paul",
//   userAge: 40,
//   userStatus: [1, 2, 3],
//   isAdult: true,
//   showName() {
// return this.userName
//   }
// };

// const jsonUser = JSON.stringify(user);

// console.log(user);
// console.log(jsonUser);

// const parsedUser = JSON.parse(jsonUser)

// console.log(parsedUser);

// try {
//   const someJson = 'Well, this is awkward';
//   const data = JSON.parse(someJson);
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// console.log("❌ You won't see this log");

const user = {
  userName: 'Paul',
  userAge: 40,
  userStatus: [1, 2, 3],
  isAdult: true,
};

localStorage.setItem('some', JSON.stringify(user));
localStorage.removeItem('some');
