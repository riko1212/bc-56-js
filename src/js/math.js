'use strict';
//Іменованиі експорти - їх може бути багато
export const add = (a, b) => {
  return a + b;
};

export const sub = (a, b) => {
  return a - b;
};

export const division = (a, b) => {
  return a / b;
};

const multi = (a, b) => {
  return a * b;
};

//Також ф-ції можна зібрати в обєкт і експортувати одним махом

// export default {
//   add,
//   sub,
//   multi,
// };

// Дефолтний - може бути 1 раз
export default multi;
