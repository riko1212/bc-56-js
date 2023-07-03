// Створення нової дати

// const date = new Date(56416541621);
// const date = new Date('2030-04-16');

// console.dir(date.getDay());
// console.dir(date.getDate());

// setInterval(() => {
//   const date = new Date();
//   console.log(
//     `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
//   );
// }, 1000);

// Методи дати

//? TASK 01
// Створіть об'єкт Date для дати: 4 липня 2023 року, 3 години 12 хвилин.
// const date = new Date('2023-07-04 03:12');
// const date = new Date(2023, 6, 4, 3, 12);

// console.log(date);

//? TASK 02
// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».

// const date = new Date(654646546);

// const getWeekDay = (date) => {
//   const weekArr = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   const weekIdx = date.getDay();
//   return weekArr[weekIdx];
// };

// console.log(getWeekDay(date));

//? TASK 03
// Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
// Параметри:
// year – рік з чотирьох цифр, наприклад, 2012.
// month – місяць від 1 до 12.
// Наприклад, getLastDayOfMonth(2012, 2) = 29 (високосний рік, лютий).
// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month, 0);

//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2013, 2));

//? TASK 04
// Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.
const getSecondsToTomorrow = () => {
  const now = new Date();
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  console.log(now);
  console.log(tomorrow);
  const diff = tomorrow - now;
  return diff / 1000;
};

console.log(getSecondsToTomorrow());
