/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 ? Дано два числа 20 та 10.
 ? Проведіть над цими числами математичні операції (+ - / * %).
*/

// const numA = 23;
// const numB = 10;

// const sum = numA + numB;
// console.log(sum);

// const division = numA / numB;
// console.log(division);

// const mult = numA * numB;
// console.log(mult);

// const sub = numA - numB;
// console.log(sub);

// const res = numA % numB;
// console.log(res);

//? Перевірте чи парні числа 15, 20, 45, 30.
// const numA = 1744;
// const numB = 7;
// const numC = 45;
// const numD = 30;

// const res = numA % numB;
// console.log(res);
/*
  ? Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/

// const COUNT_OF_MINUTES = 60

// const totalMinutes = 90;

// const hours = Math.floor(totalMinutes / 60);

// const minutes = totalMinutes % 60;

// console.log(hours, 'Hours');
// console.log(minutes, 'Minutes');

/*
 * Number, Number.parseInt(), Number.parseFloat()
 */

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/

// let num = Number.parseFloat(prompt('Введіть число'));

// // num = num + 2;

// console.log(num);

//? Даний рядок '24px', дістаньте з цього рядка ціле число.
// const str = '24px';

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.
// const str = '25.5%';

//? Спробуйте призвести до числа, рядок 'abc'.
// const str = 'abc';

// console.log(Number.parseInt(str));

//? Запросіть у користувача ввести два числа, додайте їх та виведіть результат у консоль.
// const numA = Number(prompt('Число 1?'));
// const numB = Number(prompt('Число 2?'));

// const sum = numA + numB;

// console.log(sum);

/*

 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

/*
  ? Дано число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/
// const number = 23.49999;

// console.log(Math.min(45, 15.5, 27, -3.2));

/*
  ? Попросіть користувача ввести число та степінь.
  ? Зведіть число до степеня і виведіть результат у консоль.

*/

// const num = Number(prompt('Число 1?'));
// const pow = Number(prompt('Число 2?'));

// // const res = Math.pow(num, pow);
// const res = num ** pow;

// console.log(res);

/*
  ? Згенеруйте рандомне число:
  ? від 0 до 10;
*/

// console.log(Math.round(Math.random() * 100));

//? Згенеруйте рандомне число. Мінімальне та максимально значення, отримати від користувача

// const min = Number(prompt('Введіть мінімальне число'));
// const max = Number(prompt('Введіть максимальне число'));

// 1 - 1.4999 - 1 0.5
// 1.5 - 2.4999 - 2 1
// 2.5 - 2.9999 - 3 0.5

// const randomNum = Math.round(min + Math.random() * (max - min));

// console.log(randomNum);

const generateRandomNumbure = (min, max) => {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

let count1 = 0;
let count2 = 0;
let count3 = 0;

for (let i = 0; i < 100; i += 1) {
  const randomNumber = generateRandomNumbure(1, 3);

  switch (randomNumber) {
    case 1: {
      count1 += 1;
      break;
    }

    case 2: {
      count2 += 1;
      break;
    }

    case 3: {
      count3 += 1;
      break;
    }
  }
}

console.log(`1: ${count1}`);
console.log(`2: ${count2}`);
console.log(`3: ${count3}`);
