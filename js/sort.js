/*
 *  Метод sort()
 */

//? Сортування чисел та рядків за замовчуванням
// const numbers = [3, 7, 2, 8, 1, 45, 52];
// // const newArr = [...numbers]

// const sortedNum = [...numbers].sort((a, b) => {
//   return a - b;
// });

// console.log(sortedNum);
// console.log(numbers);

// const strArr = ['Maggie', 'Amanda', 'Corey', 'Cora', 'Jordan', 'abc'];

// const sortedString = [...strArr].sort((a, b) => {
//   return b.localeCompare(a);
// });

// console.log(sortedString);

// console.log('Vfrv'.localeCompare('vfrv'));

// 'qwert'.localeCompare('vfrv');

//? Сортування чисел та рядків за умовою
// const numbers = [3, 7, 2, 8, 1, 42, 56];

// const sortedNum = [...numbers].sort((a, b) => {
//   return a - b;
// });

// const strArr = ['Maggie', 'Amanda', 'Corey', 'Cora', 'Jordan', 'abs'];

// const sortedString = [...strArr].sort((a, b) => {
//   return a.localeCompare(b);
// });

/*


? Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований
? по збільшенню значення властивості amount.
*/
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const sortByAscendingAmount = (allCars) => {
//   return [...allCars].sort((a, b) => {
//     return a.amount - b.amount;
//   });
// };

// console.table(sortByAscendingAmount(cars));

/*
? Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований
? за зменшенням значення властивості price.
*/

// const sortByDescendingPrice = (allCars) => {
// return [...allCars].sort((a, b) => {
//     return b.amount - a.amount;
//   });
// }

// console.table(sortByDescendingPrice(cars));

/*
? Нехай функція sortByModel повертає новий масив автомобілів, відсортований за назвою моделі
? в алфавітному та зворотному алфавітному порядку, залежно від значення параметра order.
*/
// 1 Варінат
// const sortByModel = (allCars, order) => {
//   if (order === 'asc') {
//     return [...allCars].sort((a, b) => {
//       return a.model.localeCompare(b.model);
//     });
//   }

//   return [...allCars].sort((a, b) => {
//     return b.model.localeCompare(a.model);
//   });
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// 2 Варіант
// const sortByModel = (allCars, order) => {
//   return [...allCars].sort((a, b) => {
//     if (order === 'asc') {
//       return a.model.localeCompare(b.model);
//     }

//     return b.model.localeCompare(a.model);
//   });
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));