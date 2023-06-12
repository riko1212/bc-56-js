/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників

// Варіант 1 Через for...in

// const salaries = {

//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const newSalaries = Object.create(salaries);

// salaries.Kate = 150;

// newSalaries.Ted = 120;
// newSalaries.Sem = 180;

// console.log(newSalaries);
// let total = 0;

// for (const key in newSalaries) {
//   if (newSalaries.hasOwnProperty(key)) {
//     total += newSalaries[key];
//   }
// }

// console.log(total);

// Варіант 2 Через Object.keys  і for...of

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const salaryKeys = Object.keys(salaries);

// console.log(salaryKeys);

// let total = 0;

// for (const key of salaryKeys) {
//   total += salaries[key];
// }

// console.log(total);

// Варіант 3 Через Object.values  і for...of

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  length: 3,
};

const salaryValues = Object.values(salaries);

console.log(salaryValues);

let total = 0;

for (const values of salaryValues) {
  total += values;
}

console.log(total);
